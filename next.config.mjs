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
    // Content Security Policy — allowlist ONLY what this site legitimately uses
    // (self-hosted assets/fonts, YouTube embeds + thumbnails). Everything else is
    // denied, which blocks the classes of injection seen in the wild against this
    // domain: `<script src="data:...">` loaders (no `data:` in script-src),
    // third-party trackers like mc.yandex.ru (host not allowlisted), and the
    // blockchain `eth_call` fetches used by EtherHiding malware (connect-src 'self').
    // NOTE: 'unsafe-inline' is required for Next.js's inline hydration scripts.
    // A server-level attacker could still strip this header — it is defense in
    // depth, NOT a substitute for securing the hosting account.
    // In development, Next.js's hot-reload / React Refresh runtime uses eval(),
    // which requires 'unsafe-eval'. Without it the dev bundle throws under this
    // CSP and the page never hydrates (content stays hidden behind scroll
    // animations). Production is built ahead of time and needs no eval, so we
    // keep it strict there.
    const isDev = process.env.NODE_ENV !== "production";
    const scriptSrc = isDev
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      : "script-src 'self' 'unsafe-inline'";

    const csp = [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];

    return [
      {
        // Apply the security headers to every response.
        source: "/:path*",
        headers: securityHeaders,
      },
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
