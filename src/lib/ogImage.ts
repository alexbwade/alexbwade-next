import { t, type Locale } from "../i18n";
import { colors, el, renderPng } from "./render";

/** The 1200 × 630 Open Graph image: the headline with the first rotating phrase. */
export async function renderOgImage(locale: Locale): Promise<Response> {
  const m = t(locale).hero;
  const line = (text: string, color: string = colors.ink) => el("div", { color }, text);

  const image = el(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 1200,
      height: 630,
      padding: 80,
      boxSizing: "border-box",
      background: colors.paper,
      fontFamily: "Schibsted Grotesk",
    },
    [
      el(
        "div",
        { display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 600, color: colors.ink },
        [el("div", {}, "Alex Wade"), el("div", { fontWeight: 500, color: colors.muted }, "alexbwade.com")]
      ),
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          fontSize: 80,
          fontWeight: 500,
          lineHeight: 0.98,
          letterSpacing: "-0.045em",
        },
        [
          line(m.lead, colors.lead),
          el("div", { display: "flex", gap: "0.25em", color: colors.ink }, [
            m.before,
            line(m.rotating[0] ?? "", colors.redline),
          ]),
          line(m.after),
        ]
      ),
    ]
  );

  return new Response(await renderPng(image, 1200, 630), { headers: { "Content-Type": "image/png" } });
}
