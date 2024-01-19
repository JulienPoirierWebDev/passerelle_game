import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test; [
    environnement:"jsdom",
    include: ["src/**/*.{test.js
    ]
  globals: true,
  parallel: true,
})
