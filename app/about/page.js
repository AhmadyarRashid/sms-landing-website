import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us",
  description:
    "SMS Services — a proud member of the Pathfinder Group — provides secure, intelligent, and scalable digital infrastructure.",
};

const values = [
  {
    title: "Integrity",
    body: "We operate with transparency and honesty, building trust with our clients and partners.",
  },
  {
    title: "Innovation",
    body: "We relentlessly pursue new ideas and technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Security",
    body: "We prioritize the protection of data and infrastructure in everything we build.",
  },
  {
    title: "Excellence",
    body: "We are committed to delivering the highest quality of service and results for our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About SMS Services"
        subtitle="Driving digital transformation through intelligent infrastructure and secure solutions."
      />

      {/* Our story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Story</h2>
          <p className="mt-5 text-gray-600">
            As a proud member of the Pathfinder Group, SMS Services was founded to meet
            the critical demand for secure, intelligent, and scalable digital
            infrastructure. We began with a mission to provide reliable communication
            solutions that empower organizations to connect seamlessly with their
            stakeholders.
          </p>
          <p className="mt-4 text-gray-600">
            Over the years, we have evolved into a full-service technology partner,
            specializing in end-to-end digital connectivity, IoT integration, and
            custom software development. Our journey is one of continuous innovation,
            driven by a commitment to helping our clients navigate the complexities of
            the digital age with confidence and security.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/Smart Safety and Security Solutions.png"
            alt="SMS Services infrastructure and solutions"
            width={640}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-light/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To be the region's leading provider of intelligent communication systems —
              transforming the way organizations connect and collaborate through
              technology.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To build a future where secure and smart technology is the backbone of
              every successful enterprise — fostering growth, efficiency, and
              connectivity for all.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Core Values</h2>
          <p className="mt-3 text-gray-600">
            The principles that guide everything we design and deliver.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand">{v.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Let's work together"
        text="Partner with a team that puts security and intelligence at the core."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
