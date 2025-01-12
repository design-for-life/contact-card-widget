import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "cwf",
  build: {
    rollupOptions: {
      output: {
        dir: "./dist",
        entryFileNames: "index.js",
        assetFileNames: "index.css",
        manualChunks: undefined,
      }
    }
  }
});
