<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<template>
  <div>
    <iframe
      :src="url"
      frameborder="0"
      width="640"
      height="389"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    />
  </div>
</template>
