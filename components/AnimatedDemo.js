// Original, code-built animated "demo" that shows a service's system working as
// a live pipeline: Capture → Analyze → Act, with data flowing between nodes and
// each node pulsing in sequence. Honest, on-brand, and asset-free.

// Per-service pipeline (keyed by slug) — falls back to a generic flow.
const FLOWS = {
  "smart-safety-security": {
    steps: ["Detect", "Analyze", "Respond"],
    output: "Security alerted in under 2 seconds",
  },
  "smart-bms": {
    steps: ["Sense", "Optimize", "Control"],
    output: "Energy tuned automatically, comfort maintained",
  },
  "smart-manufacturing": {
    steps: ["Monitor", "Predict", "Prevent"],
    output: "Failures caught days before they happen",
  },
  "smart-agriculture": {
    steps: ["Measure", "Analyze", "Act"],
    output: "Water and inputs applied with precision",
  },
  "cybersecurity-solutions": {
    steps: ["Watch", "Detect", "Contain"],
    output: "Threats detected and contained 24/7",
  },
  "retail-intelligence": {
    steps: ["Collect", "Model", "Recommend"],
    output: "Smarter pricing and stocking in real time",
  },
  "erp-solutions": {
    steps: ["Integrate", "Automate", "Report"],
    output: "One live source of truth across teams",
  },
};

// One icon per pipeline position: capture → process → act.
const STEP_ICONS = [
  // Capture (signal / sensor)
  <path key="i" d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01M2 9.5a15 15 0 0120 0" />,
  // Analyze (chip / cpu)
  <>
    <rect key="r" x="7" y="7" width="10" height="10" rx="2" />
    <path key="p" d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
  </>,
  // Act (bolt)
  <path key="b" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
];

export default function AnimatedDemo({ slug }) {
  const flow = FLOWS[slug] || {
    steps: ["Capture", "Analyze", "Act"],
    output: "Turning live data into action",
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 shadow-2xl shadow-brand/10 backdrop-blur-xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs font-medium text-gray-500">Live pipeline</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" /> Live
        </span>
      </div>

      {/* Pipeline */}
      <div className="relative px-6 py-14 sm:px-10">
        {/* Connector line with flowing dots */}
        <div className="absolute left-10 right-10 top-1/2 hidden -translate-y-8 sm:block">
          <div className="relative h-px bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20">
            <span className="flow-dot absolute -top-1 h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_2px_rgba(16,185,129,0.6)]" />
            <span
              className="flow-dot absolute -top-1 h-2 w-2 rounded-full bg-accent-2 shadow-[0_0_10px_2px_rgba(45,212,191,0.6)]"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>

        <div className="relative grid grid-cols-3 gap-3">
          {flow.steps.map((label, i) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span
                className="node-active flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-white text-brand ring-1 ring-brand/10"
                style={{ animationDelay: `${i}s` }}
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {STEP_ICONS[i]}
                </svg>
              </span>
              <span className="mt-3 text-sm font-semibold text-gray-800">{label}</span>
              <span className="mt-0.5 text-[11px] text-gray-400">Step {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Output line */}
      <div className="flex items-center gap-3 border-t border-gray-100 bg-gray-50/60 px-6 py-4">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-white">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-sm font-medium text-gray-700">{flow.output}</p>
      </div>
    </div>
  );
}
