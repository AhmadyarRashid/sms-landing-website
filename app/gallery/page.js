import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { galleryImages } from "@/data/content";

export const metadata = {
  title: "Gallery",
  description: "A glimpse into our projects, events, and team at SMS Services.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our Gallery"
        subtitle="A glimpse into our projects, events, and team."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
            >
              <Image
                src={src}
                alt={`SMS Services gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="See our work in action"
        text="Get in touch to learn how we can bring the same results to your organization."
        buttonLabel="Contact Us"
      />
    </>
  );
}
