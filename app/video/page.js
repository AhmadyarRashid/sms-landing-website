import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";
import { videos } from "@/data/content";

export const metadata = {
  title: "Videos",
  description:
    "Watch our latest presentations, webinars, and success stories from SMS Services.",
};

export default function VideoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Videos"
        title="Our Videos"
        subtitle="Watch our latest presentations, webinars, and success stories."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold text-gray-900">{v.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand"
          >
            View all videos on YouTube <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
