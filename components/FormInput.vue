<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder?: string
}>()
</script>

<template>
  <div>
    <label :for="name" inline-block mb-2 text-gray-700>{{ label }}</label>
    <input
      type="text"
      block
      w-full
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white
      bg-clip-padding
      b-2
      b-solid
      b-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700
      focus:bg-white
      focus:b-primary
      focus:outline-none
    >
  </div>
</template>
