import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";

// Sample testimonials — replace the quotes/attribution with your real clients'
// words. Kept sector-based (no invented names) so nothing is misrepresented.
const testimonials = [
  {
    quote:
      "SMS gave us a single view of every site. We spot issues before they become incidents instead of reacting after the fact.",
    role: "Operations Lead",
    sector: "Facilities & Security",
  },
  {
    quote:
      "The team didn't just install hardware — they understood our workflow and built automation around how we actually operate.",
    role: "Plant Manager",
    sector: "Manufacturing",
  },
  {
    quote:
      "Energy costs dropped noticeably within the first quarter, and our buildings are more comfortable than ever.",
    role: "Facility Director",
    sector: "Commercial Real Estate",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          In their words
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What partners <span className="text-gradient">value</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.role} delay={i * 110} className="flex">
            <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <svg className="h-9 w-9 text-brand/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 7C6.5 7 4 9.5 4 12.5V19h7v-7H7.5c0-1.7 1.3-3 3-3V7zm10 0c-3 0-5.5 2.5-5.5 5.5V19h7v-7H17c0-1.7 1.3-3 3-3V7z" />
              </svg>
              <p className="mt-4 flex-1 text-gray-700">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-sm font-bold text-white">
                  {t.role.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.role}</p>
                  <p className="text-xs text-gray-500">{t.sector}</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-gray-400">
        Representative feedback — we&apos;ll feature named client testimonials as they&apos;re approved.
      </p>
    </section>
  );
}
