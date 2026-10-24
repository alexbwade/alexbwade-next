import { en, type Messages } from "./en";
import { es } from "./es";

export const defaultLocale = "en";

const messages = { en, es } satisfies Record<string, Messages>;

export type Locale = keyof typeof messages;

export const locales = Object.keys(messages) as Locale[];

export function t(locale: Locale = defaultLocale): Messages {
  return messages[locale];
}

/** Narrows Astro.currentLocale, which is a plain string, to a locale this site has. */
export function toLocale(value: string | undefined): Locale {
  return locales.find((locale) => locale === value) ?? defaultLocale;
}

/** Prefixes a root-relative path with the locale, e.g. ("es", "/colophon") -> "/es/colophon". English has no prefix. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strips the locale prefix from a path, e.g. "/es/colophon" -> "/colophon". */
export function unlocalizedPath(path: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (path === `/${locale}`) return "/";
    if (path.startsWith(`/${locale}/`)) return path.slice(locale.length + 1);
  }
  return path;
}

/**
 * Turns Astro.url.pathname into the URL Vercel serves. Static output is built as /index.html, /colophon.html and
 * /es.html, but Vercel serves them without the extension.
 */
export function cleanPath(pathname: string): string {
  const path = pathname.replace(/\.html$/, "").replace(/\/index$/, "");
  return path === "" ? "/" : path;
}

/** Formats an ISO year-month such as "2023-08" as "Aug 2023" (or "ago 2023" in Spanish). */
export function formatMonth(isoMonth: string, locale: Locale = defaultLocale): string {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year ?? 0, (month ?? 1) - 1))
  );
}
