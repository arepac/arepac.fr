<script setup lang="ts">
import type { NewsletterForm } from '~/types/NewsletterForm'

let success = $ref(false)
let error = $ref('')

const formData = $<NewsletterForm>({
  email: '',
  firstName: '',
  lastName: '',
})

const submit = async (data: typeof formData) => {
  error = ''
  return $fetch('/api/newsletter', { method: 'post', body: data })
    .then(() => {
      success = true
    })
    .catch((e) => {
      // TODO: remove after Nuxt fix
      if (e.response?.status === 404)
        return
      error = 'Une erreur est survenue.'
    })
}
</script>

<template>
  <div>
    <div
      v-if="success"
      bg-green-100
      text-green-600
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-2
      shadow
      rounded
      p-6
    >
      <div text-2xl i-gg-check-o />
      <div font-bold text-center sm:text-left>
        <slot name="success" />
      </div>
    </div>
    <div
      v-else
      bg-red-50
      p-4
      shadow-md
      flex
      flex-col
      rounded
      sm:flex-row
      sm:px-6
    >
      <img
        src="~/assets/svgs/newsletter.svg"
        alt=""
        self-center
        display-none
        mt-2
        sm:display-block
        sm:mt-0
        sm:mr-6
        w="2/3 sm:1/3"
      >
      <div w-full>
        <slot />
        <FormKit
          v-model="formData"
          type="form"
          submit-label="S'inscrire à la newsletter"
          mt-4
          @submit="submit"
        >
          <div flex flex-col sm:flex-row sm:space-x-6>
            <FormKit
              type="text"
              name="firstName"
              label="Prénom"
              validation="required"
            />
            <FormKit
              type="text"
              name="lastName"
              label="Nom"
              validation="required"
            />
          </div>
          <FormKit
            type="email"
            name="email"
            label="E-mail"
            validation="required|email"
          />
          <div
            v-if="error"
            font-bold
            flex
            items-center
            justify-center
            mb-3
            text-red-700
          >
            <span i-gg-danger text-2xl mr-1 sm:inline-block />
            <span>{{ error }}</span>
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>
