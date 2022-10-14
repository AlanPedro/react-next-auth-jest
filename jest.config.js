const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const esModules = ["jose", "@panva"].join("|");

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
  // moduleNameMapper: {
  //   jose: require.resolve("jose"),
  //   "@panva": require.resolve("@panva/hkdf"),
  //   "next-auth": require.resolve("next-auth"),
  // },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupFilesAfterEnv.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jest-environment-jsdom",
  globals: {
    "ts-jest": {
      // tsconfig: {
      // module: "ESNext",
      // target: "ES2017",
      // },
      useESM: true,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
