import type { APIRoute } from "astro";
import { colors, el, monogram, renderPng } from "../lib/render";

// iOS adds its own rounded corners, so the icon is a full square with the monogram inset.
export const GET: APIRoute = async () => {
  const icon = el(
    "div",
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 180,
      height: 180,
      background: colors.ink,
    },
    [monogram(180)]
  );
  return new Response(await renderPng(icon, 180, 180), { headers: { "Content-Type": "image/png" } });
};
