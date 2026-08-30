import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_ACTIONS ? "/enterprise-dashboard/" : "/",
  define: {
    "import.meta.env.VITE_GITHUB_ACTIONS": JSON.stringify(
      process.env.GITHUB_ACTIONS || "false",
    ),
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
