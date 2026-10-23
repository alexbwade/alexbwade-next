# alexbwade.com rebuild: handoff brief

This brief is for Claude Code. It describes the redesigned landing page for alexbwade.com, which was designed and approved on a design canvas. Build it as a static Astro site deployed to Vercel.

The page exists to prove frontend craft to hiring managers while pointing them at the résumé. The build quality is part of the content, so the budgets and checklists below are acceptance criteria, not nice-to-haves.

## How to use this package

```
HANDOFF.md                  this brief
reference/prototype.html    the approved design, as a prototype source file
assets/alex-courtyard.jpg   960 × 1080, main photo (band)
assets/alex-string-lights.jpg  500 × 500, small photo (About)
assets/alex-wade-resume.pdf the résumé
```

`reference/prototype.html` is written in a canvas prototype format, so it is not production code. Ignore the `<x-dc>`, `<helmet>`, `<sc-if>` tags, the `{{holes}}`, the `<script type="text/x-dc">` block, and the `/_blob/…` image URLs. The inline styles and the `<style>` block are plain CSS and are the source of truth for the exact values. Everything inside `<sc-if value="{{show}}">` is the "spec layer" (see Decisions below). The "Replay motion" button is a mockup-only control. Do not build it.

Blob mapping in the prototype:
- `/_blob/eef1a9f7…` is `assets/alex-courtyard.jpg`
- `/_blob/43dabc89…` is `assets/alex-string-lights.jpg`
- `/_blob/0b0c4072…` is `assets/alex-wade-resume.pdf`

Suggested kickoff prompt:

> Read HANDOFF.md and reference/prototype.html. Propose a plan and a file structure for the Astro rebuild, list any questions, then wait for my go-ahead before writing code.

## Stack

- Astro (latest stable), static output, deployed to Vercel. No adapter is needed for a static build.
- TypeScript, strict.
- No UI framework. Astro components only. Client JS is limited to the two small scripts described under Motion and Decisions.
- Self-host the font (no Google Fonts CDN). Use Fontsource (`@fontsource/schibsted-grotesk`) or Astro's font support. Load weights 400, 500 and 600 only, Latin subset, `font-display: swap`, and preload the 500 weight (the headline). Use a metrics-adjusted fallback (`size-adjust` etc.) to keep CLS at 0 during the swap.
- Images go through `astro:assets` (`<Picture>`) with AVIF and WebP output.
- The repo is Alex's call: replace the current Next.js app on a branch in the existing repo, or start fresh. Either way, ship to a Vercel preview first. The domain only moves after Alex approves the preview.

## Design tokens

Define these as CSS custom properties on `:root`. Names are suggestions.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FAFBFC` | page background |
| `--ink` | `#17202E` | primary text, primary button, code background |
| `--slate` | `#3B4657` | body copy |
| `--muted` | `#556274` | labels, meta text, captions |
| `--lead` | `#7D8799` | the grey first headline line (large text only, 3.6 : 1) |
| `--rule` | `#D7E3EE` | section dividers |
| `--panel` | `#EEF2F6` | exhibit band background |
| `--border` | `#C9D3DE` | secondary button border, wireframe frame |
| `--field-border` | `#9AA6B6` | text field in the specimen |
| `--redline` | `#C8175D` | focus rings, link hover, spec annotations |
| code syntax | `#E6EBF2` text, `#8FB4FF` tags, `#F2A6C4` attrs, `#B6E3C6` strings | code panel |

Type (Schibsted Grotesk throughout; monospace only in the code panel):

| Role | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| Headline (h1) | `clamp(40px, 6.6vw, 84px)` | 0.95 | 500 | −0.045em |
| About statement | `clamp(30px, 4vw, 52px)` | 1.02 | 500 | −0.04em |
| Work category (h3) | `clamp(26px, 3vw, 38px)` | 1.08 | 500 | −0.035em |
| Contact email | `clamp(24px, 3vw, 36px)` | 1.2 | 500 | −0.03em |
| Company name (experience) | 22px | normal | 400 | 0 |
| Work item title | 20px | normal | 500 | 0 |
| Body | 17–18px | 1.6 | 400 | 0 |
| Section label (h2) | 15px | normal | 500 | 0 |
| Meta, nav, dt | 14–15px | 1.5 | 400 | 0 |
| Photo credit | 12px | normal | 400 | 0 |
| Code | 14px | 1.7 | 400 | 0 |

Layout:
- Container `max-width: 1160px`, centered, `padding-inline: clamp(16px, 4vw, 40px)`.
- Sections are separated by a 1px `--rule` top border. The section label (h2) sits 28px below the rule. Sections end with 96–112px of bottom padding.
- Two-column rows (About, Work groups) use `flex-wrap` with min widths so they stack on phones. Test at 320, 375, 768, 1280 and 1920px wide. There must be no horizontal scroll at any width.
- Radius: 4px on buttons, swatches and images-as-UI. Photos have no radius.

## Page structure and copy

All copy lives in `src/i18n/en.ts` (see Localization), not in components.

