import Link from "next/link";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Page not found",
};

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-b from-brand-light/50 via-white to-white">
      <Aurora />
      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-8xl font-extrabold leading-none text-shine sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          This page drifted off the grid
        </h1>
        <p className="mx-auto mt-4 max-w-md text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand/40"
          >
            Back to Home <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Or jump to
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm text-gray-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
