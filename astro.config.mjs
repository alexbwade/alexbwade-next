import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

const fontFile = (weight) =>
  `./node_modules/@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-${weight}-normal.woff2`;

export default defineConfig({
  site: "https://alexbwade.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
    // The whole stylesheet is a few KB, so inlining it saves a render-blocking request.
    inlineStylesheets: "always",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: { prefixDefaultLocale: false },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Schibsted Grotesk",
      cssVariable: "--font-sans",
      fallbacks: ["sans-serif"],
      display: "swap",
      options: {
        variants: [400, 500, 600].map((weight) => ({
          src: [fontFile(weight)],
          weight,
          style: "normal",
        })),
      },
    },
  ],
  integrations: [sitemap()],
});
