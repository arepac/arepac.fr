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
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap'
  ],
  css: [
    '@fontsource/merriweather/index.css',
    '@fontsource/open-sans/index.css',
    '@formkit/themes/genesis',
    '@/assets/css/formkit-overrides.css',
  ],
  formkit: {
    configFile: './formkit.config.ts',
  },
  site: {
    url: 'https://arepac.fr',
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  unocss: {
    preflight: true,
  },
})
