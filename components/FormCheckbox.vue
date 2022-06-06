<script setup lang="ts">
defineProps<{
  name: string
  label: string
}>()
</script>

<template>
  <div inline-flex items-center m-y-2>
    <input
      :id="name"
      :name="name"
      type="checkbox"
      appearance-none
      h-5
      w-5
      b-2
      b-gray-300
      rounded-sm
      bg-white
      transition
      duration-200
      cursor-pointer
      align-top
      bg-no-repeat
      bg-center
      bg-contain
      float-left
      mr-2
      checked:bg-primary
      focus:outline-none
      focus:b-primary
    >
    <label :for="name" cursor-pointer inline-block text-gray-700>
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
input:checked {
  background-image: url("~/assets/svgs/checked.svg");
}
</style>
