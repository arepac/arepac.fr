<script setup lang="ts">
const isExpanded = ref(false)
const links = [
  {
    route: '/',
    label: 'l\'association',
  },
  {
    route: '/congress/',
    label: 'le congrès',
  },
  {
    route: '/archives/',
    label: 'les archives',
  },
]

const { afterEach } = useRouter()
afterEach(() => {
  isExpanded.value = false
})
</script>

<template>
  <header bg-gray-300 shadow-md>
    <div
      items-center
      flex
      flex-wrap
      justify-between
      max-w-4xl
      mx-auto
      p-4
      sm:p-8
    >
      <NuxtLink to="/" items-center flex no-underline hover:text-primary>
        <img src="~/assets/svgs/arepac.svg" h-10 mr-2 alt="">
        <span font-serif text-3xl uppercase>{{ "AREPAC" }}</span>
      </NuxtLink>
      <button
        aria-label="Menu"
        items-center
        rounded
        flex
        text-2xl
        sm:hidden
        @click="isExpanded = !isExpanded"
      >
        <span v-if="isExpanded" inline-block i-gg-close />
        <span v-else inline-block i-gg-menu />
      </button>
      <nav
        :class="isExpanded ? 'sm:display-block' : 'display-none'"
        w-full
        sm:w-auto
        sm:flex
        sm:items-center
      >
        <NuxtLink
          v-for="{ label, route } in links"
          :key="route"
          w-fit
          display-block
          font-bold
          text-lg
          mt-4
          mx-auto
          sm:inline-block
          sm:mt-0
          sm:ml-6
          hover:text-primary
          border-b-2
          border-transparent
          active-class="!border-primary text-primary "
          :to="route"
        >
          {{ label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
