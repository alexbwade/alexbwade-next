import { en, type Messages } from "./en";

export const defaultLocale = "en";

const messages = { en } satisfies Record<string, Messages>;

export type Locale = keyof typeof messages;

export function t(locale: Locale = defaultLocale): Messages {
  return messages[locale];
}

/** Formats an ISO year-month such as "2023-08" as "Aug 2023". */
export function formatMonth(isoMonth: string, locale: Locale = defaultLocale): string {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year ?? 0, (month ?? 1) - 1))
  );
}
