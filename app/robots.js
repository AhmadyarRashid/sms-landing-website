// Generates /robots.txt — allow all crawlers and point to the sitemap.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://smsservicespk.com/sitemap.xml",
    host: "https://smsservicespk.com",
  };
}
