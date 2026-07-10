import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

// Self-hosted so the production build needs no network access to Google Fonts.
// Inter carries body copy; Space Grotesk gives headings a futuristic feel.
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff2",
  weight: "300 700",
  variable: "--font-space",
  display: "swap",
});

const SITE_URL = "https://smsservicespk.com";
const DESCRIPTION =
  "SMS Services delivers smart safety & security, building management, manufacturing, agriculture, cybersecurity, retail intelligence and ERP solutions. A member of the Pathfinder Group.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SMS Services | Smart Infrastructure, Security & Cloud",
    template: "%s | SMS Services",
  },
  description: DESCRIPTION,
  applicationName: "SMS Services",
  authors: [{ name: "SMS Services" }],
  creator: "SMS Services",
  publisher: "SMS Services",
  keywords: [
    "SMS Services",
    "smart security",
    "IoT",
    "cybersecurity",
    "ERP",
    "building management",
    "smart manufacturing",
    "smart agriculture",
    "Pathfinder Group",
    "Islamabad",
    "Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "SMS Services",
    locale: "en_US",
    url: SITE_URL,
    title: "SMS Services | Smart Infrastructure, Security & Cloud",
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "SMS Services — Smart Infrastructure, Security & Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMS Services | Smart Infrastructure, Security & Cloud",
    description: DESCRIPTION,
    images: ["/images/og.png"],
  },
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport = {
  themeColor: "#198754",
  width: "device-width",
  initialScale: 1,
};

// Organization structured data helps search engines understand the business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SMS Services",
  url: SITE_URL,
  logo: `${SITE_URL}/images/SMS Logo Services Green-01 1.png`,
  description: DESCRIPTION,
  parentOrganization: { "@type": "Organization", name: "Pathfinder Group" },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Rizwan Plaza, Jinnah Ave, Block D, G-6/2 Blue Area",
    addressLocality: "Islamabad",
    postalCode: "44010",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-51-8487572",
    contactType: "customer service",
    email: "info@smsservicespk.com",
  },
  sameAs: [
    "https://www.facebook.com/PFGroupPakistan",
    "https://twitter.com/pfgpakistan",
    "https://www.linkedin.com/company/pfgrouppakistan/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <span aria-hidden className="grain" />
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
