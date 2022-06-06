<script setup lang="ts">
defineProps<{
  img?: string
  alt?: string
}>()
</script>

<template>
  <div>
    <div text-center sm:text-left>
      <Markdown :use="$slots.default" />
    </div>
    <figure v-if="img" w="sm:3/4" mt-8 text-center m-auto>
      <img :src="img" :alt="alt">
      <figcaption italic text-sm>
        <slot name="caption" />
      </figcaption>
    </figure>
  </div>
</template>
