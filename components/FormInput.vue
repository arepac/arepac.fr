<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder?: string
  error?: string
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const input = (e: Event) =>
  emit('update:modelValue', (e.target as HTMLInputElement).value)
</script>

<template>
  <div w-full>
    <label
      :for="name"
      inline-block
      mb-1
      text-gray-700
      text-sm
      uppercase
      font-bold
    >
      {{ label }}
    </label>
    <input
      type="text"
      :value="modelValue"
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
      @input="input"
    >
    <div text-sm text-red-500 mt-1>
      {{ error }}
    </div>
  </div>
</template>
