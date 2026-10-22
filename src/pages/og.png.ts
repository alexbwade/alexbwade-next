import type { APIRoute } from "astro";
import { t } from "../i18n";
import { colors, el, renderPng } from "../lib/render";

export const GET: APIRoute = async () => {
  const m = t().hero;
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
          fontSize: 84,
          fontWeight: 500,
          lineHeight: 0.98,
          letterSpacing: "-0.045em",
        },
        [line(m.lead, colors.lead), line(`${m.before} ${m.rotating[0]}`), line(m.after)]
      ),
    ]
  );

  return new Response(await renderPng(image, 1200, 630), { headers: { "Content-Type": "image/png" } });
};
