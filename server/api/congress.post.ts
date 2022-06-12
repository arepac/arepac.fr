import { SMTPClient } from 'emailjs'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { CongressForm } from '~/types/CongressForm'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const form = await useBody<CongressForm>(event)

  if (
    !config.googleSpreadsheetId.length
    || !config.googlePrivateKey.length
    || !config.googleServiceAccountEmail.length
    || !config.gmailUser.length
    || !config.gmailPw.length
  )
    return createError({ statusCode: 500 })

  const doc = new GoogleSpreadsheet(config.googleSpreadsheetId)
  await doc.useServiceAccountAuth({
    client_email: config.googleServiceAccountEmail,
    private_key: config.googlePrivateKey.replace(/\\n/g, '\n'),
  })

  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]

  const rows = await sheet.getRows()
  const exists = rows.findIndex(e => e.Email === form.email) >= 0

  if (exists)
    return createError({ statusCode: 409 })

  try {
    await sheet.addRow({
      Nom: form.lastName,
      Prénom: form.firstName,
      Email: form.email,
      Téléphone: form.phone,
      Fonction: form.job,
      Etablissement: form.facility,
      Service: form.service,
      Repas: form.meal ? 'oui' : 'non',
    })
  }
  catch (error) {
    return createError({ statusCode: 500 })
  }

  try {
    const client = new SMTPClient({
      user: config.gmailUser,
      password: config.gmailPw,
      host: 'smtp.gmail.com',
      port: 465,
      ssl: true,
    })

    await client.sendAsync({
      from: `AREPAC <${config.googleGmailUser}>`,
      to: `${form.firstName} ${form.lastName} <${form.email}>`,
      subject: 'Inscription au congrès AREPAC',
      text: 'Votre inscription au congrès 2022 de l\'AREPAC à bien été prise en compte.',
    })
  }
  catch (error) {
    console.error(error)
  }

  return {}
})
