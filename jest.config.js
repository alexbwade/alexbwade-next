const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const tsConfig = require("./tsconfig.json");
const getAliases = require("./config/aliases.js");

const moduleAliasesMap = getAliases({ config: tsConfig, format: "jest" });

const customConfig = {
  cacheDirectory: ".jest-cache",
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/components/**/*.(t|j)s", "<rootDir>/utils/**/*.(t|j)s"],
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
  moduleFileExtensions: ["js", "json", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "\\.module.scss$": "identity-obj-proxy",
    "\\.scss$": "<rootDir>/config/jest/emptyStringMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/config/jest/emptyObjectMock.js",
    ...moduleAliasesMap,
  },
  reporters: ["default"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/**/__tests__/*.test.(t|j)s"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { jsc: { target: "es2021" } }],
  },
  transformIgnorePatterns: ["/node_modules/(?!react-file-drop)"],
  verbose: true,
};

module.exports = createJestConfig(customConfig);
