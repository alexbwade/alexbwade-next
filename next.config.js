/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  compiler: {
    reactRemoveProperties: {
      properties: ["^data-testid$"],
    },
  },
};

module.exports = nextConfig;
