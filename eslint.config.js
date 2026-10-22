import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  { ignores: ["dist/", ".astro/", ".vercel/", "archive/", "docs/", ".yarn/"] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...astro.configs.recommended,
  { files: ["src/scripts/**"], languageOptions: { globals: globals.browser } },
  { files: ["*.config.{js,mjs}"], languageOptions: { globals: globals.node } },
  prettier,
];
