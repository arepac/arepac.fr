<template>
  <div bg-red-100 p-2 shadow-sm sm:px-6>
    <h2>{{ "S'inscrire au congrès" }}</h2>
    <p><slot name="description" /></p>
    <form flex flex-col space-y-2>
      <div flex flex-col space-y-2 sm:flex-row sm:space-y-0>
        <FormInput label="Prénom" name="firstName" />
        <FormInput label="Nom" name="lastName" />
      </div>
    </form>
  </div>
</template>
