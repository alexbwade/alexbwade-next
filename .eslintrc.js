const tsConfig = require("./tsconfig.json");
const getAliases = require("./config/aliases");

const OFF = "off";
const ERROR = "error";
const ALWAYS = "always";

const moduleAliasesMap = getAliases({ config: tsConfig, format: "eslint" });

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:import/recommended",
    "plugin:css-modules/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    quotes: [ERROR, "double"],
    eqeqeq: [ERROR, ALWAYS],
    "no-eval": [ERROR],
    "prefer-const": [ERROR],
    "prettier/prettier": ERROR,
    "css-modules/no-unused-class": [OFF, { camelCase: true }],
    "css-modules/no-undef-class": [ERROR, { camelCase: true }],
    "react/react-in-jsx-scope": [OFF],
  },
  settings: {
    "import/ignore": [".(scss|css)$"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src"],
      },
      alias: {
        map: moduleAliasesMap,
      },
    },
    react: {
      version: "detect",
    },
  },
  plugins: ["import", "prettier", "react", "jest", "css-modules", "@typescript-eslint"],
  root: true,
};
