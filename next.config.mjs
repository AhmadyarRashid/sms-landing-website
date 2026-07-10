/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a self-contained server bundle (.next/standalone) for a small
  // production Docker image that runs `node server.js`.
  output: "standalone",

  // Trim response weight and remove the fingerprinting header.
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    // Serve modern, smaller formats to browsers that support them.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // Long-cache the immutable, hashed static assets.
  async headers() {
    return [
      {
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
