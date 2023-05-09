const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const tsConfig = require("./tsconfig.json");
const getAliases = require("./config/aliases.js");

const moduleAliasesMap = getAliases({ config: tsConfig, format: "jest" });

const customConfig = {
  cacheDirectory: ".jest-cache",
  clearMocks: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/utils/**/*.{js,ts}",
    "!<rootDir>/**/index.{js,ts}",
  ],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageReporters: ["json-summary", "html"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "\\.module.scss$": "identity-obj-proxy",
    "\\.scss$": "<rootDir>/config/jest/emptyStringMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/config/jest/emptyObjectMock.js",
    ...moduleAliasesMap,
  },
  reporters: ["default"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/**/__tests__/*.test.{js,jsx,ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { jsc: { target: "es2021" } }],
  },
  transformIgnorePatterns: ["/node_modules/(?!react-file-drop)"],
  verbose: true,
};

module.exports = createJestConfig(customConfig);
