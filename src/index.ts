import { fileURLToPath } from 'node:url'
import type { Config } from 'prettier'

const defaultConfig: Config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  plugins: [fileURLToPath(import.meta.resolve('prettier-plugin-svelte'))],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export { defaultConfig, defaultConfig as default }
