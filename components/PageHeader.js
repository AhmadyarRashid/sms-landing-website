import Reveal from "@/components/Reveal";

// Consistent hero band used at the top of interior pages.
export default function PageHeader({ title, subtitle, eyebrow }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
        {eyebrow && (
          <Reveal
            as="p"
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand"
          >
            {eyebrow}
          </Reveal>
        )}
        <Reveal
          as="h1"
          delay={80}
          className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          {title}
        </Reveal>
        {subtitle && (
          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg"
          >
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  );
}
