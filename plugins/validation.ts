import { defineRule } from 'vee-validate'
import { email, required } from '@vee-validate/rules'

export default defineNuxtPlugin(() => {
  defineRule('required', required)
  defineRule('email', email)
})
