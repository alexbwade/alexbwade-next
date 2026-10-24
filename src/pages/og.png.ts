import type { APIRoute } from "astro";
import { renderOgImage } from "../lib/ogImage";

export const GET: APIRoute = () => renderOgImage("en");
