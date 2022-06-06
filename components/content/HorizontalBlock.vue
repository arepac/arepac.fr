<script setup lang="ts">
withDefaults(
  defineProps<{
    img?: string
    alt?: string
  }>(),
  {
    alt: '',
  },
)
</script>

<template>
  <section flex flex-col sm:flex-row space-y-2>
    <div sm:mr-4 text-center sm:text-left>
      <Markdown :use="$slots.default" />
    </div>
    <img
      v-if="img"
      :src="img"
      :alt="alt"
      self-center
      display-none
      sm:block
      mt-4
      w="sm:1/3"
    >
  </section>
</template>
