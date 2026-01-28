import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const sharedRules = {
  // Stylistic rules (not in recommended configs)
  "array-bracket-spacing": ["warn", "never", { objectsInArrays: false }],
  "arrow-spacing": ["error", { before: true, after: true }],
  "block-spacing": "warn",
  "brace-style": "warn",
  "comma-dangle": ["warn", "always-multiline"],
  "comma-spacing": "warn",
  "comma-style": "warn",
  "func-call-spacing": "warn",
  indent: ["warn", 2, { SwitchCase: 1 }],
  "jsx-quotes": ["warn", "prefer-double"],
  "key-spacing": "warn",
  "keyword-spacing": "warn",
  "linebreak-style": ["error", "unix"],
  "max-len": ["warn", { code: 120 }],
  "multiline-ternary": ["warn", "always-multiline"],
  "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
  "object-curly-spacing": ["warn", "always"],
  "one-var-declaration-per-line": "warn",
  "operator-linebreak": "warn",
  quotes: ["warn", "double", { avoidEscape: true }],
  "quote-props": ["warn", "as-needed"],
  semi: ["warn", "always"],
  "semi-spacing": "warn",
  "space-before-blocks": "warn",
  "space-in-parens": "warn",
  "space-infix-ops": "warn",

  // Logic/behavior rules (customizing recommended or not in recommended)
  "block-scoped-var": "warn",
  "dot-notation": "error",
  "eol-last": "error",
  eqeqeq: ["error", "smart"],
  "no-confusing-arrow": "error",
  "no-console": "warn",
  "no-else-return": "warn",
  "no-eq-null": "warn",
  "no-extra-bind": "warn",
  "no-implicit-coercion": "warn",
  "no-multi-spaces": "warn",
  "no-return-assign": "error",
  "no-script-url": "error",
  "no-sequences": "warn",
  "no-useless-return": "warn",
  "one-var": ["error", "never"],
  radix: "error",
  "require-await": "error",
  strict: ["error", "never"],

  // React-specific rules (customizing or not in recommended)
  "react/jsx-indent": ["warn", 2],
  "react/jsx-pascal-case": "warn",
  "react/jsx-wrap-multilines": "warn",
  "react/react-in-jsx-scope": "off",
  "react/no-array-index-key": "warn",
  "react/no-did-mount-set-state": "error",
  "react/no-did-update-set-state": "warn",
  "react/no-find-dom-node": "warn",
  "react/no-unused-prop-types": "warn",
  "react/sort-comp": "warn",
};

const jsConfig = {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  ignores: ["**/*.{ts,tsx}"],
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: globals.browser,
  },
  plugins: {
    react: pluginReact,
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
    ...sharedRules,
    "no-unused-vars": ["warn", { args: "all", argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
  },
  settings: {
    react: { version: "detect" },
  },
};

const tsConfig = {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
      ecmaFeatures: { jsx: true },
    },
    globals: globals.browser,
  },
  plugins: {
    react: pluginReact,
    "@typescript-eslint": tseslint.plugin,
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    ...sharedRules,
    "no-undef": "off", // handled by TS itself
    "no-unused-vars": "off", // handled by TS version
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    react: { version: "detect" },
  },
};

// Re-enable quote rules after prettier config (prettier disables them by default)
const quoteRules = {
  files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  rules: {
    quotes: ["warn", "double", { avoidEscape: true }],
    "jsx-quotes": ["warn", "prefer-double"],
  },
};

export default [jsConfig, tsConfig, prettierConfig, quoteRules];
