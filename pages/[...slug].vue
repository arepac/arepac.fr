<template>
  <div flex flex-col items-center justify-center text-left>
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer :value="doc" space-y-10 />
      </template>

      <template #not-found>
        <Head>
          <Title>AREPAC | 404</Title>
        </Head>
        <div flex flex-col items-center my-10 gap-10>
          <img alt="" src="~/assets/svgs/404.svg" w="sm:3/4">
          <h1 text-2xl>
            {{ "Oups, cette page n'existe pas..." }}
          </h1>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>
