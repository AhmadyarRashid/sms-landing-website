import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Counter from "@/components/Counter";
import ClientLogos from "@/components/ClientLogos";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us",
  description:
    "SMS Services — a proud member of the Pathfinder Group — provides secure, intelligent, and scalable digital infrastructure.",
};

const stats = [
  { value: 7, suffix: "", label: "Solution domains" },
  { value: 6, suffix: "+", label: "Industries served" },
  { value: 24, suffix: "/7", label: "Monitoring & support" },
  { value: 100, suffix: "+", label: "Systems integrated" },
];

const values = [
  {
    title: "Integrity",
    body: "We operate with transparency and honesty, building trust with our clients and partners.",
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L15 10" />,
  },
  {
    title: "Innovation",
    body: "We relentlessly pursue new ideas and technologies to deliver cutting-edge solutions.",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.5 1 .5 1.6h6c0-.6 0-1.2.5-1.6A6 6 0 0012 3z" />
    ),
  },
  {
    title: "Security",
    body: "We prioritize the protection of data and infrastructure in everything we build.",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3M12 15v2" />
      </>
    ),
  },
  {
    title: "Excellence",
    body: "We are committed to delivering the highest quality of service and results for our clients.",
    icon: (
      <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z" />
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building the intelligent infrastructure behind modern business"
        subtitle="A proud member of the Pathfinder Group — driving digital transformation through secure, intelligent, and scalable technology."
      />

      {/* Our story — text + real-photo collage */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our story
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From reliable connectivity to{" "}
            <span className="text-gradient">end-to-end intelligence</span>
          </h2>
          <p className="mt-5 text-gray-600">
            SMS Services was founded to meet the critical demand for secure,
            intelligent, and scalable digital infrastructure — beginning with reliable
            communication solutions that empower organizations to connect seamlessly
            with their stakeholders.
          </p>
          <p className="mt-4 text-gray-600">
            Today we're a full-service technology partner, specializing in IoT
            integration, cybersecurity, building and manufacturing intelligence, and
            custom software. Our journey is one of continuous innovation — helping
            clients navigate the digital age with confidence and security.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-bold text-gray-900">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Photo collage */}
        <Reveal variant="right" className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative col-span-2 h-56 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/g4.jpg"
                alt="SMS Services with its partners and the Pathfinder Group"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            <div className="group relative h-44 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/g1.jpg"
                alt="SMS Services 'Empowering the Future with Smart Solutions' panel"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="20vw"
              />
            </div>
            <div className="group relative h-44 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/g6.jpg"
                alt="Audience at an SMS Services event"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="20vw"
              />
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-gray-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur animate-float sm:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-white">
              ★
            </span>
            <div>
              <p className="text-xs text-gray-500">Member of the</p>
              <p className="text-sm font-bold text-gray-900">Pathfinder Group</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-60" />
        <div
          aria-hidden
          className="aurora-blob aurora-blob-1 left-1/3 top-0 h-96 w-96 opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center">
                <dt className="text-4xl font-extrabold text-gradient-light sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-emerald-100/70">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Trusted by */}
      <ClientLogos heading="Organizations that trust SMS Services" />

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal variant="left" className="flex">
            <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-3 text-gray-600">
                To be the region's leading provider of intelligent infrastructure —
                transforming the way organizations connect, operate, and collaborate
                through secure technology.
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal variant="right" delay={100} className="flex">
            <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-3 text-gray-600">
                A future where secure and smart technology is the backbone of every
                successful enterprise — fostering growth, efficiency, and connectivity
                for all.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              What drives us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our <span className="text-gradient">core values</span>
            </h2>
            <p className="mt-3 text-gray-600">
              The principles that guide everything we design and deliver.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="flex">
                <SpotlightCard className="flex flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                    <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      {v.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{v.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pathfinder Group */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-12">
          <div
            aria-hidden
            className="aurora-blob aurora-blob-2 -right-10 -top-10 h-64 w-64 opacity-40"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.35), transparent 70%)" }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                Part of something bigger
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                A proud member of the Pathfinder Group
              </h2>
              <p className="mt-4 max-w-xl text-gray-600">
                Backed by the Pathfinder Group's decades of experience across strategy,
                media, and enterprise, SMS Services combines deep institutional strength
                with the agility of a modern technology partner — from the Defence
                Journal to nationwide digital initiatives.
              </p>
              <a
                href={site.parentGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:gap-3"
              >
                Explore the Pathfinder Group <span aria-hidden>→</span>
              </a>
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/g13.jpeg"
                alt="Pathfinder Group ERP launch — Operational Excellence Through Digitalization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
