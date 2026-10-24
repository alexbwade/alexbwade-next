# alexbwade.com

Alex Wade's portfolio site: a static Astro site deployed to Vercel.

The design brief and the approved prototype are in [docs/handoff](docs/handoff/HANDOFF.md). The old Next.js
`/k` page is kept, unbuilt, in [archive/karelly](archive/karelly/README.md).

## Commands

```bash
corepack enable
yarn install
yarn dev       # local dev server at http://localhost:4321
yarn build     # static output in dist/
yarn test      # Playwright + axe against a production build
yarn ci        # type check, lint, format check, build and test
```

The first `yarn test` needs a browser: `yarn playwright install chromium`.

## Where things live

- All copy is in `src/i18n/en.ts` (English) and `src/i18n/es.ts` (Spanish, served under `/es`). Components read the
  current page's language through `t()` and `toLocale()` in `src/i18n/index.ts`.
- Design tokens are CSS custom properties in `src/styles/tokens.css`.
- The only client JS is `src/scripts/controls.js`, minified and inlined into `<head>` at build time by
  `src/layouts/Base.astro`.
- The OG image and favicons are rendered at build time by the endpoints in `src/pages/`.
- The résumé is `public/alex-wade-resume.pdf`. The size shown on the button is read from the file at build time.
