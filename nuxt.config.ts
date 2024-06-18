export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    sibApiKey: '',
    sibApiUrl: '',
  },
  modules: [
    '@formkit/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxthq/studio',
    '@nuxtjs/sitemap',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@fontsource/merriweather/index.css',
    '@fontsource/open-sans/index.css',
    '@formkit/themes/genesis',
    '@/assets/css/formkit-overrides.css',
  ],
  app: {
    head: {
      titleTemplate: '%pageTitle | AREPAC',
    },
  },
  formkit: {
    configFile: './formkit.config.ts',
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  unocss: {
    preflight: true,
  },
})
