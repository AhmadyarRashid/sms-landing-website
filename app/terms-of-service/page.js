import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { site } from "@/data/site";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the SMS Services website and the SMS ERP mobile application. A member of the Pathfinder Group.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const LAST_UPDATED = "August 14, 2026";

// Ordered terms sections rendered as an accessible article.
const sections = [
  {
    id: "acceptance",
    heading: "1. Acceptance of Terms",
    body: (
      <p>
        These Terms of Service (“Terms”) govern your access to and use of the{" "}
        {site.name} website and the SMS ERP mobile application available on the
        Google Play Store (collectively, the “Services”). By accessing or using
        the Services, you agree to be bound by these Terms. If you do not agree,
        please do not use the Services.
      </p>
    ),
  },
  {
    id: "use-of-services",
    heading: "2. Use of the Services",
    body: (
      <>
        <p>
          You may use the Services only in compliance with these Terms and all
          applicable laws. You agree to:
        </p>
        <ul>
          <li>Provide accurate account information and keep it up to date.</li>
          <li>Maintain the confidentiality of your login credentials.</li>
          <li>Use the Services only for lawful business purposes.</li>
          <li>Not interfere with, disrupt, or attempt to gain unauthorized access to the Services.</li>
        </ul>
        <p>
          Where the SMS ERP application is provided to you by your employer, your
          organization may set additional rules governing your use.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    heading: "3. Accounts & Responsibilities",
    body: (
      <p>
        You are responsible for all activity that occurs under your account. You
        must notify us promptly of any unauthorized use or security breach. We may
        suspend or terminate accounts that violate these Terms or that pose a
        security or legal risk to us, our users, or third parties.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    heading: "4. Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Copy, modify, reverse engineer, or resell the Services without authorization.</li>
          <li>Upload malicious code or content that infringes the rights of others.</li>
          <li>Use the Services to store or transmit unlawful, harmful, or fraudulent material.</li>
          <li>Attempt to access data or accounts that do not belong to you.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "5. Intellectual Property",
    body: (
      <p>
        The Services, including all software, design, text, and branding, are owned
        by {site.name} or its licensors and are protected by intellectual property
        laws. We grant you a limited, non-exclusive, non-transferable right to use
        the Services for their intended business purpose. Data you enter into the
        SMS ERP application remains owned by you or your organization.
      </p>
    ),
  },
  {
    id: "availability",
    heading: "6. Service Availability",
    body: (
      <p>
        We strive to keep the Services available and reliable, but we do not
        guarantee uninterrupted or error-free operation. We may update, modify, or
        temporarily suspend the Services for maintenance, improvements, or reasons
        beyond our reasonable control.
      </p>
    ),
  },
  {
    id: "disclaimer",
    heading: "7. Disclaimer & Limitation of Liability",
    body: (
      <p>
        The Services are provided on an “as is” and “as available” basis without
        warranties of any kind, to the fullest extent permitted by law. {site.name}{" "}
        shall not be liable for any indirect, incidental, or consequential damages
        arising from your use of, or inability to use, the Services. Nothing in
        these Terms limits liability that cannot be excluded under applicable law.
      </p>
    ),
  },
  {
    id: "termination",
    heading: "8. Termination",
    body: (
      <p>
        You may stop using the Services at any time. We may suspend or terminate
        your access if you breach these Terms or where required by law. Upon
        termination, the rights granted to you under these Terms will end, though
        certain provisions — such as intellectual property and liability — will
        survive.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "9. Changes to These Terms",
    body: (
      <p>
        We may revise these Terms from time to time. When we make material changes,
        we will update the “Last updated” date above and, where appropriate, provide
        additional notice. Your continued use of the Services after an update
        constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "10. Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the Islamic Republic of Pakistan,
        without regard to its conflict-of-law principles. Any disputes arising from
        these Terms or the Services shall be subject to the exclusive jurisdiction
        of the courts of Islamabad, Pakistan.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="These terms govern your use of the SMS Services website and the SMS ERP mobile application. Please read them carefully before using our services."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Intro */}
        <Reveal>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
          <p className="mt-5 text-gray-600">
            Welcome to {site.name} (“we”, “us”, or “our”), a member of the
            Pathfinder Group. These Terms of Service form a legal agreement between
            you and {site.name} regarding your use of our website and our ERP mobile
            application. For details on how we handle your data, please also review
            our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-brand transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Reveal>

        {/* Terms sections */}
        <div className="mt-16 space-y-12">
          {sections.map((s) => (
            <Reveal key={s.id} as="article" id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-gray-600 [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-gray-800 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
                {s.body}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact block */}
        <Reveal className="mt-16">
          <SpotlightCard className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Questions?</h2>
            <p className="mt-3 text-gray-600">
              If you have questions about these Terms, please reach out:
            </p>
            <address className="mt-5 space-y-2 text-sm not-italic text-gray-600">
              <p>{site.name}</p>
              <p>{site.contact.address}</p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-medium text-brand transition-colors hover:text-accent"
                >
                  {site.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-brand"
                >
                  {site.contact.phone}
                </a>
              </p>
            </address>
            <Link
              href="/contact"
              className="btn-shine mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:gap-3"
            >
              Get in touch <span aria-hidden>→</span>
            </Link>
          </SpotlightCard>
        </Reveal>
      </section>
    </>
  );
}
