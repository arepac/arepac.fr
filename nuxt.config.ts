import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  future: {
    compatibilityVersion: 4,
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
  content: {
    sources: {
      content: {
        driver: 'fs',
        base: fileURLToPath(new URL('./content', import.meta.url)),
      },
    },
  },
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
  compatibilityDate: '2024-09-15',
})
