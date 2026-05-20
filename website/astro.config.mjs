import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://bahasa-indonesia-dk.web.app",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  }
});
