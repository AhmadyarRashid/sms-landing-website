import Reveal from "@/components/Reveal";
import Aurora from "@/components/Aurora";

// Consistent hero band used at the top of interior pages.
export default function PageHeader({ title, subtitle, eyebrow }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 via-white to-white">
      <Aurora />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
        {eyebrow && (
          <Reveal
            as="p"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
            {eyebrow}
          </Reveal>
        )}
        <Reveal
          as="h1"
          variant="blur"
          delay={80}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          {title}
        </Reveal>
        {subtitle && (
          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg"
          >
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  );
}
