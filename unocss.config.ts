import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      primary: '#f51858',
      secondary: '#fb868e',
    },
    fontFamily: {
      sans: 'Open Sans',
      serif: 'Merriweather',
    },
  },
  rules: [
    [
      'shadow-top',
      {
        'box-shadow':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    ],
  ],
  shortcuts: [
    ['w-half', 'w-1/2'],
  ],
})
