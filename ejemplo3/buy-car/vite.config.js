import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,                      // permite usar describe/it/expect sin importarlos
    environment: 'jsdom',               // simula un navegador para probar componentes
    setupFiles: './src/setupTests.js',  // se ejecuta antes de las pruebas
  },
})
