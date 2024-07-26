import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/reactapp/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 4096, // Set the limit to 1024 KB or any desired value
  },
});
