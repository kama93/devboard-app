import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
  // This tells Vite what extensions to look for automatically
  extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  }
})
