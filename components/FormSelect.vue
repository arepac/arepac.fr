<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder?: string
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const change = (e: Event) =>
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
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
    <select
      id="name"
      name="name"
      w-full
      cursor-pointer
      appearance-none
      block
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white
      bg-clip-padding
      bg-no-repeat
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
      :value="modelValue"
      @change="change"
    >
      <slot />
    </select>
  </div>
</template>

<style scoped>
select {
  background-image: url("~/assets/svgs/chevron-down.svg");
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}
</style>
