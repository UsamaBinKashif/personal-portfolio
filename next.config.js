/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["imgur.com","github.com","img.icons8.com","seeklogo.com"],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
