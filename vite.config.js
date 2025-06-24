import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/portfolioo/', // <-- this must match the repo name exactly

});
