import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',          // simula un navegador dentro de Node
    globals: true,                 // permite usar describe, test, expect, vi sin importarlos
    setupFiles: './src/setupTests.js',
  },
})