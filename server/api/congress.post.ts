import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { CongressForm } from '@/types/CongressForm'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const form = await useBody<CongressForm>(event)

  if (
    !config.googleSpreadsheetId.length
    || !config.googlePrivateKey.length
    || !config.googleServiceAccountEmail.length
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

  await sheet.addRow({
    Nom: form.lastName,
    Prénom: form.firstName,
    Email: form.email,
    Téléphone: form.phone,
    Etablissement: form.facility,
    Service: form.service,
    Repas: form.meal ? 'oui' : 'non',
  })

  return {
    form,
  }
})
