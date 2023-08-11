import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      store: "/src/store",
      theme: "/src/theme",
      lib: "src/lib",
      constants: "src/constants",
      src: "/src",
    },
  },
});
