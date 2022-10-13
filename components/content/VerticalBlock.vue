<script setup lang="ts">
withDefaults(defineProps<{
  img?: string
  alt?: string
}>(), {
  alt: '',
})
</script>

<template>
  <div>
    <div text-center sm:text-left>
      <ContentSlot :use="$slots.default" />
    </div>
    <figure v-if="img" w="sm:3/4" mt-8 text-center m-auto>
      <img :src="img" :alt="alt">
      <figcaption italic text-sm>
        <slot name="caption" />
      </figcaption>
    </figure>
  </div>
</template>
