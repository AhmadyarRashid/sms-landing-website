import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How SMS Services collects, uses, and protects your information across our website and the SMS ERP mobile application. A member of the Pathfinder Group.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const LAST_UPDATED = "August 14, 2026";

// Data categories shown as highlight cards near the top of the policy.
const dataCards = [
  {
    title: "Account & profile",
    body: "Name, email, phone number, employer/organization, role, and login credentials used to authenticate you within the SMS ERP application.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </>
    ),
  },
  {
    title: "Operational data",
    body: "Records you create or manage inside the ERP — such as finance, HR, inventory, and workflow entries — stored on behalf of your organization.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16M10 10v10" />
      </>
    ),
  },
  {
    title: "Device & usage",
    body: "Device model, operating system, app version, IP address, and diagnostic logs that help us keep the service secure, stable, and performant.",
    icon: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
];

// Ordered policy sections rendered as an accessible article.
const sections = [
  {
    id: "information-we-collect",
    heading: "1. Information We Collect",
    body: (
      <>
        <p>
          We collect information that you provide directly, information generated
          as you use our services, and limited information from your device. This
          includes:
        </p>
        <ul>
          <li>
            <strong>Information you provide:</strong> account and profile details,
            organization information, support requests, and any content you enter
            into the SMS ERP application.
          </li>
          <li>
            <strong>Information collected automatically:</strong> device
            identifiers, operating system and app version, IP address, and usage
            and diagnostic logs.
          </li>
          <li>
            <strong>Information from your organization:</strong> where the ERP is
            provided to you by your employer, your organization may create your
            account and configure the data you can access.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "2. How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the SMS ERP application and website.</li>
          <li>Authenticate users and secure accounts and organizational data.</li>
          <li>Deliver features such as dashboards, reporting, and workflow automation.</li>
          <li>Respond to enquiries, provide support, and send service notices.</li>
          <li>Monitor performance, diagnose issues, and improve our services.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information, and we do not
          use your operational ERP data for advertising.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "3. How We Share Information",
    body: (
      <>
        <p>
          We share information only as needed to run our services and as permitted
          by law:
        </p>
        <ul>
          <li>
            <strong>Within your organization:</strong> administrators and
            authorized users of your organization's ERP instance.
          </li>
          <li>
            <strong>Service providers:</strong> trusted vendors (for example,
            hosting and infrastructure) who process data on our behalf under
            confidentiality obligations.
          </li>
          <li>
            <strong>Legal and safety:</strong> when required by law, regulation, or
            valid legal process, or to protect the rights and security of our users.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    heading: "4. Data Security",
    body: (
      <p>
        Security is central to everything we build. We apply encryption in transit,
        access controls, monitoring, and industry-standard safeguards to protect
        your information against unauthorized access, alteration, or disclosure. No
        method of transmission or storage is completely secure, but we continuously
        work to protect your data and to respond promptly to any incident.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "5. Data Retention",
    body: (
      <p>
        We retain personal and operational data for as long as your account is
        active or as needed to provide the service, and thereafter as required to
        meet legal, accounting, or reporting obligations. When data is no longer
        required, we delete or anonymize it. Where the ERP is administered by your
        organization, retention may also be governed by your organization's
        policies.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "6. Your Rights & Choices",
    body: (
      <>
        <p>
          Subject to applicable law, you may request to access, correct, export, or
          delete your personal information, and you may withdraw consent where
          processing is based on consent. You can also:
        </p>
        <ul>
          <li>Update your profile and account details within the app.</li>
          <li>Manage device permissions (such as notifications) in your device settings.</li>
          <li>Contact us to exercise any of your rights.</li>
        </ul>
        <p>
          If your account was created by your employer, please direct certain
          requests to your organization's administrator.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "7. Children's Privacy",
    body: (
      <p>
        The SMS ERP application is intended for business use and is not directed to
        children under the age of 13 (or the minimum age required in your
        jurisdiction). We do not knowingly collect personal information from
        children. If you believe a child has provided us information, please contact
        us so we can remove it.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "8. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in
        our services or legal requirements. When we make material changes, we will
        update the “Last updated” date above and, where appropriate, provide
        additional notice. Your continued use of our services after an update
        constitutes acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters. This policy explains what we collect, how we use it, and the choices you have across the SMS Services website and the SMS ERP mobile application."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Intro */}
        <Reveal>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
          <p className="mt-5 text-gray-600">
            This Privacy Policy describes how {site.name} (“we”, “us”, or “our”), a
            member of the Pathfinder Group, handles information in connection with
            our website and our ERP mobile application available on the Google Play
            Store (the “SMS ERP application”). By using our services, you agree to
            the practices described here.
          </p>
        </Reveal>

        {/* Data highlight cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {dataCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="flex">
              <SpotlightCard className="flex flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white shadow-inner">
                  <svg
                    className="h-6 w-6 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{c.body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Policy sections */}
        <div className="mt-16 space-y-12">
          {sections.map((s) => (
            <Reveal key={s.id} as="article" id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {s.heading}
              </h2>
              <div className="prose-privacy mt-4 space-y-4 text-gray-600 [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-gray-800 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
                {s.body}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact block */}
        <Reveal className="mt-16">
          <SpotlightCard className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-3 text-gray-600">
              If you have questions about this Privacy Policy or wish to exercise
              your rights, please reach out:
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
