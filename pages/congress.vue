<script setup lang="ts">
useHead({ titleTemplate: 'AREPAC - Le congrès' })
</script>

<template>
  <div>
    <ContentDoc :where="{ _path: '/congress' }" space-y-10 />
  </div>
</template>
