<script setup lang="ts">
const options = [
  'CH Abbeville',
  'CH Amiens',
  'CH Armentières',
  'CH Arras',
  'CH Béthune-Beuvry',
]
</script>

<template>
  <FormInput label="My field" name="custom-field" error="oops" />
  <FormInput label="My field 2" name="custom-field2" />
  <FormSelect label="My select" name="my-select" :options="options" />
  <FormCheckbox label="My checkbox" name="my-checkbox" />
</template>
