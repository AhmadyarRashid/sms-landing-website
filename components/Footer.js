import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { solutions } from "@/data/solutions";

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:bg-brand hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-[#f6f6f6] to-[#ffe6e6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <a href={site.parentGroup} target="_blank" rel="noopener noreferrer">
            <Image
              src={site.footerLogo}
              alt={site.name}
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm text-gray-600">
            {site.tagline} A proud member of the Pathfinder Group.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-gray-600 hover:text-brand">About</Link></li>
            <li><Link href="/gallery" className="text-gray-600 hover:text-brand">Gallery</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-brand">Blog</Link></li>
            <li><Link href="/video" className="text-gray-600 hover:text-brand">Videos</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {solutions.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="text-gray-600 hover:text-brand">
                  {s.short}
                </Link>
              </li>
            ))}
            <li><Link href="/services" className="font-medium text-brand hover:text-brand-dark">All services →</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Get in Touch
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-gray-600">
            <p>{site.contact.address}</p>
            <p>
              <a href={site.contact.phoneHref} className="hover:text-brand">
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                {site.contact.email}
              </a>
            </p>
          </address>
          <div className="mt-4 flex gap-3">
            <SocialIcon href={site.social.facebook} label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>
            </SocialIcon>
            <SocialIcon href={site.social.twitter} label="Twitter/X">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h7l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z"/></svg>
            </SocialIcon>
            <SocialIcon href={site.social.linkedin} label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"/></svg>
            </SocialIcon>
            <SocialIcon href={site.social.instagram} label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 01-1.4-.9 3.7 3.7 0 01-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.1a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.2-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>A member of the Pathfinder Group.</p>
        </div>
      </div>
    </footer>
  );
}
