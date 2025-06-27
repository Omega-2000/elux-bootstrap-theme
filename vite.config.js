import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import classPrefix from 'postcss-class-prefix'

export default defineConfig({
  // Entry point per il CSS
  build: {
    lib: {
      entry: 'src/main.scss',
      name: 'EluxTheme',
      fileName: 'main',
      formats: ['es']
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]'
      }
    },
    cssCodeSplit: false,
    minify: false // Disabilita minificazione per debug
  },
  
  // Server di sviluppo
  server: {
    open: '/index.html', // Apre index.html
    port: 3000,
    host: true
  },
  
  // Server preview
  preview: {
    port: 3000,
    host: true,
    open: '/index.html' // Apre index.html anche nel preview
  },
  
  // Plugin
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/fontawesome/fonts/**/*',
          dest: 'fonts'
        },
        {
          src: 'index.html',
          dest: ''
        }
      ]
    })
  ],
  
  // CSS processing
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    },
    postcss: {
      plugins: [
       classPrefix('o2000__')
      ]
    }
  }
})