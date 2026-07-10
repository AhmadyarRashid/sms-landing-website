import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Aurora from "@/components/Aurora";
import Marquee from "@/components/Marquee";
import SpotlightCard from "@/components/SpotlightCard";
import Counter from "@/components/Counter";
import Transformation from "@/components/Transformation";
import Faq from "@/components/Faq";
import ProductPanel from "@/components/ProductPanel";
import Testimonials from "@/components/Testimonials";
import RotatingWord from "@/components/RotatingWord";

export const metadata = {
  title: "Smart Infrastructure, Security & Cloud",
  description:
    "SMS Services empowers organizations with intelligent infrastructure, secure digital solutions, IoT, cybersecurity and ERP — a member of the Pathfinder Group.",
};

// Real client logos (SVGs verified individually).
const clients = [
  { src: "/images/citadel.svg", name: "Citadel" },
  { src: "/images/providentia.svg", name: "Providentia Books Foundation" },
  { src: "/images/wackenhut.svg", name: "Wackenhut" },
  { src: "/images/ipath.svg", name: "iPath" },
  { src: "/images/vrg.svg", name: "VRG" },
  { src: "/images/pihi.svg", name: "PIHI" },
];

const pillars = [
  {
    title: "Smart Connectivity",
    body: "Seamless, reliable connectivity that keeps your people, devices, and data connected across every location.",
    icon: (
      <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 9.5a15 15 0 0120 0" />
    ),
  },
  {
    title: "Integrated Cloud & IoT Solutions",
    body: "Unified cloud and IoT platforms that bring real-time intelligence to every layer of your operations.",
    icon: (
      <path d="M7 18a4 4 0 01-.5-7.97A6 6 0 0118 9a4.5 4.5 0 011 8.9M9 13l3-3 3 3M12 10v8" />
    ),
  },
  {
    title: "Secure Infrastructure Management",
    body: "End-to-end protection and 24/7 monitoring for your critical digital infrastructure.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L15 10" />
    ),
  },
];

