/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgs.xkcd.com"],
  },
  async rewrites() {
    return [
      {
        source: "/posts/:slug.md",
        destination: "/api/markdown/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
