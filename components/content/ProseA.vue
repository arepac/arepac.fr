<script setup lang="ts">
withDefaults(defineProps<{
  href?: string
  blank?: boolean
}>(), {
  href: '',
  blank: false,
})
</script>

<template>
  <NuxtLink :href="href" underline hover:no-underline>
    <slot />
  </NuxtLink>
</template>
