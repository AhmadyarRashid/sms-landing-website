import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
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
        subtitle="A glimpse into our projects, events, and the team behind SMS Services."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
