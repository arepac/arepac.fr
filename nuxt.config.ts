import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  runtimeConfig: {
    googleServiceAccountEmail: '',
    googlePrivateKey: '',
    googleSpreadsheetId: '',
    gmailUser: '',
    gmailPw: '',
    sibApiKey: '',
    sibApiUrl: '',
  },
  modules: [
    '@formkit/nuxt',
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@fontsource/merriweather',
    '@fontsource/open-sans',
    '@formkit/themes/genesis',
    '@/assets/css/formkit-overrides.css',
  ],
  formkit: {
    configFile: './formkit.config.ts',
  },
  unocss: {
    preflight: true,
  },
})
