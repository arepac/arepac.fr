<script setup lang="ts">
useHead({ titleTemplate: 'AREPAC' })
</script>

<template>
  <div>
    <ContentDoc :where="{ _path: '/' }" space-y-10 />
  </div>
</template>
