import { statSync } from "node:fs";
import { join } from "node:path";

/** Size of a file in public/, formatted like "110 KB". Runs at build time, from the project root. */
export function publicFileSize(path: string): string {
  const bytes = statSync(join(process.cwd(), "public", path)).size;
  return `${Math.round(bytes / 1024)} KB`;
}
