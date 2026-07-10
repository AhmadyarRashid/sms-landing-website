import Counter from "@/components/Counter";

/**
 * Realistic, animated "product UI" mockups that convey real capability far
 * better than flat illustrations. Three variants share the same window chrome:
 *   - "command"   : live security / operations control center (hero)
 *   - "analytics" : business analytics dashboard
 *   - "network"   : IoT device network / connectivity map
 */

function WindowChrome({ title, children }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 shadow-2xl shadow-brand/10 backdrop-blur-xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs font-medium text-gray-500">{title}</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" /> Live
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Kpi({ label, value, suffix, decimals, accent = "text-gray-900" }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-sm">
      <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className={`mt-1 text-xl font-bold ${accent}`}>
        <Counter value={value} suffix={suffix} decimals={decimals || 0} />
      </p>
    </div>
  );
}

// Deterministic bar heights (no Math.random — keeps SSR stable) with a CSS
// grow animation staggered per bar.
const BARS = [42, 68, 55, 80, 61, 92, 73, 58, 84, 66, 95, 70];

function MiniChart() {
  return (
    <div className="flex h-24 items-end gap-1.5">
      {BARS.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-brand to-accent-2"
          style={{
            height: `${h}%`,
            animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both`,
            animationDelay: `${i * 60}ms`,
            opacity: 0.55 + (h / 100) * 0.45,
          }}
        />
      ))}
    </div>
  );
}

function StatusRow({ label, state, tone = "ok" }) {
  const dot =
    tone === "ok"
      ? "bg-emerald-500"
      : tone === "warn"
      ? "bg-amber-500"
      : "bg-brand";
  return (
    <div className="flex items-center justify-between rounded-lg px-1 py-2">
      <div className="flex items-center gap-2.5">
        <span className={`h-2 w-2 rounded-full ${dot} ${tone !== "ok" ? "animate-pulse-glow" : ""}`} />
        <span className="text-xs font-medium text-gray-700">{label}</span>
      </div>
      <span className="text-[11px] font-semibold text-gray-400">{state}</span>
    </div>
  );
}

function CommandBody() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Devices online" value={1248} accent="text-brand" />
        <Kpi label="Active threats" value={0} accent="text-emerald-600" />
        <Kpi label="Uptime" value={99.9} suffix="%" decimals={1} />
      </div>
      <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-700">Live activity</p>
          <p className="text-[10px] text-gray-400">last 12 min</p>
        </div>
        <div className="mt-3">
          <MiniChart />
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
        <StatusRow label="Building A — Perimeter" state="Secure" tone="ok" />
        <StatusRow label="HVAC & Lighting" state="Optimized" tone="ok" />
        <StatusRow label="Sensor node 12" state="Syncing" tone="warn" />
        <StatusRow label="Core network" state="Stable" tone="ok" />
      </div>
    </>
  );
}

function AnalyticsBody() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
            Operational efficiency
          </p>
          <p className="mt-1 text-3xl font-bold text-brand">
            <Counter value={94} suffix="%" />
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          ▲ 18% MoM
        </span>
      </div>
      <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <MiniChart />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <Kpi label="Downtime" value={45} suffix="%↓" accent="text-brand" />
        <Kpi label="Energy" value={30} suffix="%↓" accent="text-brand" />
        <Kpi label="Reports" value={100} suffix="+" />
      </div>
    </>
  );
}

function NetworkBody() {
  // Each node carries its own line icon so the mockup reads like a real device map.
  const nodes = [
    {
      label: "Gateway",
      tone: "ok",
      icon: <path d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01M2 9.5a15 15 0 0120 0" />,
    },
    {
      label: "Cameras",
      tone: "ok",
      icon: (
        <>
          <path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14" />
          <rect x="3" y="7" width="12" height="10" rx="2" />
        </>
      ),
    },
    {
      label: "Sensors",
      tone: "ok",
      icon: (
        <>
          <circle cx="12" cy="12" r="2" />
          <path d="M7.5 7.5a6 6 0 000 9M16.5 7.5a6 6 0 010 9M4.7 4.7a10 10 0 000 14.6M19.3 4.7a10 10 0 010 14.6" />
        </>
      ),
    },
    {
      label: "HVAC",
      tone: "ok",
      icon: (
        <>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 9.5c1-3 0-5-1.5-6.5C13 3.5 15 5 15 7.5M12 14.5c-1 3 0 5 1.5 6.5C11 20.5 9 19 9 16.5M9.5 12c-3-1-5 0-6.5-1.5C3.5 13 5 15 7.5 15M14.5 12c3 1 5 0 6.5 1.5C20.5 11 19 9 16.5 9" />
        </>
      ),
    },
    {
      label: "Access",
      tone: "warn",
      icon: (
        <>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </>
      ),
    },
    {
      label: "Meters",
      tone: "ok",
      icon: <path d="M12 14l3-3M4.5 18a9 9 0 1115 0M12 14a2 2 0 100-4 2 2 0 000 4z" />,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className="relative flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
            style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both", animationDelay: `${i * 80}ms` }}
          >
            {/* Status badge in the corner */}
            <span
              className={`absolute right-2 top-2 h-2 w-2 rounded-full ${
                n.tone === "ok" ? "bg-emerald-500" : "bg-amber-500 animate-pulse-glow"
              }`}
            />
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-light to-white text-brand">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {n.icon}
              </svg>
            </span>
            <span className="text-[11px] font-medium text-gray-600">{n.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Kpi label="Connected devices" value={1248} accent="text-brand" />
        <Kpi label="Data points / sec" value={8600} accent="text-gray-900" />
      </div>
    </>
  );
}

const TITLES = {
  command: "SMS Control Center",
  analytics: "Insights Dashboard",
  network: "IoT Device Network",
};

export default function ProductPanel({ variant = "command", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow behind the panel */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl animate-pulse-glow"
      />
      <div className="animate-float-slow">
        <WindowChrome title={TITLES[variant]}>
          {variant === "command" && <CommandBody />}
          {variant === "analytics" && <AnalyticsBody />}
          {variant === "network" && <NetworkBody />}
        </WindowChrome>
      </div>

      {/* Floating accent chips for depth */}
      <div className="absolute -right-4 -top-4 hidden rounded-xl border border-gray-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur animate-float sm:block">
        <p className="text-[10px] font-medium text-gray-400">Response time</p>
        <p className="text-sm font-bold text-brand">&lt; 2s</p>
      </div>
      <div
        className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl border border-gray-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur animate-float sm:flex"
        style={{ animationDelay: "-3s" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">✓</span>
        <div>
          <p className="text-[10px] font-medium text-gray-400">System status</p>
          <p className="text-xs font-bold text-gray-800">All secure</p>
        </div>
      </div>
    </div>
  );
}
