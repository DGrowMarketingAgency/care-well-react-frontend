import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        target:
          "https://script.google.com/macros/s/AKfycbx2uYQaHz42RaVoIe7VgLaJRLgPUR1Iah8DzarIiYyaRm5cwqH2_UBTH6vtA0WSZ_2h/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
