const config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  plugins: [await import('prettier-plugin-svelte')],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export { config as default }
