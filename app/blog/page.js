import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { posts } from "@/data/content";

export const metadata = {
  title: "Blog",
  description: "The latest articles and updates from the SMS Services team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights & News"
        subtitle="The latest articles and updates from the SMS Services team."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-gray-600">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-brand">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        heading="Want to know more?"
        text="Reach out to our team for deeper insights tailored to your business."
        buttonLabel="Contact Us"
      />
    </>
  );
}
