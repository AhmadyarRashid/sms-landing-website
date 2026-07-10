import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Counter from "@/components/Counter";

export const metadata = {
  title: "Community",
  description:
    "Beyond technology — SMS Services invests in people, education, sustainability, and local partnerships to build stronger, smarter communities.",
};

const focusAreas = [
  {
    title: "Digital Education",
    body: "Equipping schools and students with digital tools, connectivity, and training so the next generation grows up fluent in technology.",
    icon: <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5M22 10v6" />,
  },
  {
    title: "Sustainability & Green Tech",
    body: "Reducing our footprint and helping clients cut energy waste through smart, efficient infrastructure and conservation projects.",
    icon: <path d="M12 21c0-5 0-8 4-11M12 21c0-6-3-9-8-10 0 5 3 8 8 8M12 13c0-4 2-6 6-7 0 4-2 6-6 6z" />,
  },
  {
    title: "Local Partnerships",
    body: "Collaborating with local organizations and institutions to solve real community needs and drive inclusive economic growth.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M15 20c0-2 .5-3.5 1.5-4.5" />
      </>
    ),
  },
  {
    title: "Youth & Innovation",
    body: "Mentoring young talent through internships, workshops, and tech events — turning curiosity into careers.",
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.5 1 .5 1.6h6c0-.6 0-1.2.5-1.6A6 6 0 0012 3z" />,
  },
];

const impact = [
  { value: 2000, suffix: "+", label: "Students empowered" },
  { value: 15, suffix: "+", label: "Community partners" },
  { value: 30, suffix: "+", label: "Green initiatives" },
  { value: 5000, suffix: "+", label: "Volunteer hours" },
];

const moments = ["/images/g6.jpg", "/images/g1.jpg", "/images/g5.jpg", "/images/g4.jpg"];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Technology with a purpose"
        subtitle="We measure success not only by what we build, but by the communities we uplift along the way."
      />

      {/* Purpose — text + real photo */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Why we give back
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Progress means bringing{" "}
            <span className="text-gradient">everyone forward</span>
          </h2>
          <p className="mt-5 text-gray-600">
            As a member of the Pathfinder Group, we believe the same intelligence that
            powers smart infrastructure should also strengthen the communities around
            it. That's why we invest in education, sustainability, and local
            partnerships — not as an afterthought, but as part of who we are.
          </p>
          <p className="mt-4 text-gray-600">
            From equipping classrooms with digital tools to mentoring the engineers of
            tomorrow, our goal is simple: leave every community we touch smarter,
            greener, and more connected.
          </p>
        </Reveal>
        <Reveal variant="right" className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="group relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/g6.jpg"
              alt="SMS Services community engagement event"
              width={720}
              height={520}
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* Focus areas */}
      <section className="relative overflow-hidden border-y border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Where we focus
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our areas of <span className="text-gradient">impact</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Four commitments that guide how we invest our time, talent, and technology.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100} className="flex">
                <SpotlightCard className="flex flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                    <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{item.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-60" />
        <div
          aria-hidden
          className="aurora-blob aurora-blob-1 left-1/3 top-0 h-96 w-96 opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Impact we're <span className="text-gradient-light">proud of</span>
            </h2>
            <p className="mt-3 text-emerald-100/70">
              Small steps, taken consistently, add up to real change.
            </p>
          </Reveal>
          <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impact.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center">
                <dt className="text-4xl font-extrabold text-gradient-light sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-emerald-100/70">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-8 text-center text-xs text-gray-500">
            Illustrative figures based on our ongoing community programs.
          </p>
        </div>
      </section>

      {/* Community moments */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            In the field
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Community <span className="text-gradient">moments</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {moments.map((src, i) => (
            <Reveal
              key={src}
              variant="zoom"
              delay={i * 90}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
            >
              <Image
                src={src}
                alt={`SMS Services community moment ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Get involved */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center shadow-2xl sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-50" />
          <div
            aria-hidden
            className="aurora-blob aurora-blob-2 -right-10 -top-10 h-72 w-72 opacity-40"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.5), transparent 70%)" }}
          />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a cause we should champion?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-emerald-100/80">
              We're always looking for schools, non-profits, and local partners to
              collaborate with. Let's build something meaningful together.
            </p>
            <Link
              href="/contact"
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-dark shadow-lg transition-transform duration-300 hover:scale-[1.04]"
            >
              Partner with us <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
