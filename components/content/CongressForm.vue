<script setup lang="ts">
const submitted = ref(false)

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  facility: '',
  service: '',
  job: '',
  meal: false,
})

const submitHandler = async (data) => {
  // Let's pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
  // handle form
  submitted.value = true
}
</script>

<template>
  <FormKit
    v-model="formData"
    type="form"
    submit-label="S'inscrire au congrès"
    bg-red-100
    p-6 shadow rounded
    @submit="submitHandler"
  >
    <div flex justify-center mt--2 mb-2>
      <h2 mx-auto inline-block text-2xl border-b-2 border-secondary mb-4>
        {{ "S'inscrire au congrès" }}
      </h2>
    </div>
    <p my-4>
      <slot />
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
        label="Je participe au repas"
        validation=""
      />
    </div>
  </FormKit>
</template>
