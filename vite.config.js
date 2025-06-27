import { defineConfig } from 'vite'
import { resolve } from 'path'
import classPrefix from 'postcss-class-prefix'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  server: {
    port: 3000,
    open: true  // Apre automaticamente il browser
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entry point HTML
        // Se hai altri entry point CSS/JS specifici, aggiungili qui
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return '[name].css'
          }
          return '[name].[ext]'
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        classPrefix('o2000__')
      ]
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/fontawesome/fonts/**/*',
          dest: 'fonts'
        }
      ]
    })
  ]
})