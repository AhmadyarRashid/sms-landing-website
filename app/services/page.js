import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/data/solutions";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import TiltCard from "@/components/TiltCard";

export const metadata = {
  title: "Our Services",
  description:
    "Explore SMS Services' full range of smart solutions: safety & security, building management, manufacturing, agriculture, cybersecurity, retail intelligence and ERP.",
};

// A lightweight, matching "how we deliver" narrative for the services page.
const process = [
  {
    step: "01",
    title: "Discover",
    body: "We map your operations, goals, and pain points to define exactly where technology moves the needle.",
  },
  {
    step: "02",
    title: "Design",
    body: "Our engineers architect a tailored, secure solution — integrating IoT, cloud, and data from day one.",
  },
  {
    step: "03",
    title: "Deploy",
    body: "We build, integrate, and roll out with minimal disruption, validating every system before go-live.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "With 24/7 monitoring and analytics, we keep improving performance long after launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Smart Solutions for Every Sector"
        subtitle="From intelligent security to enterprise ERP, we design and integrate technology that works the way you do."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100} className="flex">
              <TiltCard className="flex flex-1">
                <SpotlightCard
                  as={Link}
                  href={`/solutions/${s.slug}`}
                  className="group flex flex-1 flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light/70 to-white p-8">
                    <Image
                      src={s.heroImage}
                      alt={s.title}
                      width={220}
                      height={160}
                      className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand">
                      {s.short}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Learn more
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we deliver */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-60" />
        <div
          aria-hidden
          className="aurora-blob aurora-blob-1 left-1/3 top-0 h-96 w-96 opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">
              How we deliver
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A proven path from{" "}
              <span className="text-gradient-light">idea to impact</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 110}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40"
              >
                <span className="text-5xl font-extrabold text-gradient-light opacity-90">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-emerald-100/70">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
