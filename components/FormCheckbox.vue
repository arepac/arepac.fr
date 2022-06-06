<script setup lang="ts">
defineProps<{
  name: string
  label: string
}>()
</script>

<template>
  <label>
    <input type="checkbox" :name="name" h-5 w-5 text-primary>
    <span ml-2 text-gray-700>{{ label }}</span>
  </label>
</template>