1. **Header.** "Alex Wade" (links to top). Nav: About, Work, Experience, Contact (in-page anchors). Add a "Skip to content" link as the first focusable element.
2. **Hero (h1).** Three lines:
   - "Hi, I'm Alex." (`--lead` colour)
   - "I build the [design systems / app shells / component APIs]" (the bracketed part rotates)
   - "the next thousand stand on."

   The tagline is working copy and Alex may change it. Keep the rotating phrase at the end of a line.
3. **Band.** On the left is the courtyard photo at 320 × 360 with the caption "Photo: Matthew Thogerson", linked to https://www.badtactic.com/. On the right is the exhibit panel, 360px tall, whose three states rotate in sync with the headline word:
   - **design systems:** a component specimen with "Save changes" (primary), "Preview" (secondary), "Cancel" (text), a "Live sync" switch, a "Class name" field showing "Period 3 Biology", and five swatches (ink, slate, mist, paper, redline).
   - **app shells:** a wireframe with a dark nav rail (first icon in redline), a top bar with a search pill and avatar, and a content grid.
   - **component APIs:** a dark code panel with a `<Button variant="primary" size="md" loading={saving} onClick={save}>Save changes</Button>` snippet, syntax-coloured.

   Below the band on the right is the "Pause animation" button (see Motion).
4. **At a glance.** This is a `<dl>`: Experience "11 years", Based in "Portland, Oregon", Currently "Staff Frontend Engineer, Lightspeed Systems". On the right is the primary button "Read my résumé", followed by "PDF, 145 KB" in lighter text. It links to `/alex-wade-resume.pdf`.
5. **About.** The string-lights photo at 160 × 160 sits beside the statement "I make big frontends feel like one product." The body copy reads: "For more than four years I've been the sole maintainer of Lightspeed Systems' design system, and I built the app shell every one of its products runs inside. Today I lead frontend for the classroom product."
6. **Selected work.** Three groups. Each has an h3 on the left and a list on the right. Each item has a title, one or two sentences, and the company as meta text. Copy it exactly from the prototype.
   - Design systems: Org-wide design system, Design system team lead, Bringing a design system to Gameday
   - Micro-frontends: Global app shell, Global left nav
   - Products: Filter Policies 2.0, Classroom re-architecture. This item's description is a placeholder pending Alex's copy; leave a visible TODO.
7. **Experience.** An `<ol>` with dates in `<time datetime>`:
   - Lightspeed Systems: Staff Frontend Engineer, Aug 2023 – present; Senior Software Engineer, Apr 2022 – Aug 2023
   - Scribd: Senior Software Engineer, Mar 2021 – Apr 2022
   - Nike: Senior Software Engineer (contract), Mar 2020 – Mar 2021
   - FitEra / Vestright: Senior Web Developer, Sept 2015 – Mar 2020
8. **Footer / Contact.** The label "Contact", then a `mailto:alexbwade@gmail.com` link. Below that is "Portland, Oregon" on the left and a "How this site is built" link to `/colophon` on the right.
9. **`/colophon` page.** A plain page in the same styles. It covers the stack, the performance and accessibility approach, Lighthouse scores (fill in after measuring), and supported browsers. Keep it short and factual.

## Motion

All motion is CSS. The prototype has the exact keyframes.

- **Line reveal (on load).** Each headline line is wrapped in a mask: `display:block; overflow:hidden; padding-bottom:.14em; margin-bottom:-.14em`. The padding protects descenders. The inner span animates `translateY(125%) → 0` over 800ms with `cubic-bezier(.65,0,.35,1)`, `animation-fill-mode: both`, staggered 80ms per line.
- **Word swap and exhibit (looping).**
  - **Shared animation.** Both use one shared keyframe, `swap`, running 7.5s, infinite, with the same easing: 0% at `translateY(140%)`, 5–30% at rest, 35–100% at `translateY(-140%)`.
  - **Delays.** The three items have delays of 900ms, 3400ms and 5900ms. Identical keyframes and delays keep the word and the panel in sync.
  - **Offset.** The ±140% offset is deliberate. At 105%, descenders of the off-screen words leaked into view as thin lines.
  - **Masking.** The rotator is an `inline-grid` with all words stacked in one cell and `overflow:hidden`, so its width is the widest word.
- **Photo reveal.** `clip-path: inset(0 0 100% 0) → inset(0)` over 900ms, delayed 500ms. In production, trigger it on load because the band is above the fold.
- **Pause control (WCAG 2.2.2, required).** The loop runs longer than 5 seconds, so it needs a pause.
  - **Behaviour.** A real `<button>` labelled "Pause animation" / "Play animation" toggles `data-motion="paused"` on `<html>`. A CSS rule then sets `animation-play-state: paused` on the rotator and exhibit.
  - **Script.** Use an inline `is:inline` script under 1 KB. Optionally remember the choice in `localStorage`, wrapped in try/catch.
