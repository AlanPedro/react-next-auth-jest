const inTest = process.env.NODE_ENV === "test";

console.log(inTest);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /** @type {import('next').NextConfig} */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      exclude: /node_modules\/(?!@jose)/,
      // exclude: !inTest ? /node_modules\/(?!(@jose))/ : /(node_modules)/,
      options: {
        cacheDirectory: inDevelopment,
        cacheCompression: false,
      },
    });
    config.experiments = { ...config.experiments, topLevelAwait: true };
    console.log(config);
    return config;
  },
};

module.exports = nextConfig;
