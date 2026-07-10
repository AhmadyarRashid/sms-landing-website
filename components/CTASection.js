import Link from "next/link";
import Reveal from "@/components/Reveal";

// Reusable, futuristic call-to-action band shown near the bottom of most pages.
export default function CTASection({
  heading = "Ready to get started?",
  text = "Let's discuss how SMS Services can help your business.",
  buttonLabel = "Request a Consultation",
  href = "/contact",
}) {
  return (
    <Reveal
      as="section"
      variant="zoom"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center shadow-2xl sm:px-12">
        {/* Glow field */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-60" />
        <div
          aria-hidden
          className="aurora-blob aurora-blob-1 -left-16 -top-20 h-72 w-72"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.6), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="aurora-blob aurora-blob-2 -bottom-24 -right-10 h-80 w-80"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.5), transparent 70%)" }}
        />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100/80">{text}</p>
          <Link
            href={href}
            className="btn-shine mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-dark shadow-lg transition-transform duration-300 hover:scale-[1.04]"
          >
            {buttonLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
