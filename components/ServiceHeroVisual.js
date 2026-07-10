// Futuristic, code-built hero visual: a glassmorphic core holding the service
// icon, orbiting rings with traveling nodes, floating tech chips, and glow.
// Per-service icon + tags keyed by slug. Pure CSS animation, asset-free.

const ICONS = {
  "smart-safety-security": (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L15 10" />
  ),
  "smart-bms": (
    <>
      <path d="M4 21V6a2 2 0 012-2h8a2 2 0 012 2v15M16 10h2a2 2 0 012 2v9" />
      <path d="M7 8h2M7 12h2M7 16h2M12 8h1M12 12h1M12 16h1" />
    </>
  ),
  "smart-manufacturing": (
    <>
      <path d="M3 21h18M4 21v-9l5 3V12l5 3V9l5 3v6" />
      <path d="M8 6l1-2M13 6l1-2" />
    </>
  ),
  "smart-agriculture": (
    <path d="M12 21c0-5 0-8 4-11M12 21c0-6-3-9-8-10 0 5 3 8 8 8M12 13c0-4 2-6 6-7 0 4-2 6-6 6z" />
  ),
  "cybersecurity-solutions": (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3M12 15v2" />
    </>
  ),
  "retail-intelligence": (
    <>
      <path d="M4 4h2l2.5 13h9L20 8H7" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  "erp-solutions": (
    <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3zM4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5" />
  ),
};

const TAGS = {
  "smart-safety-security": ["AI Vision", "IoT Sensors", "24/7"],
  "smart-bms": ["HVAC", "Energy AI", "Automation"],
  "smart-manufacturing": ["Predictive", "IoT", "Zero downtime"],
  "smart-agriculture": ["GIS", "Soil AI", "Remote sensing"],
  "cybersecurity-solutions": ["SOC 24/7", "Zero-trust", "Threat AI"],
  "retail-intelligence": ["Big Data", "Behavior AI", "Insights"],
  "erp-solutions": ["Finance", "Supply chain", "Automation"],
};

function Chip({ label, className, delay }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full border border-gray-100 bg-white/85 px-3 py-1.5 shadow-lg backdrop-blur animate-float ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand to-accent-2" />
      <span className="text-xs font-semibold text-gray-700">{label}</span>
    </div>
  );
}

export default function ServiceHeroVisual({ slug }) {
  const icon = ICONS[slug] || ICONS["smart-bms"];
  const tags = TAGS[slug] || ["AI", "IoT", "Cloud"];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Grid + glow backdrop */}
      <div className="absolute inset-0 rounded-[2rem] bg-grid mask-fade opacity-70" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl animate-pulse-glow"
      />

      {/* Orbit ring — outer */}
      <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-brand/25">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_12px_2px_rgba(16,185,129,0.6)]" />
      </div>

      {/* Orbit ring — inner (reverse) */}
      <div
        className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-accent-2/30"
        style={{ animationDirection: "reverse", animationDuration: "18s" }}
      >
        <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-2 shadow-[0_0_10px_2px_rgba(45,212,191,0.6)]" />
      </div>

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/60 bg-white/70 shadow-2xl shadow-brand/20 backdrop-blur-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-lg">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </div>
      </div>

      {/* Floating tech chips */}
      <Chip label={tags[0]} className="left-0 top-[14%]" />
      <Chip label={tags[1]} className="right-0 top-[42%]" delay="-2s" />
      <Chip label={tags[2]} className="bottom-[12%] left-[18%]" delay="-4s" />
    </div>
  );
}
