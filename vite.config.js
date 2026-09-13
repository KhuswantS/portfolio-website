import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // No source maps in the production build - already Vite's default, made
    // explicit so it can't drift. Not needed for a static personal site and
    // they'd expose more of the source structure than necessary.
    sourcemap: false,
  },
})
