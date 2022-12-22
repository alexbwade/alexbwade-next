const tsConfig = require("./tsconfig.json");
const getAliases = require("./config/aliases.js");

const moduleAliasesMap = getAliases({ config: tsConfig, format: "jest" });

module.exports = {
  cacheDirectory: ".jest-cache",
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/components/**/*.js", "<rootDir>/utils/**/*.js"],
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
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  moduleNameMapper: {
    "\\.module.scss$": "identity-obj-proxy",
    "\\.scss$": "<rootDir>/config/jest/emptyStringMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/config/jest/emptyObjectMock.js",
    ...moduleAliasesMap,
  },
  reporters: ["default"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/**/__tests__/*.test.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["/node_modules/(?!react-file-drop)"],
  verbose: true,
};
