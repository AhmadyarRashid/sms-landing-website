"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * Interactive "before vs after" storytelling block.
 * A toggle flips every row between the pain of the old way and the outcome
 * of working with SMS — so visitors can *see* and *feel* the change.
 */
const rows = [
  {
    area: "Safety & Security",
    icon: "🛡️",
    before: "Blind spots, delayed alerts, guards reacting after the incident.",
    after: "AI cameras and IoT sensors flag threats in real time — you act before it escalates.",
    metric: "24/7",
    metricLabel: "situational awareness",
  },
  {
    area: "Buildings & Energy",
    icon: "🏢",
    before: "Lights and HVAC running all night. Energy bills you can't explain.",
    after: "A smart BMS tunes every system automatically — comfort up, waste down.",
    metric: "−30%",
    metricLabel: "energy costs",
  },
  {
    area: "Operations",
    icon: "⚙️",
    before: "Machines fail without warning. Production stops. Firefighting all day.",
    after: "Predictive analytics warn you before breakdowns — downtime becomes rare.",
    metric: "−45%",
    metricLabel: "unplanned downtime",
  },
  {
    area: "Decisions",
    icon: "📊",
    before: "Data scattered across spreadsheets. Gut-feel calls, slow reporting.",
    after: "One live dashboard turns raw data into decisions you can trust in seconds.",
    metric: "Real-time",
    metricLabel: "business visibility",
  },
];

export default function Transformation() {
  const [after, setAfter] = useState(true);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark mask-fade opacity-60" />
      <div
        aria-hidden
        className="aurora-blob aurora-blob-1 left-1/4 top-0 h-96 w-96 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.55), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">
            See the difference
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Feel how your world changes{" "}
            <span className="text-gradient-light">with SMS</span>
          </h2>
          <p className="mt-4 text-emerald-100/70">
            Slide between the old way and the SMS way — and watch the everyday friction
            turn into measurable wins.
          </p>
        </Reveal>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            <span
              className="absolute inset-y-1 w-1/2 rounded-full bg-gradient-to-r from-brand to-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: after ? "translateX(100%)" : "translateX(0)" }}
              aria-hidden
            />
            <button
              type="button"
              onClick={() => setAfter(false)}
              className={`relative z-10 w-36 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                after ? "text-gray-300" : "text-white"
              }`}
            >
              Before SMS
            </button>
            <button
              type="button"
              onClick={() => setAfter(true)}
              className={`relative z-10 w-36 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                after ? "text-white" : "text-gray-300"
              }`}
            >
              With SMS
            </button>
          </div>
        </div>

        {/* Rows */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {rows.map((r, i) => (
            <Reveal
              key={r.area}
              delay={i * 90}
              className={`gradient-border relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 ${
                after
                  ? "border-brand/30 bg-white/[0.06] glow-ring"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.icon}</span>
                  <h3 className="text-lg font-semibold">{r.area}</h3>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-500 ${
                    after
                      ? "bg-brand/20 text-accent-2 opacity-100"
                      : "bg-white/5 text-gray-500 opacity-40"
                  }`}
                >
                  {after ? r.metric : "—"}
                </span>
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed transition-all duration-500 ${
                  after ? "text-emerald-100/90" : "text-gray-400"
                }`}
              >
                {after ? r.after : r.before}
              </p>

              <p
                className={`mt-3 text-xs font-medium uppercase tracking-wider transition-all duration-500 ${
                  after ? "text-accent-2 opacity-100" : "text-gray-600 opacity-0"
                }`}
              >
                {after ? r.metricLabel : ""}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Illustrative outcomes based on typical SMS deployments.
        </p>
      </div>
    </section>
  );
}
