<script setup lang="ts">
withDefaults(defineProps<{
  enabled?: boolean
  link: string
}>(), {
  enabled: false,
})
</script>

<template>
  <div flex justify-center items-center>
    <a
      v-if="enabled"
      id="congress-form"
      primary-button
      text-lg
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      S'inscrire au congrès
    </a>
  </div>
</template>
