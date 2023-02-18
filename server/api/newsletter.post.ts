import type { NewsletterForm } from '~/types/NewsletterForm'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  if (!config.sibApiKey.length || !config.sibApiUrl.length)
    return createError({ statusCode: 500 })

  const form = await readBody<NewsletterForm>(event)

  try {
    await $fetch<{ id: number }>(config.sibApiUrl, {
      method: 'POST',
      headers: {
        'api-key': config.sibApiKey,
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
  catch (error) {
    createError({ statusCode: 500 })
  }

  return {}
})
