import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ensure assets are correctly referenced in production
  build: {
    // Rollup options for better chunking
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite handle chunking automatically
      },
    },
    // Disable source maps for production
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // Ensure public directory assets are correctly served
  publicDir: 'public',

  // Base URL configuration (important for Cloudflare Pages)
  // Leave as '/' for root deployment, change if deployed to subdirectory
  base: '/',
})
