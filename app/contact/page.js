import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SMS Services. We'd love to hear from you and discuss how we can help your business.",
};

export default function ContactPage() {
  const { contact } = site;
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Let's discuss how we can help your business."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <Reveal variant="left" className="gradient-border rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill out the form and our team will get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          {/* Map & location */}
          <Reveal variant="right" delay={100} className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <iframe
                title="SMS Services location"
                src={`https://www.google.com/maps?q=${contact.lat},${contact.lng}&z=16&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-brand">📍</span>
                  <dd className="text-gray-600">{contact.address}</dd>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand">📞</span>
                  <dd>
                    <a href={contact.phoneHref} className="text-gray-600 hover:text-brand">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand">✉️</span>
                  <dd>
                    <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-brand">
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={`https://www.google.com/maps?q=${contact.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Get Directions <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
