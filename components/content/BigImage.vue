<script setup lang="ts">
withDefaults(
  defineProps<{
    img: string
    alt?: string
  }>(),
  {
    alt: '',
  },
)
</script>

<template>
  <NuxtImg
    :alt="alt"
    :src="img"
    mx-auto
    mb-10 s
    m:mb-12
    w="full sm:1/2"
  />
</template>
