import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  testRegex: "(/tests/.*|(\\.|/)(tests|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg)$": "<rootDir>/tests/mockFile.ts",
    "\\.(css)$": "<rootDir>/tests/mockFile.ts",
  },
  collectCoverage: true,
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/services/**",
    "!src/react-app-env.d.ts",
  ],
};

export default config;
