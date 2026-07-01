import "./globals.css";
import { Inter } from "next/font/google";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://smsservicespk.com"),
  title: {
    default: "SMS Services | Smart Infrastructure, Security & Cloud",
    template: "%s | SMS Services",
  },
  description:
    "SMS Services delivers smart safety & security, building management, manufacturing, agriculture, cybersecurity, retail intelligence and ERP solutions. A member of the Pathfinder Group.",
  keywords: [
    "SMS Services",
    "smart security",
    "IoT",
    "cybersecurity",
    "ERP",
    "building management",
    "Pakistan",
  ],
  openGraph: {
    title: "SMS Services | Smart Infrastructure, Security & Cloud",
    description:
      "Intelligent infrastructure and secure digital solutions for modern enterprises.",
    type: "website",
  },
  icons: {
    icon: "/images/SMS Logo Services Green-01 1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
