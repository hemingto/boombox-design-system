/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@boombox/components', '@boombox/tokens'],
};

module.exports = nextConfig; 