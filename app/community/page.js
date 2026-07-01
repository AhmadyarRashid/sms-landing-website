import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Community",
  description:
    "SMS Services is committed to making a positive impact beyond business through education, sustainability, and local partnerships.",
};

const initiatives = [
  {
    title: "Tech for Education",
    body: "Providing schools with access to digital tools and training to enhance learning experiences.",
    icon: "🎓",
  },
  {
    title: "Green Initiatives",
    body: "Promoting sustainable practices within our operations and supporting environmental conservation projects.",
    icon: "🌱",
  },
  {
    title: "Local Partnerships",
    body: "Collaborating with local organizations to address community needs and foster economic development.",
    icon: "🤝",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Our Community Involvement"
        subtitle="We are committed to making a positive impact beyond business."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Initiatives
          </h2>
          <p className="mt-3 text-gray-600">
            Building a stronger, more connected community through technology and care.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-3xl">
                {i.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand">{i.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{i.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Partner with us for good"
        text="Interested in a community initiative? We'd love to collaborate."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
