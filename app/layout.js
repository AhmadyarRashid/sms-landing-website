import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Self-hosted so the production build needs no network access to Google Fonts.
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  weight: "100 900",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
