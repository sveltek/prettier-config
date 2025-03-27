import { fileURLToPath } from 'node:url'

const config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  plugins: [fileURLToPath(import.meta.resolve('prettier-plugin-svelte'))],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export { config as default }
