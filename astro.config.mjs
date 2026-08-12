import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.codieshannon.dev",
  integrations: [sitemap()],
  output: "static",
  trailingSlash: "never"
});
