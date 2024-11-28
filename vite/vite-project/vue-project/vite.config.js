import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 8888,
    strictPort: true,
    host: '0.0.0.0', // Exponemos el servidor para que sea accesible en la red
    watch: {
      usePolling: true, // Activamos el polling para detectar cambios automáticamente
    },
  },
})
