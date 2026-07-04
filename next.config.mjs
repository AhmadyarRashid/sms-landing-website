/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a self-contained server bundle (.next/standalone) for a small
  // production Docker image that runs `node server.js`.
  output: "standalone",
  images: {
    // Filenames in /public/images contain spaces/parentheses; use the default
    // loader with unoptimized off is fine, but keep formats broad.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
