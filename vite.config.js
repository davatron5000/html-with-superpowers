import { defineConfig } from 'vite'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // lib: {
    //   entry: 'src/custom-alert.js',
    //   formats: ['es']
    // },
    rollupOptions: {
      external: /^lit-element/,
      input: {
        main: resolve(__dirname, 'index.html'),
        alert: resolve(__dirname, 'alert.html'),
        aframe: resolve(__dirname, 'aframe.html'),
        modelviewer: resolve(__dirname, 'model-viewer.html'),
        twoup: resolve(__dirname, 'two-up.html')
      },
    }
  }
})
