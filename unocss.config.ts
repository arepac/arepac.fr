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
      hover: '#d10040',
      active: '#b0002a',
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
    ['primary-button', 'bg-primary text-white font-bold py-3 px-4 rounded cursor-pointer hover:bg-hover active:bg-active'],
  ],
})
