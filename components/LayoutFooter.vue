<script setup lang="ts">
const links = [
  {
    route: '/contact',
    label: 'Nous contacter',
  },
  {
    route: '/legal',
    label: 'Mentions légales',
  },
  {
    route: '/gdpr',
    label: 'RGPD',
  },
]
</script>

<template>
  <footer bg-gray-300 shadow-top>
    <nav
      items-center
      flex
      flex-col-reverse
      max-w-4xl
      mx-auto
      p-4
      sm:space-y-0
      sm:flex-row
      sm:justify-between
      md:p-8
    >
      <p mt-4 sm:mt-0>
        {{ `© Copyright ${new Date().getFullYear()} - AREPAC` }}
      </p>
      <div items-center sm:items-end flex flex-col space-y-2 sm:space-y-0>
        <NuxtLink
          v-for="{ route, label } in links"
          :key="route"
          :to="route"
          cursor-pointer
          underline
          hover:no-underline
        >
          {{ label }}
        </NuxtLink>
      </div>
    </nav>
  </footer>
</template>
