import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { solutions, getSolution } from "@/data/solutions";
import CTASection from "@/components/CTASection";

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
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <nav className="mb-4 text-sm text-gray-500">
              <Link href="/services" className="hover:text-brand">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{solution.short}</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {solution.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">{solution.tagline}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Request a Consultation <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src={solution.heroImage}
              alt={solution.title}
              width={520}
              height={420}
              className="h-auto w-full max-w-md object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          {solution.introHeading}
        </h2>
        <p className="mt-6 text-gray-600">{solution.intro}</p>
      </section>

      {/* Features */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Capabilities
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              What's included
            </h2>
          </div>
          <div
            className={`mt-12 grid gap-6 ${
              solution.features.length === 2
                ? "sm:grid-cols-2 lg:mx-auto lg:max-w-4xl"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {solution.features.map((f) => (
              <div
                key={f.heading}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
                  <Image
                    src={f.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {f.heading}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={solution.cta.heading}
        text={solution.cta.text}
        buttonLabel="Request a Consultation"
      />

      {/* Other solutions */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Explore other solutions</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {solutions
            .filter((s) => s.slug !== solution.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-brand hover:text-brand"
              >
                {s.short}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
