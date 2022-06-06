<template>
  <div flex flex-col font-sans min-h-screen text-gray-900>
    <LayoutHeader />
    <main flex-1 max-w-4xl mx-auto px-4 py-8 w-full md:px-8>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
