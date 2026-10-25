// Every user-facing string on the site. A new locale copies this file and must match its shape.

export const en = {
  // This language's own name, shown in the language switcher on the other language's pages.
  languageName: "English",

  meta: {
    title: "Alex Wade, Staff Frontend Engineer",
    siteName: "Alex Wade",
    jobTitle: "Staff Frontend Engineer",
    ogLocale: "en_US",
    description:
      "I’m Alex Wade, a Staff Frontend Engineer in Portland, Oregon. I build quality design systems, micro-frontends and component APIs you can always rely on.",
    ogImageAlt: "Hi, I’m Alex. I build quality design systems you can always rely on.",
  },

  header: {
    skipLink: "Skip to content",
    home: "Alex Wade",
    backToTop: "Back to top",
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
    srHeadline:
      "Hi, I’m Alex. I build quality design systems, micro-frontends and component APIs you can always rely on.",
    lead: "Hi, I’m Alex.",
    before: "I build quality",
    rotating: ["design systems", "micro-frontends", "component APIs"],
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
      // Labels for the five swatches; their colours are set in ExhibitSpecimen.astro.
      swatches: ["ink", "slate", "mist", "paper", "redline"],
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
    statement: "Building seamless user experiences is my craft.",
    paragraphs: [
      "Throughout my whole career, I’ve put UX at the center of what I do. Users deserve intuitive, responsive, performant UIs that allow them to accomplish their goals effortlessly. It should always “just work.”",
      "Today, I am proud to be the sole maintainer and core contributor to the Lightspeed Systems design system, the org-wide shared navigation architect, and technical lead for the Classroom product.",
    ],
  },

  work: {
    label: "Selected work",
    groups: [
      {
        title: "Design systems",
        items: [
          {
            title: "Sole maintainer and core contributor",
            body: "129 components used by 16+ apps and about 57 engineers; I designed and built around 30 of the second-generation components.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Team lead",
            body: "Technical lead for the Design System team. Directed the Content Preview re-skin and the cross-team removal of the legacy navigation bar.",
            meta: "Scribd",
          },
          {
            title: "Promoter",
            body: "As the project lead for a product catalog feature, I introduced Nike’s design system to Gameday, Nike’s wholesale e-commerce app.",
            meta: "Nike",
          },
        ],
      },
      {
        title: "Micro-frontends",
        items: [
          {
            title: "Global app shell",
            body: "One shell for every product: a fast independent deployable that “just works” on every app, from React SPAs to Django MPAs. Built for AI-assisted work, with strict CI gates, excellent documentation, and full test coverage on critical paths.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Global left nav",
            body: "The app shell’s predecessor: a shared navigation API and component, in production across 6 apps. While not a “true” micro-frontend, it accomplished the same goal for Lightspeed’s React-based product apps, allowing most navigation changes to be configurable and deployable in one place. This also “made the case” for the app shell, proving a micro-frontend’s value in further unifying Lightspeed’s broader suite of applications.",
            meta: "Lightspeed Systems",
          },
        ],
      },
      {
        title: "Products",
        items: [
          {
            title: "Filter",
            body: "As the Filter lead for over 3 years, my contributions included a ground-up rewrite of this flagship product’s core feature-set; I architected and wrote about 95% of it. My favorite challenge was the policy assignment and resolution across a customer’s group tree, where performance and intuitive UX were absolutely critical. Its Table, Nested List, and Filters Bar components went on to be used by other teams.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Classroom",
            body: "I lead Classroom projects, and I’m bringing the company’s highest-retention product up to modern standards. I re-architected the admin experience as a new SPA, with background saves and faster interactions throughout, and I cut seconds off the initial load of the teacher experience.",
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

  notFound: {
    title: "Page not found",
    heading: "This page doesn’t exist.",
    body: "The link may be old, or the address may have a typo.",
    home: "Go to the home page",
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
          "All copy lives in one file per language, so the Spanish version uses the same components as the English one.",
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
          "Every text colour meets WCAG AA, and focus is visible everywhere. The rotating headline has a pause button, and it stops entirely if your system asks for reduced motion. Screen readers get the headline as one sentence. The page is checked with axe and by hand with a keyboard.",
        ],
      },
      {
        heading: "Lighthouse",
        // Measured on production at launch, October 2026.
        paragraphs: [
          "Lighthouse’s mobile run scores 100 for Accessibility, Best Practices and SEO, and 97 to 99 for Performance. The largest contentful paint lands in 1.3 to 1.5 seconds, nothing shifts as the page loads, and the first visit transfers 84 KB.",
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
