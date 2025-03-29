import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: '0.0.0.0',  // Dışarıya açmak için
    port: 5173,       // Varsayılan port, ihtiyaca göre değiştirilebilir
    open: true,       // Projeyi tarayıcıda otomatik açar
  },
  css: {
    preprocessorOptions: {
      tailwindcss: {},
    },
  },
})