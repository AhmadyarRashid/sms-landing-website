import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { solutions, getSolution, getSolutionMedia } from "@/data/solutions";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Aurora from "@/components/Aurora";
import SpotlightCard from "@/components/SpotlightCard";
import VideoFeature from "@/components/VideoFeature";
import SmartSpaceDemo from "@/components/SmartSpaceDemo";

// Pre-render every solution page at build time.
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.tagline,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: `${solution.title} | SMS Services`,
      description: solution.tagline,
      url: `/solutions/${slug}`,
    },
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const media = getSolutionMedia(slug);
  const metrics = media?.useCases?.map((u) => u.metric).slice(0, 3) || [];

  return (
    <>
      {/* Hero — text + framed service graphic */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/50 via-white to-white">
        <Aurora />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:pt-24 lg:px-8">
          <div className="animate-fade-up">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-gray-500">
              <Link href="/services" className="transition-colors hover:text-brand">
                Services
              </Link>
              <span aria-hidden>/</span>
              <span className="text-gray-700">{solution.short}</span>
            </nav>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">{solution.tagline}</p>

            {metrics.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-3">
                {metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-brand/15 bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand backdrop-blur"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Service graphic in a glassy frame */}
          <Reveal variant="right" className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl animate-pulse-glow"
            />
            <div className="glass gradient-border relative w-full max-w-md rounded-3xl p-8 shadow-2xl shadow-brand/10">
              <Image
                src={solution.heroImage}
                alt={solution.title}
                width={480}
                height={400}
                className="mx-auto h-auto w-full max-w-sm object-contain animate-float"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {solution.introHeading}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-gray-600">{solution.intro}</p>
        </Reveal>
      </section>

      {/* See it in action — building automation scene, or real video once provided */}
      {(media?.videoFile || media?.demo === "space") && (
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal variant="zoom">
            {media.videoFile ? (
              <VideoFeature
                src={media.videoFile}
                poster={solution.heroImage}
                title={media.videoTitle || solution.short}
              />
            ) : (
              <SmartSpaceDemo />
            )}
          </Reveal>
        </section>
      )}

      {/* Use cases — problem → solution */}
      {media?.useCases?.length > 0 && (
        <section className="border-y border-gray-100 bg-gray-50/60">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                Real problems we solve
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                From <span className="text-gray-400">friction</span> to{" "}
                <span className="text-gradient">outcome</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {media.useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 110} className="flex">
                  <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{u.title}</h3>
                      <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        {u.metric}
                      </span>
                    </div>
                    <div className="mt-5 flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                          The challenge
                        </p>
                        <p className="mt-1 text-sm text-gray-500">{u.problem}</p>
                      </div>
                    </div>
                    <div className="my-4 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-white">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                          With SMS
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-800">{u.result}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities — clean numbered cards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Capabilities
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            What's <span className="text-gradient">included</span>
          </h2>
        </Reveal>
        <div
          className={`mt-14 grid gap-6 ${
            solution.features.length === 2
              ? "sm:grid-cols-2 lg:mx-auto lg:max-w-4xl"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {solution.features.map((f, i) => (
            <Reveal key={f.heading} delay={i * 110} className="flex">
              <SpotlightCard className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="text-3xl font-extrabold text-gradient">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.heading}</h3>
                <p className="mt-3 text-sm text-gray-600">{f.body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        heading={solution.cta.heading}
        text={solution.cta.text}
        buttonLabel="Request a Consultation"
      />

      {/* Other solutions */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Explore other solutions
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {solutions
            .filter((s) => s.slug !== solution.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-sm"
              >
                {s.short}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
