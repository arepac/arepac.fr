<script setup lang="ts">
import type { CongressForm } from '~/types/CongressForm'

defineProps<{
  subtitle?: string
}>()

const success = ref(false)
const error = ref('')

const formData = reactive<CongressForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  facility: '',
  service: '',
  job: '',
  meal: false,
})

const submit = async (data: typeof formData) => {
  error.value = ''
  return $fetch('/api/congress', { method: 'post', body: data })
    .then(() => {
      success.value = true
    })
    .catch((e) => {
      error.value
        = e.response?.status === 409
          ? 'Cette adresse e-mail est déja utilisée.'
          : 'Une erreur est survenue.'
    })
}
</script>

<template>
  <div id="congress-form">
    <div
      v-if="success"
      data-test-id="congress-form-success"
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
    <FormKit
      v-else
      v-model="formData"
      data-test-id="congress-form"
      type="form"
      submit-label="S'inscrire au congrès"
      bg-red-100
      p-6
      shadow
      rounded
      @submit="submit"
    >
      <div flex justify-center mt--2 mb-2>
        <h2 mx-auto inline-block text-2xl border-b-2 border-secondary mb-4>
          {{ "S'inscrire au congrès" }}
        </h2>
      </div>

      <div>
        <p v-if="subtitle" mt-4 mb-6 italic text-center>
          {{ subtitle }}
        </p>
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
        <div flex flex-col sm:flex-row sm:space-x-6>
          <FormKit
            type="email"
            name="email"
            label="E-mail"
            validation="required|email"
          />
          <FormKit
            type="tel"
            name="phone"
            label="Téléphone"
            validation="required"
          />
        </div>
        <div flex flex-col sm:flex-row sm:space-x-6>
          <FormKit
            type="text"
            name="facility"
            label="Etablissement"
            validation="required"
          />
          <FormKit
            type="text"
            name="service"
            label="Service"
            validation="required"
          />
        </div>
        <div flex flex-col sm:flex-row sm:space-x-6 mb-6 sm:mb-0>
          <FormKit
            type="text"
            name="job"
            label="Fonction"
            validation="required"
          />
          <FormKit
            type="checkbox"
            name="meal"
            label="Je participe au repas (offert aux participants)"
            validation=""
          />
        </div>
        <div
          v-if="error"
          data-test-id="congress-form-error"
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
      </div>
    </FormKit>
  </div>
</template>
