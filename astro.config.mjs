// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://quoted.fr",

  integrations: [
    sitemap({
      // Une page de redirection n'a rien a faire dans le sitemap.
      filter: (page) => !page.includes("/expertises"),
    }),
  ],

  build: {
    inlineStylesheets: "auto",
  },

  compressHTML: true,
});
