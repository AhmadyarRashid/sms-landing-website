"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { solutions } from "@/data/solutions";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/community", label: "Community" },
  { href: "/media", label: "Media" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Toggle a denser, more opaque bar once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/70 bg-white/80 shadow-[0_8px_30px_-16px_rgba(16,185,129,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex items-center">
            <span className="absolute -inset-1.5 rounded-full bg-brand/15 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src={site.logo}
              alt={site.name}
              width={44}
              height={44}
              className="relative h-11 w-auto"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-bold tracking-tight text-gray-900">
              SMS SERVICES
            </span>
            <span className="text-[11px] text-gray-500">{site.tagline}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-brand after:to-accent-2 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive(link.href)
                      ? "text-brand after:scale-x-100"
                      : "text-gray-700 hover:text-brand"
                  }`}
                >
                  {link.label}
                  <svg
                    className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[30rem] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="gradient-border grid grid-cols-2 gap-1 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="group/item flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-brand/10 hover:text-brand-dark"
                      >
                        <span className="flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand to-accent-2 transition-transform group-hover/item:scale-150" />
                        {s.short}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-brand after:to-accent-2 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive(link.href)
                    ? "text-brand after:scale-x-100"
                    : "text-gray-700 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn-shine ml-2 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand to-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand/40"
          >
            Contact Us
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-gray-700 lg:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className={`block flex-1 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive(link.href) ? "text-brand" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      type="button"
                      aria-label="Toggle services"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="px-3 py-2 text-lg text-gray-500"
                    >
                      {servicesOpen ? "−" : "+"}
                    </button>
                  )}
                </div>
                {link.hasDropdown && servicesOpen && (
                  <div className="ml-3 border-l border-gray-100 pl-3">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:text-brand"
                      >
                        {s.short}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-gradient-to-r from-brand to-accent px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand/25"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
