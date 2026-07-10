"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "What exactly does SMS Services do?",
    a: "We design, integrate, and manage intelligent infrastructure — smart safety & security, building management, manufacturing, agriculture, cybersecurity, retail intelligence, and ERP. One partner, end to end.",
  },
  {
    q: "How soon will we see results?",
    a: "Most clients see measurable wins within the first few months — reduced downtime, lower energy costs, faster threat response — because we prioritize quick, high-impact deployments before scaling.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes. Our solutions are built around open standards and custom APIs, so they connect with your current hardware, software, and legacy systems rather than replacing everything.",
  },
  {
    q: "Do you provide support after go-live?",
    a: "Absolutely. Every deployment includes 24/7 monitoring, maintenance, and security updates, plus ongoing optimization as your operations grow and change.",
  },
  {
    q: "Which industries do you serve?",
    a: "From commercial buildings and manufacturing to agriculture, retail, and public safety — our modular approach adapts to each sector's specific demands.",
  },
];

function Item({ q, a, open, onToggle, i }) {
  return (
    <Reveal
      delay={i * 70}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-gray-900">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-gray-600">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Questions
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently <span className="text-gradient">asked</span>
        </h2>
      </Reveal>
      <div className="mt-12 space-y-4">
        {faqs.map((f, i) => (
          <Item
            key={f.q}
            i={i}
            q={f.q}
            a={f.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
