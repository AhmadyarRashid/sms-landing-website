import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { videos, galleryImages } from "@/data/content";

export const metadata = {
  title: "Media Hub",
  description:
    "Explore our latest videos, gallery highlights, and insightful articles from SMS Services.",
};

function SectionHead({ eyebrow, title, href, cta }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <Reveal>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      {href && (
        <Link
          href={href}
          className="group inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all hover:gap-2 hover:text-brand-dark"
        >
          {cta}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}

function PlayBadge({ size = "lg" }) {
  const dim = size === "lg" ? "h-16 w-16" : "h-12 w-12";
  return (
    <span className="relative flex items-center justify-center">
      <span className={`absolute ${dim} rounded-full bg-white/30 animate-pulse-glow`} />
      <span
        className={`relative flex ${dim} items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-transform duration-300 group-hover:scale-110`}
      >
        <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}

// Bento spans for the gallery mosaic — varied sizes for a dynamic layout.
const mosaicSpans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
];

export default function MediaPage() {
  const [featured, ...restVideos] = videos;
  const mosaic = galleryImages.slice(0, 8);

  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Media Hub"
        subtitle="Explore our latest videos, gallery highlights, and insightful articles from the SMS Services team."
      />

      {/* Featured video */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Watch"
          title="Featured & Latest Videos"
          href="/video"
          cta="View all videos"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Big featured */}
          <Reveal variant="left" className="lg:col-span-2">
            <a
              href={`https://www.youtube.com/watch?v=${featured.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayBadge size="lg" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    ● Featured
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {featured.title}
                  </h3>
                </div>
              </div>
            </a>
          </Reveal>

          {/* Stacked list of other videos */}
          <div className="flex flex-col gap-4">
            {restVideos.map((v, i) => (
              <Reveal key={v.id} variant="right" delay={i * 90}>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="128px"
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <PlayBadge size="sm" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      Video
                    </p>
                    <h4 className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-brand">
                      {v.title}
                    </h4>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery mosaic */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Gallery"
          title="Moments & Milestones"
          href="/gallery"
          cta="View full gallery"
        />
        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:grid-cols-4">
          {mosaic.map((src, i) => (
            <Reveal
              key={src}
              variant="zoom"
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${mosaicSpans[i] || ""}`}
            >
              <Image
                src={src}
                alt={`Gallery highlight ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">SMS Services</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
