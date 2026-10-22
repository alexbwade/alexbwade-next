// Build-time rendering of the OG image and favicons with satori (layout to SVG) and resvg (SVG to PNG).
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

// satori reads WOFF but not WOFF2.
const fontFile = (weight: number) =>
  readFileSync(
    join(
      process.cwd(),
      `node_modules/@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-${weight}-normal.woff`
    )
  );

const fonts = [500, 600].map((weight) => ({
  name: "Schibsted Grotesk",
  data: fontFile(weight),
  weight: weight as 500 | 600,
  style: "normal" as const,
}));

export interface Node {
  type: string;
  props: { style: Record<string, string | number>; children?: string | Node | (string | Node)[] | undefined };
}

export const el = (type: string, style: Node["props"]["style"], children?: Node["props"]["children"]): Node => ({
  type,
  props: { style, children },
});

export function renderSvg(node: Node, width: number, height: number): Promise<string> {
  return satori(node as Parameters<typeof satori>[0], { width, height, fonts });
}

export async function renderPng(
  node: Node,
  width: number,
  height: number,
  outputWidth = width
): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await renderSvg(node, width, height);
  return new Uint8Array(new Resvg(svg, { fitTo: { mode: "width", value: outputWidth } }).render().asPng());
}

export const colors = { paper: "#FAFBFC", ink: "#17202E", lead: "#7D8799", redline: "#C8175D", muted: "#556274" };

/** The "AW" monogram used for every favicon size. */
export const monogram = (size: number): Node =>
  el(
    "div",
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: size * 0.18,
      background: colors.ink,
      color: colors.paper,
      fontFamily: "Schibsted Grotesk",
      fontWeight: 600,
      fontSize: size * 0.5,
      letterSpacing: "-0.04em",
    },
    "AW"
  );
