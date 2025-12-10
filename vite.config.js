import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        target:
          "https://script.google.com/macros/s/AKfycbyi8eeZIVcuXuwuxv7k6vfcvWVI2hefnMunlm0guZp30pVgtPgH5i4RoIu_07ZR-b0gVQ/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
