import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";
import { posts, videos, galleryImages } from "@/data/content";

export const metadata = {
  title: "Media Hub",
  description:
    "Explore our latest videos, gallery highlights, and insightful articles from SMS Services.",
};

function SectionHead({ title, href, cta }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <Link href={href} className="text-sm font-semibold text-brand hover:text-brand-dark">
        {cta} →
      </Link>
    </div>
  );
}

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Media Hub"
        subtitle="Explore our latest videos, gallery highlights, and insightful articles."
      />

      {/* Latest videos */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <SectionHead title="Latest Videos" href="/video" cta="View all videos" />
        <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
          {videos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  fill
                  className="object-cover"
                  sizes="288px"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand">
                    ▶
                  </span>
                </div>
              </div>
              <p className="p-4 text-sm font-semibold text-gray-900">{v.title}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Gallery highlights */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <SectionHead title="Gallery Highlights" href="/gallery" cta="View full gallery" />
        <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-4">
          {galleryImages.slice(0, 8).map((src, i) => (
            <div
              key={src}
              className="relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-xl shadow-sm"
            >
              <Image
                src={src}
                alt={`Gallery highlight ${i + 1}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* From the blog */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <SectionHead title="From the Blog" href="/blog" cta="Read all posts" />
        <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
          {posts.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="group w-80 shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <CTASection
          heading="Follow our journey"
          text="Subscribe on YouTube or reach out to learn more about our work."
          buttonLabel="Contact Us"
        />
      </div>
    </>
  );
}
