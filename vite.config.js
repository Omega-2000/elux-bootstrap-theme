import { defineConfig } from 'vite'
import { resolve } from 'path'
import classPrefix from 'postcss-class-prefix'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/main.js'),
      output: {
        assetFileNames: '[name].css'
      }
    }
  },
  css: {
    postcss: {
      plugins: [
       classPrefix('o2000__')
      ]
    }
  }
})