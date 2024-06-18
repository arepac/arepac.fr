<template>
  <section flex flex-col sm:flex-row space-y-2>
    <div text-center sm:mr-4 sm:text-left>
      <ContentSlot :use="$slots.default" />
    </div>
  </section>
</template>
