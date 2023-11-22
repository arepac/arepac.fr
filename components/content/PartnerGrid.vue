<script setup lang="ts">
defineProps<{
  partners: Array<{
    name: string
    url: string
    image: string
  }>
}>()
</script>

<template>
  <div>
    <div text-center>
      <ContentSlot :use="$slots.default" />
    </div>
    <div gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4>
      <NuxtLink
        v-for="{ name, image, url } in partners"
        :key="name"
        :href="url"
        target="_blank"
        flex
        items-center
        justify-center
        h-full
        p-2
      >
        <NuxtImg v-if="image" :alt="name" :src="image" sizes="200px" />
        <span v-else>{{ name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
