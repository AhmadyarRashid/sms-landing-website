/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Filenames in /public/images contain spaces/parentheses; use the default
    // loader with unoptimized off is fine, but keep formats broad.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
