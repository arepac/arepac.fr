<script setup lang="ts">
const formData = $ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  facility: '',
  facilityName: '',
  service: '',
  function: '',
  meal: false,
})
</script>

<template>
  <div bg-red-100 p-6 shadow rounded>
    <div flex justify-center mt--2 mb-2>
      <h2 mx-auto inline-block text-2xl border-b-2 border-secondary mb-4>
        {{ "S'inscrire au congrès" }}
      </h2>
    </div>

    <p><slot name="description" /></p>
    <form flex flex-col space-y-2>
      <div flex flex-col space-y-2 w-full sm:flex-row sm:space-y-0>
        <FormInput
          v-model="formData.firstName"
          label="prénom"
          name="firstName"
          sm:mr-4
        />
        <FormInput
          v-model="formData.lastName"
          label="nom"
          name="lastName"
        />
      </div>
      <div flex flex-col space-y-2 w-full sm:flex-row sm:space-y-0>
        <FormInput
          v-model="formData.email"
          label="Email"
          name="email"
          sm:mr-4
        />
        <FormInput
          v-model="formData.phone"
          label="Téléphone"
          name="phone"
        />
      </div>
      <div flex flex-col space-y-2 w-full sm:flex-row sm:space-y-0>
        <FormSelect
          v-model="formData.facility"
          label="établissement"
          name="facility"
          placeholder="Sélectionnez un établissement"
          sm:mr-4
        >
          <option disabled selected value="">
            {{ "Sélectionnez un établissement" }}
          </option>
          <ContentQuery v-slot="{ data }" path="facilities" find="one">
            <option v-for="o in data.facilities as string[]" :key="o">
              {{ o }}
            </option>
          </ContentQuery>
          <option value="other">
            {{ "Autre" }}
          </option>
        </FormSelect>
        <FormInput
          v-if="formData.facility === 'other'"
          v-model="formData.facilityName"
          label="nom de l'établissement"
          name="facilityName"
        />
        <span v-else inline-block w-full />
      </div>
      <div flex flex-col space-y-2 w-full sm:flex-row sm:space-y-0>
        <FormInput
          v-model="formData.service"
          label="service"
          name="service"
          sm:mr-4
        />
        <FormInput
          v-model="formData.function"
          label="fonction"
          name="function"
        />
      </div>
      <div flex w-full>
        <FormCheckbox
          v-model="formData.meal"
          label="Je participe au repas"
          name="meal"
        />
      </div>
      <div flex w-full justify-center mt-4>
        <button
          inline-flex
          w-fit
          px-6
          py-3
          bg-primary
          text-white
          font-bold
          text-sm
          leading-tight
          uppercase
          rounded
          shadow-md
          transition
          duration-150
          ease-in-out
          hover:bg-secondary
          hover:shadow-lg
          focus:outline-primary
          focus:shadow-lg
          @click.prevent
        >
          {{ "S'inscrire au congrès" }}
        </button>
      </div>
    </form>
  </div>
</template>
