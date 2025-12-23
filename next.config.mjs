/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap.xml",
    },
  ],
};

export default nextConfig;
