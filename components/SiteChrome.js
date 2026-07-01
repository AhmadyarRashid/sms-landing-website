"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Standalone routes that should render WITHOUT the site navbar/footer.
const BARE_ROUTES = ["/maintenance"];

export function SiteHeader() {
  const pathname = usePathname();
  if (BARE_ROUTES.includes(pathname)) return null;
  return <Navbar />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (BARE_ROUTES.includes(pathname)) return null;
  return <Footer />;
}
