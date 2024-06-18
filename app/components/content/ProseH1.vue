<template>
  <h1 block text-2xl underline underline-secondary underline-2 mb-4>
    <ContentSlot :use="$slots.default" />
  </h1>
</template>
