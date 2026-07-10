// Generates /manifest.webmanifest for installability + richer mobile metadata.
export default function manifest() {
  return {
    name: "SMS Services — Smart Infrastructure, Security & Cloud",
    short_name: "SMS Services",
    description:
      "Intelligent infrastructure and secure digital solutions — IoT, cybersecurity, building management, and ERP.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#198754",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
