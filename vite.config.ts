import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "src/shared/components/ui"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@app": path.resolve(__dirname, "src/app"),
      "@lib": path.resolve(__dirname, "src/shared/lib"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
});
