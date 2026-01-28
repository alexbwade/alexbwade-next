/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: {
      properties: ["^data-testid$"],
    },
    // removeConsole: {
    //   exclude: ["error"],
    // },
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.edgeql/,
  //     use: "raw-loader",
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
