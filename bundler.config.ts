import { defineConfig, externals } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  externals: [
    ...externals,
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
  ],
  entries: [
    { input: './src/index.ts' },
    { dts: './src/types.ts', output: './dist/index.d.ts' },
  ],
})
