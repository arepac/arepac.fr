<script setup lang="ts">
useHead({ titleTemplate: 'AREPAC - RGPD' })
</script>

<template>
  <div flex flex-col items-center justify-center text-left>
    <img alt="" src="~/assets/svgs/gdpr.svg" mb-10 sm:mb-12 w="full sm:1/2">
    <ContentDoc :where="{ _path: '/gdpr' }" space-y-10 />
  </div>
</template>
