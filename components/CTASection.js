import Link from "next/link";
import Reveal from "@/components/Reveal";

// Reusable call-to-action band shown near the bottom of most pages.
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
      <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center shadow-xl sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-black/10"
        />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-light/95">{text}</p>
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-brand-dark shadow-sm transition-transform hover:scale-[1.03]"
          >
            {buttonLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
