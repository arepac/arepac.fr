import { fr } from '@formkit/i18n'
import { generateClasses } from '@formkit/themes'
import type { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  locales: { fr },
  locale: 'fr',
  config: {
    classes: generateClasses({
      global: {
        input: 'bg-white',
        form: 'bg-red-100 p-6 shadow rounded',
        outer: 'w-full',
        label: 'text-gray-700 text-sm',
      },
    }),
  },
}

export default config
