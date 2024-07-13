import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Make sure the Vite server runs on port 3000
  },
  build: {
    outDir: "dist", // Default build output directory
  },
});
