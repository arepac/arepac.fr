import type { NewsletterForm } from '~/types/NewsletterForm'

const api = 'https://api.brevo.com/v3/contacts'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  if (!config.brevoKey.length)
    return createError({ statusCode: 500 })

  const form = await readBody<NewsletterForm>(event)

  try {
    await $fetch(api, {
      method: 'POST',
      headers: {
        'api-key': config.brevoKey,
      },
      body: {
        email: form.email,
        attributes: {
          NOM: form.lastName,
          PRENOM: form.firstName,
        },
        updateEnabled: true,
      },
    })
  }
  catch {
    createError({ statusCode: 500 })
  }
})
