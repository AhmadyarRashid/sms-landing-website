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

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={site.logo}
            alt={site.name}
            width={44}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-bold text-gray-900">SMS SERVICES</span>
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
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand"
                      : "text-gray-700 hover:text-brand"
                  }`}
                >
                  {link.label}
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {solutions.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-dark"
                    >
                      {s.short}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-gray-700 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-1 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Contact Us
            <span aria-hidden>→</span>
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
        <div className="border-t border-gray-100 bg-white lg:hidden">
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
                      className="px-3 py-2 text-gray-500"
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
              className="mt-2 block rounded-lg bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
