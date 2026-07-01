import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/data/solutions";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

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

const stats = [
  { value: "2,245,341", label: "Members" },
  { value: "46,328", label: "Employees" },
  { value: "828,867", label: "Clients" },
  { value: "1,926,436", label: "Payments" },
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

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-light to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="animate-fade-up">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="text-brand">Secure.</span>{" "}
              <span className="text-brand">Smart.</span>{" "}
              <span className="text-brand">Cloud.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Driving digital transformation through intelligent infrastructure and
              secure solutions — from IoT and cybersecurity to building management,
              manufacturing, and ERP.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
              >
                Get Started <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <Image
              src="/images/Illustration (1).svg"
              alt="Intelligent infrastructure and software development"
              width={640}
              height={560}
              className="mx-auto h-auto w-full max-w-lg animate-float"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Our Clients */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal
            as="h2"
            className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400"
          >
            Our Clients
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clients.map((c, i) => (
              <Reveal key={c.src} variant="zoom" delay={i * 80}>
                <Image
                  src={c.src}
                  alt={c.name}
                  width={130}
                  height={56}
                  className="h-12 w-auto object-contain grayscale transition duration-300 hover:scale-105 hover:grayscale-0"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Delivering Intelligent Infrastructure */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Delivering Intelligent Infrastructure
          </h2>
          <p className="mt-4 text-gray-600">
            One partner for smart, secure, and connected infrastructure — designed,
            integrated, and managed end to end.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light">
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
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Digitalization cornerstone */}
      <section className="bg-brand-light/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left" className="flex justify-center">
            <Image
              src="/images/Frame 35.svg"
              alt="Digital onboarding illustration"
              width={420}
              height={420}
              className="h-auto w-full max-w-sm"
            />
          </Reveal>
          <Reveal variant="right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              At SMS Services, we believe digitalization is the cornerstone of every
              successful business.
            </h2>
            <p className="mt-5 text-gray-600">
              We help organizations reimagine how they operate — combining automation,
              data, and connected technology to unlock efficiency, resilience, and
              growth across every department.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-dark hover:gap-3"
            >
              Learn More <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. Stats — Helping our businesses reinvent itself */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal variant="left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Helping our businesses <span className="text-brand">reinvent itself</span>
          </h2>
          <p className="mt-4 max-w-md text-gray-600">
            To be the region&apos;s leading provider of intelligent communication
            systems — transforming the way organizations connect and collaborate
            through technology.
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="zoom" delay={i * 100} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 17a6 6 0 1112 0v1H2v-1z" />
                </svg>
              </span>
              <div>
                <dd className="text-2xl font-extrabold text-gray-900">{s.value}</dd>
                <dt className="text-sm text-gray-500">{s.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* 6. Software & Digital Solutions */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left" className="order-2 flex justify-center lg:order-1">
            <Image
              src="/images/pana.svg"
              alt="Software and digital solutions"
              width={420}
              height={420}
              className="h-auto w-full max-w-sm"
            />
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
              {softwareItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs text-white">
                    ✓
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
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

      {/* Services quick grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            End-to-end smart solutions
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100} className="flex">
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={s.features[0].icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 group-hover:text-brand">
                  {s.short}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.tagline}</p>
                <span className="mt-4 text-sm font-semibold text-brand">Learn more →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Defence Journal */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Defence Journal
            </h2>
            <p className="mt-4 text-gray-600">
              A flagship publication of the Pathfinder Group — insight and analysis on
              defence, strategy, and global affairs.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {journal.map((j, i) => (
              <Reveal
                key={j.src}
                delay={i * 120}
                as="a"
                href="https://www.defencejournal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={j.src}
                    alt={j.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.defencejournal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand"
            >
              Visit Defence Journal <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's build something intelligent"
        text="Tell us about your goals and our team will design a solution that fits."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
