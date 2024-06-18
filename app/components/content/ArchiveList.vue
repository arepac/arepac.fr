<script setup lang="ts">
const { navDirFromPath } = useContentHelpers()
const nav = await fetchContentNavigation()
const archives = navDirFromPath('/archives', nav)
</script>

<template>
  <ul my-4 ps-8 list-circle text-left>
    <li v-for="a in archives" :key="a._id">
      <NuxtLink :to="a._path" underline hover:no-underline color-primary>
        {{ a.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
