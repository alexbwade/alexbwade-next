import type { APIRoute } from "astro";
import { monogram, renderPng } from "../lib/render";

export const GET: APIRoute = async () =>
  new Response(await renderPng(monogram(64), 64, 64, 32), { headers: { "Content-Type": "image/png" } });
