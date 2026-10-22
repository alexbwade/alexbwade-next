export default {
  plugins: ["prettier-plugin-astro"],
  printWidth: 120,
  trailingComma: "es5",
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
