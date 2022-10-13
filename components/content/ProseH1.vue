<template>
  <h1 inline-block text-2xl border-b-2 border-secondary mb-4>
    <ContentSlot :use="$slots.default" />
  </h1>
</template>
