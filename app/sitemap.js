import { solutions } from "@/data/solutions";
import { site } from "@/data/site";

const BASE = "https://smsservicespk.com";

// Generates /sitemap.xml at build time from the static routes + solution pages.
export default function sitemap() {
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/community", priority: 0.6, changeFrequency: "monthly" },
    { path: "/media", priority: 0.6, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.5, changeFrequency: "monthly" },
    { path: "/video", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const now = new Date();

  const routes = staticRoutes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const solutionRoutes = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...solutionRoutes];
}
