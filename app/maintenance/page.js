import Image from "next/image";
import { site } from "@/data/site";

export const metadata = {
  title: "We'll Be Back Soon",
  description: "Our website is currently undergoing scheduled maintenance.",
  robots: { index: false, follow: false },
};

function Gear({ className, teeth = 8 }) {
  // Simple decorative gear built from a circle + rounded "teeth".
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden>
      {Array.from({ length: teeth }).map((_, i) => (
        <rect
          key={i}
          x="45"
          y="2"
          width="10"
          height="22"
          rx="3"
          transform={`rotate(${(360 / teeth) * i} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="12" fill="#0f5132" />
    </svg>
  );
}

export default function MaintenancePage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f5132] via-brand to-emerald-500 px-4 py-16 text-center">
      {/* Animated background blobs */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl"
        style={{ animationDelay: "3s" }}
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-black/10 blur-3xl"
        style={{ animationDelay: "6s" }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="animate-fade-up relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        {/* Logo on a floating white badge with a pulsing ring */}
        <div className="relative mb-10">
          <span className="animate-pulse-ring absolute inset-0 rounded-3xl bg-white/40" />
          <div className="animate-float relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-2xl">
            <Image
              src={site.logo}
              alt={site.name}
              width={84}
              height={84}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
          {/* Spinning gears badge */}
          <div className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
            <Gear className="animate-gear h-7 w-7 text-brand" teeth={8} />
          </div>
          <div className="absolute -bottom-4 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md">
            <Gear className="animate-gear-rev h-5 w-5 text-emerald-600" teeth={7} />
          </div>
        </div>

        <p className="mb-3 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
          {site.name} • Under Maintenance
        </p>

        <h1 className="text-shimmer text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          We&apos;ll Be Back Soon
        </h1>

        <p className="mt-5 max-w-lg text-base text-white/85 sm:text-lg">
          Our website is getting a little upgrade to serve you better. We&apos;re
          working hard behind the scenes and will be back online shortly. Thank you
          for your patience!
        </p>

        {/* Indeterminate progress bar */}
        <div className="mt-9 h-2 w-64 overflow-hidden rounded-full bg-white/20 sm:w-80">
          <div className="animate-progress h-full w-1/3 rounded-full bg-white" />
        </div>

        {/* Working... with bouncing dots */}
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-white/80">
          <span>Working on something great</span>
          <span className="animate-dot inline-block h-1.5 w-1.5 rounded-full bg-white" />
          <span
            className="animate-dot inline-block h-1.5 w-1.5 rounded-full bg-white"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="animate-dot inline-block h-1.5 w-1.5 rounded-full bg-white"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Contact */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm text-white/70">Need to reach us in the meantime?</p>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-dark shadow-lg transition-transform hover:scale-105"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
            </svg>
            {site.contact.email}
          </a>

          <div className="mt-2 flex gap-3">
            {[
              { href: site.social.facebook, label: "Facebook", path: "M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" },
              { href: site.social.linkedin, label: "LinkedIn", path: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" },
              { href: site.social.instagram, label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 01-1.4-.9 3.7 3.7 0 01-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.1a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.2-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white hover:text-brand"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
