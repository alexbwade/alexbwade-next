import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Vercel serves www as the primary domain and redirects the bare domain to it.
  site: "https://www.alexbwade.com",
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
      // One variable file (47 KB) covers 400, 500 and 600, where three static files were 75 KB.
      options: {
        variants: [
          {
            src: [
              "./node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2",
            ],
            weight: "400 900",
            style: "normal",
          },
        ],
      },
    },
  ],
  // Adds a CSP <meta> with hashes for every inline script and style Astro emits.
  security: { csp: true },
  // No Markdown code blocks here, and Shiki's inline styles would conflict with the CSP.
  markdown: { syntaxHighlight: false },
  integrations: [sitemap()],
});
