import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/data/solutions";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Services",
  description:
    "Explore SMS Services' full range of smart solutions: safety & security, building management, manufacturing, agriculture, cybersecurity, retail intelligence and ERP.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Smart Solutions for Every Sector"
        subtitle="From intelligent security to enterprise ERP, we design and integrate technology that works the way you do."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100} className="flex">
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lg"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden bg-brand-light/60 p-8">
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    width={220}
                    height={160}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand">
                    {s.short}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-gray-600">{s.tagline}</p>
                  <span className="mt-4 text-sm font-semibold text-brand">
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