// Domain icon nodes that float above the hero city — presents the full range
// in one visual. `pos` places each node over the dark sky area of the image.
const heroDomains = [
  { label: "IoT", pos: { left: "10%", top: "13%" }, icon: <path d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01M2 9.5a15 15 0 0120 0" /> },
  {
    label: "Buildings",
    pos: { left: "27%", top: "6%" },
    icon: (
      <>
        <path d="M4 21V6a2 2 0 012-2h8a2 2 0 012 2v15M16 10h2a2 2 0 012 2v9" />
        <path d="M7 8h2M7 12h2M7 16h2" />
      </>
    ),
  },
  { label: "Smart Home", pos: { left: "45%", top: "14%" }, icon: <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" /> },
  { label: "Retail", pos: { left: "62%", top: "6%" }, icon: <path d="M4 4h2l2.5 13h9L20 8H7" /> },
  { label: "ERP", pos: { left: "78%", top: "14%" }, icon: <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3zM4 12l8 4.5 8-4.5" /> },
  { label: "Security", pos: { left: "92%", top: "7%" }, icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /> },
];

const heroStats = [
  { value: 7, suffix: "", label: "Solution domains" },
  { value: 24, suffix: "/7", label: "Monitoring" },
  { value: 99.9, suffix: "%", label: "Uptime target", decimals: 1 },
];

const impactStats = [
  { value: 45, suffix: "%", label: "Less unplanned downtime" },
  { value: 30, suffix: "%", label: "Lower energy costs" },
  { value: 24, suffix: "/7", label: "Threat monitoring" },
  { value: 100, suffix: "+", label: "Systems integrated" },
];

const softwareItems = [
  "Custom software development tailored to your workflows",
  "Web & mobile application design and development",
  "ERP and business systems integration",
  "Cloud migration, hosting, and DevOps",
  "API development and third-party system integration",
  "Ongoing support, maintenance, and security updates",
];

const journal = [
  { src: "/images/d1.png", alt: "Defence Journal — Lt Col Abdul Majeed Sehgal" },
  { src: "/images/d2.jpg", alt: "Defence Journal — Davos at Amaanibagh" },
  { src: "/images/d3.png", alt: "Defence Journal — Pakistan Breakfast at Davos 2025" },
];

const whyUs = [
  {
    title: "End-to-end ownership",
    body: "One accountable partner from strategy and design through deployment and 24/7 support.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L15 10" />
    ),
  },
  {
    title: "AI & IoT at the core",
    body: "Real-time sensing and intelligence built into every layer — not bolted on afterwards.",
    icon: <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />,
  },
  {
    title: "Security by design",
    body: "Every solution is engineered to protect your data, assets, and people from day one.",
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  },
  {
    title: "Built to scale",
    body: "Modular architectures that grow with you — from a single site to nationwide operations.",
    icon: <path d="M3 20h18M7 20V10M12 20V4M17 20v-7" />,
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — cinematic, light */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 via-white to-white">
        <Aurora />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-20 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-28 lg:px-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
              A member of the Pathfinder Group
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Making the world</span>
              <span className="mt-1 block">
                <RotatingWord
                  words={["safer.", "smarter.", "greener.", "connected.", "efficient."]}
                  className="text-gradient"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-gray-600">
              SMS Services designs, integrates, and runs intelligent infrastructure —
              from IoT and cybersecurity to building management, manufacturing, and ERP.
              One partner, end to end.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand/40"
              >
                Explore Solutions
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-gray-800 backdrop-blur transition-colors hover:border-brand hover:text-brand"
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Hero stats */}
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-bold text-gray-900">
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up lg:pl-6">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl animate-pulse-glow"
            />
            {/* Smart-city hero image with floating IoT domain nodes */}
            <div className="group relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-brand/20 ring-1 ring-black/10">
              <Image
                src="/images/hero-smart-city.webp"
                alt="A connected smart city — the intelligent infrastructure SMS Services powers across IoT, buildings, homes, retail, ERP and security"
                width={1200}
                height={801}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                priority
              />
              {/* Readability + brand gradients */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/45" />
              <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-brand/25 to-accent-2/20" />

              {/* Floating IoT / domain nodes hovering above the skyline */}
              {heroDomains.map((d, i) => (
                <div
                  key={d.label}
                  className="absolute flex -translate-x-1/2 flex-col items-center text-center animate-float"
                  style={{ left: d.pos.left, top: d.pos.top, animationDelay: `${-i * 0.8}s` }}
                >
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-accent-2 shadow-lg backdrop-blur-md sm:h-10 sm:w-10">
                    <span className="absolute inset-0 rounded-full bg-accent-2/20 animate-pulse-glow" />
                    <svg className="relative h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      {d.icon}
                    </svg>
                  </span>
                  <span className="mt-1 h-4 w-px bg-gradient-to-b from-accent-2/70 to-transparent" />
                  <span className="text-[9px] font-semibold text-white/90 drop-shadow sm:text-[10px]">
                    {d.label}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative flex justify-center pb-8">
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-brand/30 p-1.5">
            <span className="h-2 w-1 rounded-full bg-brand animate-float" />
          </span>
        </div>
      </section>

      {/* 2. Our Clients — marquee */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Trusted by leading organizations
          </p>
          <Marquee className="mt-8">
            {clients.map((c) => (
              <Image
                key={c.src}
                src={c.src}
                alt={c.name}
                width={130}
                height={56}
                className="mx-10 h-12 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </Marquee>
        </div>
      </section>

      {/* 3. Transformation — before vs after */}
      <Transformation />

      {/* 4. Delivering Intelligent Infrastructure — spotlight bento */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            One partner, end to end
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Delivering{" "}
            <span className="text-gradient">Intelligent Infrastructure</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Smart, secure, and connected infrastructure — designed, integrated, and
            managed end to end.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="flex">
              <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                  <svg
                    className="h-8 w-8 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Digitalization cornerstone */}
      <section className="relative overflow-hidden bg-brand-light/40">
        <Aurora grid={false} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left" className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/15 blur-3xl"
              />
              <div className="group relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/g5.jpg"
                  alt="SMS Services leadership discussing digital transformation on-site"
                  width={800}
                  height={450}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
              {/* Floating caption chip */}
              <div className="absolute -bottom-4 -right-3 hidden rounded-xl border border-gray-100 bg-white/90 px-4 py-2 shadow-lg backdrop-blur animate-float sm:block">
                <p className="text-[10px] font-medium text-gray-400">SMS Services</p>
                <p className="text-sm font-bold text-brand">Digital transformation</p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Digitalization is the{" "}
              <span className="text-gradient">cornerstone</span> of every successful
              business.
            </h2>
            <p className="mt-5 text-gray-600">
              We help organizations reimagine how they operate — combining automation,
              data, and connected technology to unlock efficiency, resilience, and
              growth across every department.
            </p>
            <Link
              href="/about"
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:gap-3"
            >
              Learn More <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. Impact stats band */}
      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-60" />
        <div
          aria-hidden
          className="aurora-blob aurora-blob-2 right-1/4 top-0 h-80 w-80 opacity-40"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.5), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Outcomes you can <span className="text-gradient-light">measure</span>
            </h2>
            <p className="mt-4 text-emerald-100/70">
              The kind of impact intelligent infrastructure delivers, day after day.
            </p>
          </Reveal>
          <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impactStats.map((s, i) => (
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

      {/* 7. Software & Digital Solutions */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left" className="order-2 flex justify-center lg:order-1">
            <ProductPanel variant="network" className="w-full max-w-sm" />
          </Reveal>
          <Reveal variant="right" className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              What we build
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Software & Digital Solutions
            </h2>
            <p className="mt-4 text-gray-600">
              From concept to deployment, we design and build digital products that help
              your business run smarter.
            </p>
            <ul className="mt-6 space-y-3">
              {softwareItems.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 70}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-xs text-white shadow-sm shadow-brand/30">
                    ✓
                  </span>
                  <span className="text-sm">{item}</span>
                </Reveal>
              ))}
            </ul>
            <Link
              href="/solutions/erp-solutions"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3 hover:text-brand-dark"
            >
              Explore our solutions <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 8b. Why SMS */}
      <section className="relative overflow-hidden border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Why SMS Services
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The difference is in{" "}
              <span className="text-gradient">how we build</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 100} className="flex">
                <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                    <svg
                      className="h-7 w-7 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {w.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-gray-900">{w.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{w.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Defence Journal */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Defence Journal
            </h2>
            <p className="mt-4 text-gray-600">
              A flagship publication of the Pathfinder Group — insight and analysis on
              defence, strategy, and global affairs.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {journal.map((j, i) => (
              <Reveal
                key={j.src}
                delay={i * 120}
                as="a"
                href="https://www.defencejournal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={j.src}
                    alt={j.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.defencejournal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand"
            >
              Visit Defence Journal <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9b. Testimonials */}
      <Testimonials />

      {/* 10. FAQ */}
      <Faq />
    </>
  );
}
