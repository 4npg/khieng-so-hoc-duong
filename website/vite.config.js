import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Raise warning threshold – assets are already ~800 kB JPEGs served
    // through /public so this only applies to JS chunks.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Predictable chunk names for CDN caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react'],
        }
      }
    }
  }
})
