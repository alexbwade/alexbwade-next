// Spanish copy. It must match the shape of en.ts; the Messages type enforces that.
//
// Conventions:
// - Neutral Spanish, first person, and "tú" on the rare occasions the reader is addressed.
// - Job titles stay in English, the way they appear on the résumé and LinkedIn.
// - Phrasing avoids gendered words about Alex (for example "lidero" rather than "soy el líder").
// - Technical terms that Spanish-speaking engineers use in English stay in English: app shell, SPA, CI, UX.

import type { Messages } from "./en";

export const es: Messages = {
  languageName: "Español",

  meta: {
    title: "Alex Wade, Staff Frontend Engineer",
    siteName: "Alex Wade",
    jobTitle: "Staff Frontend Engineer",
    ogLocale: "es_ES",
    description:
      "Soy Alex Wade, Staff Frontend Engineer en Portland, Oregón. Construyo sistemas de diseño, micro-frontends y APIs de componentes de calidad que nunca fallan.",
    ogImageAlt: "Hola, soy Alex. Construyo sistemas de diseño de calidad que nunca fallan.",
  },

  header: {
    skipLink: "Saltar al contenido",
    home: "Alex Wade",
    backToTop: "Volver arriba",
    navLabel: "Principal",
    nav: [
      { href: "#about", label: "Sobre mí" },
      { href: "#work", label: "Trabajo" },
      { href: "#experience", label: "Experiencia" },
      { href: "#contact", label: "Contacto" },
    ],
    resume: "Currículum",
  },

  hero: {
    srHeadline:
      "Hola, soy Alex. Construyo sistemas de diseño, micro-frontends y APIs de componentes de calidad que nunca fallan.",
    lead: "Hola, soy Alex.",
    before: "Construyo",
    rotating: ["sistemas de diseño", "micro-frontends", "APIs de componentes"],
    after: "de calidad que nunca fallan.",
  },

  band: {
    label: "Retrato y ejemplos",
    photoAlt: "Alex Wade bajo una guirnalda de luces",
    creditPrefix: "Foto:",
    creditName: "Matthew Thogerson",
    creditUrl: "https://www.badtactic.com/",
    pause: "Pausar animación",
    play: "Reanudar animación",
    specimen: {
      primary: "Guardar cambios",
      secondary: "Vista previa",
      tertiary: "Cancelar",
      toggle: "Sincronizar",
      fieldLabel: "Nombre de la clase",
      fieldValue: "Biología, 3.er período",
      // Design-token names, so they stay in English.
      swatches: ["ink", "slate", "mist", "paper", "redline"],
    },
    code: { buttonLabel: "Guardar cambios" },
  },

  glance: {
    label: "En resumen",
    facts: [
      { term: "Experiencia", value: "11 años" },
      { term: "Ubicación", value: "Portland, Oregón" },
      { term: "Actualmente", value: "Staff Frontend Engineer, Lightspeed Systems" },
    ],
    resume: "Ver mi currículum",
    newTab: "(se abre en una pestaña nueva)",
    // The résumé only exists in English, so the label says so.
    resumeMeta: "PDF en inglés, {size}",
  },

  about: {
    label: "Sobre mí",
    photoAlt: "Alex Wade sonriendo en una calle de la ciudad",
    statement: "Crear experiencias de usuario fluidas es mi oficio.",
    paragraphs: [
      "A lo largo de toda mi carrera, he puesto la UX en el centro de lo que hago. Los usuarios merecen interfaces intuitivas, ágiles y de alto rendimiento que les permitan lograr sus objetivos sin esfuerzo. Todo debería “simplemente funcionar”.",
      "Hoy me enorgullece encargarme en solitario del mantenimiento del sistema de diseño de Lightspeed Systems y de buena parte de su desarrollo, diseñar la arquitectura de la navegación compartida de toda la organización y liderar técnicamente el producto Classroom.",
    ],
  },

  work: {
    label: "Trabajo destacado",
    groups: [
      {
        title: "Sistemas de diseño",
        items: [
          {
            title: "Mantenimiento y desarrollo principal",
            body: "55 componentes activos (129 en total) que usan 14 apps (+2 más en incorporación) y unos 50 ingenieros; diseñé y construí cerca de 30 de los componentes de segunda generación.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Liderazgo de equipo",
            body: "Lideré técnicamente el equipo de Design System. Dirigí el rediseño visual de Content Preview y la eliminación, coordinada entre varios equipos, de la barra de navegación heredada.",
            meta: "Scribd",
          },
          {
            title: "Impulso a la adopción",
            body: "Como responsable del proyecto de una función de catálogo de productos, introduje el sistema de diseño de Nike en Gameday, la app de e-commerce mayorista de Nike.",
            meta: "Nike",
          },
        ],
      },
      {
        title: "Micro-frontends",
        items: [
          {
            title: "App shell global",
            body: "Un solo shell para todos los productos: una pieza rápida, desplegable de forma independiente, que “simplemente funciona” en cualquier app, desde SPA en React hasta MPA en Django. Pensado para el trabajo asistido por IA, con controles estrictos de CI, documentación excelente y cobertura de pruebas completa en los flujos críticos.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Navegación lateral global",
            body: "El predecesor del app shell: una API y un componente de navegación compartidos, en producción en 6 apps. Aunque no es un micro-frontend “de verdad”, cumplió el mismo objetivo para las apps de producto de Lightspeed basadas en React: la mayoría de los cambios de navegación se configuran y se despliegan desde un solo lugar. Además, sirvió para defender la idea del app shell, al demostrar el valor de un micro-frontend para unificar aún más el conjunto de aplicaciones de Lightspeed.",
            meta: "Lightspeed Systems",
          },
        ],
      },
      {
        title: "Productos",
        items: [
          {
            title: "Filter",
            body: "Durante más de 3 años como responsable de Filter, entre mis aportes estuvo reescribir desde cero el núcleo de funciones de este producto estrella; diseñé su arquitectura y escribí cerca del 95 % del código. Mi reto favorito fue la asignación y resolución de políticas a lo largo del árbol de grupos de cada cliente, donde el rendimiento y una UX intuitiva eran absolutamente críticos. Sus componentes Table, Nested List y Filters Bar terminaron usándose en otros equipos.",
            meta: "Lightspeed Systems",
          },
          {
            title: "Classroom",
            body: "Lidero los proyectos de Classroom y estoy llevando el producto con mayor retención de la empresa a estándares modernos. Rediseñé la arquitectura de la experiencia de administración como una nueva SPA, con guardado en segundo plano e interacciones más rápidas en todo el producto, y reduje en varios segundos la carga inicial de la experiencia docente.",
            meta: "Lightspeed Systems, en curso",
          },
        ],
      },
    ],
  },

  experience: {
    label: "Experiencia",
    present: "actualidad",
    jobs: [
      {
        company: "Lightspeed Systems",
        roles: [
          { title: "Staff Frontend Engineer", start: "2023-08", end: null },
          { title: "Senior Software Engineer", start: "2022-04", end: "2023-08" },
        ],
      },
      { company: "Scribd", roles: [{ title: "Senior Software Engineer", start: "2021-03", end: "2022-04" }] },
      {
        company: "Nike",
        roles: [{ title: "Senior Software Engineer (por contrato)", start: "2020-03", end: "2021-03" }],
      },
      { company: "FitEra / Vestright", roles: [{ title: "Senior Web Developer", start: "2015-09", end: "2020-03" }] },
    ],
  },

  contact: {
    label: "Contacto",
    email: "alexbwade@gmail.com",
    location: "Portland, Oregón",
    colophonLink: "Cómo está hecho este sitio",
  },

  notFound: {
    title: "Página no encontrada",
    heading: "Esta página no existe.",
    body: "Puede que el enlace sea antiguo o que la dirección tenga un error.",
    home: "Ir a la página de inicio",
  },

  colophon: {
    title: "Cómo está hecho este sitio",
    description:
      "La tecnología, el presupuesto de rendimiento, el enfoque de accesibilidad y los navegadores compatibles de alexbwade.com.",
    back: "Volver a la página de inicio",
    sections: [
      {
        heading: "Tecnología",
        paragraphs: [
          "Un sitio estático hecho con Astro y TypeScript, alojado en Vercel. No usa ningún framework de UI. La tipografía es Schibsted Grotesk, alojada en el propio sitio, con una fuente de respaldo ajustada a sus métricas para que la página no se mueva cuando carga la fuente.",
          "Las fotos pasan por el procesamiento de imágenes de Astro y se sirven en AVIF y WebP al tamaño en que se muestran. Los ejemplos junto al retrato son HTML y CSS puros, así que no suman bytes de imagen.",
          "Todo el texto vive en un archivo por idioma, así que la versión en español usa los mismos componentes que la inglesa.",
        ],
      },
      {
        heading: "Rendimiento",
        paragraphs: [
          "El presupuesto es de menos de 300 KB en la primera carga, incluidas fuentes e imágenes, y un LCP de menos de 1,5 segundos en una conexión 4G simulada. Toda la animación es CSS. El único JavaScript es un pequeño script en línea para el botón de pausa, y no hay scripts de terceros ni analítica.",
        ],
      },
      {
        heading: "Accesibilidad",
        paragraphs: [
          "Todos los colores de texto cumplen WCAG AA y el foco es visible en todo momento. El titular giratorio tiene un botón de pausa y se detiene por completo si tu sistema pide reducir el movimiento. Los lectores de pantalla reciben el titular como una sola frase. La página se revisa con axe y a mano con el teclado.",
        ],
      },
      {
        heading: "Lighthouse",
        // Same figures as en.ts, measured on the English home page at launch, October 2026.
        paragraphs: [
          "En móvil, Lighthouse da 100 en Accesibilidad, Prácticas recomendadas y SEO, y entre 97 y 99 en Rendimiento. El LCP llega entre 1,3 y 1,5 segundos, nada se mueve mientras carga la página y la primera visita transfiere 84 KB.",
        ],
      },
      {
        heading: "Navegadores",
        paragraphs: [
          "Las dos últimas versiones de Chrome, Edge, Firefox y Safari, además de Safari en iOS y Chrome en Android. La página funciona sin JavaScript.",
        ],
      },
    ],
  },
};
