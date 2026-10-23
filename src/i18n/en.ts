// Every user-facing string on the site. A new locale copies this file and must match its shape.

export const en = {
  meta: {
    title: "Alex Wade, Staff Frontend Engineer",
    // TODO(alex): review this description.
    description:
      "I’m Alex Wade, a staff frontend engineer in Portland, Oregon. I build the design systems, app shells and component APIs that big frontends are built on.",
    ogImageAlt: "Hi, I’m Alex. I build quality design systems you can always rely on.",
  },

  header: {
    skipLink: "Skip to content",
    home: "Alex Wade",
    navLabel: "Main",
    nav: [
      { href: "#about", label: "About" },
      { href: "#work", label: "Work" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    resume: "Résumé",
  },

  hero: {
    // TODO(alex): the tagline is working copy.
    srHeadline: "Hi, I’m Alex. I build quality design systems, app shells and component APIs you can always rely on.",
    lead: "Hi, I’m Alex.",
    before: "I build quality",
    rotating: ["design systems", "app shells", "component APIs"],
    after: "you can always rely on.",
  },

  band: {
    label: "Portrait and examples",
    photoAlt: "Alex Wade in a brick courtyard",
    creditPrefix: "Photo:",
    creditName: "Matthew Thogerson",
    creditUrl: "https://www.badtactic.com/",
    pause: "Pause animation",
    play: "Play animation",
    specimen: {
      primary: "Save changes",
      secondary: "Preview",
      tertiary: "Cancel",
      toggle: "Live sync",
      fieldLabel: "Class name",
      fieldValue: "Period 3 Biology",
      swatches: [
        { name: "ink", color: "var(--ink)" },
        { name: "slate", color: "var(--slate)" },
        { name: "mist", color: "var(--rule)" },
        { name: "paper", color: "var(--paper)" },
        { name: "redline", color: "var(--redline)" },
      ],
    },
    code: { buttonLabel: "Save changes" },
  },

  glance: {
    label: "At a glance",
    facts: [
      { term: "Experience", value: "11 years" },
      { term: "Based in", value: "Portland, Oregon" },
      { term: "Currently", value: "Staff Frontend Engineer, Lightspeed Systems" },
    ],
    resume: "Read my résumé",
    // Screen-reader-only suffix for links that open in a new tab.
    newTab: "(opens in a new tab)",
    // {size} is filled in from the file at build time.
    resumeMeta: "PDF, {size}",
  },

  about: {
    label: "About",
    photoAlt: "Alex Wade under string lights",
    statement: "I make big frontends feel like one product.",
    body: "For more than four years I’ve been the sole maintainer of Lightspeed Systems’ design system, and I built the app shell every one of its products runs inside. Today I lead frontend for the classroom product.",
  },

  work: {
    label: "Selected work",
    groups: [
      {
        title: "Design systems",
        items: [
          {
            title: "Org-wide design system",
            body: "Sole maintainer for four years. 129 components used by 16+ apps and about 57 engineers; I designed and built around 30 of the second-generation components.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Design system team lead",
            body: "Technical lead for the Design System team. Directed the Content Preview re-skin and the cross-team removal of the legacy navigation bar.",
            meta: "Scribd",
          },
          {
            // TODO(alex): confirm this item.
            title: "Bringing a design system to Gameday",
            body: "Introduced Nike’s design system to Gameday, Nike’s wholesale e-commerce app.",
            meta: "Nike",
          },
        ],
      },
      {
        title: "Micro-frontends",
        items: [
          {
            title: "Global app shell",
            body: "One shell for every product, running in staging across 4 apps on 3 stacks: Rails, React, and Go templates. Built for AI-assisted work, with strict CI gates and full test coverage on critical paths.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Global left nav",
            body: "The app shell’s predecessor: a shared navigation API and component, in production across 6 apps. Not quite a micro-frontend, but the same idea.",
            meta: "Lightspeed Systems",
          },
        ],
      },
      {
        title: "Products",
        items: [
          {
            title: "Filter Policies 2.0",
            body: "A ground-up rewrite of a flagship product; I wrote about 95% of it. At its core is a nested policy tree that resolves quickly in both the UI and the Go API. Its Table, Nested List, and Filters Bar components went on to be used by other teams.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Classroom re-architecture",
            body: "I cut seconds off the initial load for the company’s highest-retention product, the Classroom teacher dashboard.",
            meta: "Lightspeed Systems, in progress",
          },
        ],
      },
    ],
  },

  experience: {
    label: "Experience",
    present: "present",
    jobs: [
      {
        company: "Lightspeed Systems",
        roles: [
          { title: "Staff Frontend Engineer", start: "2023-08", end: null },
          { title: "Senior Software Engineer", start: "2022-04", end: "2023-08" },
        ],
      },
      { company: "Scribd", roles: [{ title: "Senior Software Engineer", start: "2021-03", end: "2022-04" }] },
      { company: "Nike", roles: [{ title: "Senior Software Engineer (contract)", start: "2020-03", end: "2021-03" }] },
      { company: "FitEra / Vestright", roles: [{ title: "Senior Web Developer", start: "2015-09", end: "2020-03" }] },
    ],
  },

  contact: {
    label: "Contact",
    email: "alexbwade@gmail.com",
    location: "Portland, Oregon",
    colophonLink: "How this site is built",
  },

  colophon: {
    title: "How this site is built",
    description: "The stack, performance budget, accessibility approach and browser support for alexbwade.com.",
    back: "Back to the home page",
    sections: [
      {
        heading: "Stack",
        paragraphs: [
          "A static site built with Astro and TypeScript, hosted on Vercel. There is no UI framework. The type is Schibsted Grotesk, self-hosted, with a metric-matched fallback so the page doesn’t shift when the font loads.",
          "Photos go through Astro’s image pipeline and are served as AVIF and WebP at the sizes they’re shown. The examples beside the portrait are plain HTML and CSS, so they cost no image bytes.",
        ],
      },
      {
        heading: "Performance",
        paragraphs: [
          "The budget is under 300 KB on first load, including fonts and images, and LCP under 1.5 seconds on a simulated 4G connection. All animation is CSS. The only JavaScript is one small inline script for the pause button, and there are no third-party scripts or analytics.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Every text colour meets WCAG AA, and focus is visible everywhere. The rotating headline has a pause button, and it stops entirely if your system asks for reduced motion. Screen readers get the headline as one sentence. The page is checked with axe and by hand with a keyboard and a screen reader.",
        ],
      },
      {
        heading: "Lighthouse",
        // TODO: replace with production scores after launch.
        paragraphs: [
          "On the Vercel preview, Lighthouse’s mobile run scores 98 to 100 for Performance and 100 for Accessibility and Best Practices, with no layout shift and 111 KB transferred on first load. SEO is measured after launch, because Vercel marks preview deployments as noindex.",
        ],
      },
      {
        heading: "Browsers",
        paragraphs: [
          "The latest two versions of Chrome, Edge, Firefox and Safari, plus Safari on iOS and Chrome on Android. The page works without JavaScript.",
        ],
      },
    ],
  },
};

export type Messages = typeof en;
