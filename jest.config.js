const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const esModules = ["jose", "@panva"].join("|");

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
  transform: {
    // [`(${esModules}).+\\.js$`]: "babel-jest",
    "node_modules\\/.+\\.(js)|(mjs)$": ["@swc/jest"],
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  // transformIgnorePatterns: [
  // `[/\]node_modules[/\\\\](?!${esModules}).+\\.(js|jsx|mjs|cjs|ts|tsx)$`,
  // ],
  moduleNameMapper: {
    // jose: require.resolve("jose"),
    "jose/node": "<rootDir>/node_modules/jose/dist/node/cjs/index.js",
    "jose/browser": "<rootDir>/node_modules/jose/dist/browser/index.js",
    // "@panva": require.resolve("@panva"),
    // "^jose/(.*)$":
    // "<rootDir>/node_modules/jose-node-esm-runtime/dist/node/esm/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setupFilesAfterEnv.ts"],
  // transformIgnorePatterns: ["node_modules/(?!@jose)"],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
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
