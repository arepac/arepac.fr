<template>
  <div flex flex-col items-center justify-center text-left>
    <ContentDoc space-y-10 :query="{ where: { _type: 'markdown' } }" />
  </div>
</template>
