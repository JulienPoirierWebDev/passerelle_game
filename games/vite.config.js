/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: [
      "src/**/*.test.js",
      "tests/**/*.test.js",
      "src/**/*.test.jsx",
      "tests/**/*.test.jsx",
    ],
    parallel: true,
  },
});
