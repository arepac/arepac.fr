<script setup lang="ts">
defineProps<{ hide?: boolean }>()
</script>

<template>
  <div
    v-if="!hide"
    role="alert"
    bg-red-50
    b-primary
    b-t-2
    rounded-b
    flex
    px-3
    py-2
    shadow-md
    text-primary
    text-left
  >
    <img
      alt=""
      src="~/assets/svgs/calendar.svg"
      self-center
      display-none
      h-20
      mr-4
      sm:display-block
    >
    <div flex flex-col w-full space-y-1>
      <p font-bold>
        {{ "Save the date !" }}
      </p>
      <slot />
      <NuxtLink
        to="/congress/#congress-form"
        self-end
        font-semibold
        underline
        hover:no-underline
      >
        {{ "S'inscrire →" }}
      </NuxtLink>
    </div>
  </div>
</template>