- **`prefers-reduced-motion: reduce`.** No entrance animations. The rotator and exhibit show only their first item, static, and the pause button is hidden.
- **Screen readers.**
  - **Headline.** The h1 contains one visually hidden sentence: "Hi, I'm Alex. I build the design systems, app shells and component APIs the next thousand stand on." The visual lines are `aria-hidden="true"`.
  - **Exhibit.** The panel is decorative (`aria-hidden="true"`), and the band section has `aria-label="Portrait and examples"`.
- **Off-screen.** Consider pausing the loop when the tab is hidden or the band is off screen (`visibilitychange` / IntersectionObserver in the same small script). This is optional.

## Images

- **Courtyard photo.** Use `<Picture>` with formats `['avif', 'webp']` at widths 320, 640 and 960, `sizes="320px"`. Set `loading="eager"`, `fetchpriority="high"`, explicit width and height, `object-fit: cover; object-position: 50% 28%`, and alt "Alex Wade in a brick courtyard".
- **String-lights photo.** Use widths 160 and 320, `loading="lazy"`, `object-position: 50% 40%`, and alt "Alex Wade under string lights". It's only 500px, so don't display it larger than about 250px.
- **Credit.** The photo credit goes in a `<figcaption>` under the courtyard photo.

## Localization (structure now, translations later)

- Use Astro i18n config with `defaultLocale: 'en'`, `locales: ['en']` and `prefixDefaultLocale: false`. Adding a locale should then be additive, with no restructuring.
- Put every user-facing string in `src/i18n/en.ts`, behind a typed `t()` helper. Set `<html lang>` from the locale.
- Format dates with `Intl.DateTimeFormat` from ISO values, not hard-coded strings.
- Add `hreflang` alternates once a second locale exists.

## Budgets (acceptance criteria)

- Lighthouse mobile scores are 100 for Performance, Accessibility, Best Practices and SEO, measured on the Vercel preview.
- LCP is under 1.5s on simulated 4G and CLS is 0.
- Total transfer on first load is under 300 KB, including fonts and images.
- The only JS is the pause/spec script(s) inline, under 2 KB total. There are no third-party scripts and no analytics unless Alex asks.
- The page works fully with JS disabled; the animations still run because they're CSS.
- Browsers: the latest two versions of Chrome, Edge, Firefox and Safari, plus iOS Safari and Android Chrome.

## Accessibility checklist

- One h1, plus landmarks (`header`, `nav aria-label="Main"`, `main`, `footer`) and a skip link.
- Visible focus everywhere: `outline: 2px solid var(--redline); outline-offset: 3px`, using `:focus-visible`.
- All text pairs meet WCAG AA. Check the muted and lead colours specifically: `--lead` is only used at headline sizes.
- Touch targets are at least 44px; the nav links get vertical padding.
- The résumé link states its file type and size, and the email is a plain `mailto:`.
- Run axe (e.g. `@axe-core/cli` or Playwright + axe) with zero violations. Do a manual keyboard pass and a VoiceOver/NVDA spot check of the headline and band.
- `prefers-reduced-motion` behaves as specified, and the pause button works.

## SEO and meta

- Title "Alex Wade, Staff Frontend Engineer". Write a meta description in Alex's voice and flag it for his review.
- Add a canonical URL, a favicon set, and Open Graph/Twitter tags. The OG image can be generated at build time from the headline (static PNG, 1200 × 630).
- Add JSON-LD `Person` data: name, jobTitle, url, `sameAs` LinkedIn (`https://www.linkedin.com/in/alexbwade`).
- Generate `sitemap.xml` and `robots.txt`.

## Decisions for Alex (ask before building)

1. **The spec layer.** The design concept is "Redline": magenta annotations that document the build (type tokens, image budgets, motion timings). Should the live site ship it as a "Show the spec" toggle, off by default? If yes:
   - **Markup.** Render the annotations in the HTML, hidden with a `[data-spec="on"]` CSS gate so there's no layout shift.
   - **Toggle.** Toggle it with the same tiny script.
   - **Small screens.** Keep it hidden under 760px.
2. **Résumé PDF.** The current PDF includes a phone number. Consider a web copy without it.
3. **Repo.** Use the existing repo on a branch, or a new repo.

## Open content items

- The Classroom re-architecture description (placeholder).
- The final tagline (the current one is working copy).
- Confirm the Gameday design-system item.
- The meta description.

## Later (not in this build)

- Dark mode. The design is light-only for now.
- Moving hosting to Cloudflare Pages, with portfolio projects on subdomains and Cloudflare Access in front of private ones.
- Additional locales.

## Suggested order of work

1. Scaffold Astro, TypeScript, lint and format, plus the Vercel preview.
2. Add tokens, the font with its fallback metrics, and base styles.
3. Build the static sections with real copy from `en.ts`.
4. Run images through `astro:assets`.
5. Add motion, the pause control and reduced motion.
6. Make the spec layer decision, and build it if approved.
7. Build the colophon page.
8. Add SEO and meta.
9. Verify: Lighthouse, axe, keyboard, screen reader, cross-browser and viewport sweep. Report the results to Alex with screenshots.
