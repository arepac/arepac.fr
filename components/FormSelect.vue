<script setup lang="ts">
defineProps<{
  name: string
  label: string
}>()
</script>

<template>
  <div>
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
      cursor-pointer
      appearance-none
      block
      w-full
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
    >
      <option selected>
        Open this select menu
      </option>
      <option value="1">
        One
      </option>
      <option value="2">
        Two
      </option>
      <option value="3">
        Three
      </option>
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
