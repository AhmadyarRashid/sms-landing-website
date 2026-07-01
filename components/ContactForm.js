"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Our Services",
  "Technical Support",
  "Partnership",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is wired up yet — show a confirmation and reset.
    // Hook this up to an email service or API route when ready.
    setSent(true);
    e.target.reset();
  }

  const field =
    "mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {sent && (
        <div className="rounded-lg border border-brand/30 bg-brand-light px-4 py-3 text-sm text-brand-dark">
          Thanks for reaching out! We&apos;ve received your message and will get back
          to you shortly.
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name <span className="text-brand">*</span>
        </label>
        <input id="name" name="name" type="text" required className={field} placeholder="Your name" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-brand">*</span>
          </label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject <span className="text-brand">*</span>
        </label>
        <select id="subject" name="subject" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a subject
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message <span className="text-brand">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required className={field} placeholder="How can we help?" />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:w-auto"
      >
        Send Message <span aria-hidden>✈</span>
      </button>
    </form>
  );
}
