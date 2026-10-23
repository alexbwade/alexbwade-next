import type { APIRoute } from "astro";
import { monogram, renderSvg } from "../lib/render";

export const GET: APIRoute = async () =>
  new Response(await renderSvg(monogram(64), 64, 64), { headers: { "Content-Type": "image/svg+xml" } });
