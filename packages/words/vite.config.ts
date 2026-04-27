import { resolve } from 'path'

import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  resolve: { alias: { '@': resolve('src') } },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      formats: ['es'],
      fileName: 'index',
      entry: resolve('src/main.ts'),
    },
  },
})
