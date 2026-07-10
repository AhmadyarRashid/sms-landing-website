import Counter from "@/components/Counter";

// Realistic, per-service "product UI" dashboards for the solution hero.
// Each config reads like the real control screen for that service.
const CONFIG = {
  "smart-safety-security": {
    title: "SMS Security Control",
    chartLabel: "Live activity · last 12 min",
    kpis: [
      { label: "Devices online", value: 1248, accent: "text-brand" },
      { label: "Active threats", value: 0, accent: "text-emerald-600" },
      { label: "Uptime", value: 99.9, suffix: "%", decimals: 1 },
    ],
    rows: [
      { label: "Perimeter", state: "Secure", tone: "ok" },
      { label: "Cameras 48/48", state: "Online", tone: "ok" },
      { label: "Sensor node 12", state: "Syncing", tone: "warn" },
      { label: "Response time", state: "< 2s", tone: "ok" },
    ],
  },
  "smart-bms": {
    title: "Building Operations",
    chartLabel: "Energy use · today",
    kpis: [
      { label: "Zones", value: 24, accent: "text-brand" },
      { label: "Energy", prefix: "−", value: 30, suffix: "%", accent: "text-emerald-600" },
      { label: "Comfort", value: 98, suffix: "%" },
    ],
    rows: [
      { label: "HVAC", state: "Optimized", tone: "ok" },
      { label: "Lighting", state: "Auto", tone: "ok" },
      { label: "Zone 3", state: "Cooling", tone: "warn" },
      { label: "Power", state: "Stable", tone: "ok" },
    ],
  },
  "smart-manufacturing": {
    title: "Production Monitor",
    chartLabel: "Throughput · this shift",
    kpis: [
      { label: "OEE", value: 94, suffix: "%", accent: "text-brand" },
      { label: "Downtime", prefix: "−", value: 45, suffix: "%", accent: "text-emerald-600" },
      { label: "Output", value: 1200, suffix: "/hr" },
    ],
    rows: [
      { label: "Line A", state: "Running", tone: "ok" },
      { label: "Line B", state: "Running", tone: "ok" },
      { label: "Press 4", state: "Service due", tone: "warn" },
      { label: "Quality", state: "99.2%", tone: "ok" },
    ],
  },
  "smart-agriculture": {
    title: "Farm Insights",
    chartLabel: "Soil moisture · 24h",
    kpis: [
      { label: "Fields", value: 12, accent: "text-brand" },
      { label: "Water saved", value: 35, suffix: "%", accent: "text-emerald-600" },
      { label: "Yield", prefix: "+", value: 18, suffix: "%" },
    ],
    rows: [
      { label: "Irrigation", state: "Auto", tone: "ok" },
      { label: "Soil moisture", state: "Optimal", tone: "ok" },
      { label: "Field 7", state: "Dry alert", tone: "warn" },
      { label: "Livestock", state: "Healthy", tone: "ok" },
    ],
  },
  "cybersecurity-solutions": {
    title: "SOC Dashboard",
    chartLabel: "Security events · last hour",
    kpis: [
      { label: "Threats blocked", value: 3420, accent: "text-brand" },
      { label: "Open alerts", value: 0, accent: "text-emerald-600" },
      { label: "Coverage", value: 100, suffix: "%" },
    ],
    rows: [
      { label: "Firewall", state: "Active", tone: "ok" },
      { label: "Endpoints 512", state: "Protected", tone: "ok" },
      { label: "Suspicious login", state: "Contained", tone: "warn" },
      { label: "Patches", state: "Up to date", tone: "ok" },
    ],
  },
  "retail-intelligence": {
    title: "Retail Analytics",
    chartLabel: "Sales trend · this week",
    kpis: [
      { label: "Revenue", prefix: "+", value: 22, suffix: "%", accent: "text-brand" },
      { label: "Conversion", value: 4.8, suffix: "%", decimals: 1, accent: "text-emerald-600" },
      { label: "Loyalty", prefix: "+", value: 15, suffix: "%" },
    ],
    rows: [
      { label: "Top SKU", state: "Restock", tone: "warn" },
      { label: "Demand", state: "Rising", tone: "ok" },
      { label: "Segments", state: "6 active", tone: "ok" },
      { label: "Forecast", state: "Updated", tone: "ok" },
    ],
  },
  "erp-solutions": {
    title: "ERP Overview",
    chartLabel: "Workflows · today",
    kpis: [
      { label: "Modules", value: 8, accent: "text-brand" },
      { label: "Automated", value: 100, suffix: "+", accent: "text-emerald-600" },
      { label: "Errors", prefix: "−", value: 90, suffix: "%" },
    ],
    rows: [
      { label: "Finance", state: "Synced", tone: "ok" },
      { label: "HR", state: "Synced", tone: "ok" },
      { label: "Supply chain", state: "Live", tone: "ok" },
      { label: "Report", state: "Generating", tone: "warn" },
    ],
  },
};

const BARS = [42, 68, 55, 80, 61, 92, 73, 58, 84, 66, 95, 70];

export default function ServiceMockup({ slug }) {
  const cfg = CONFIG[slug] || CONFIG["smart-safety-security"];

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl animate-pulse-glow"
      />

      <div className="animate-float-slow overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 shadow-2xl shadow-brand/10 backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-medium text-gray-500">{cfg.title}</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" /> Live
          </span>
        </div>

        <div className="p-5">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {cfg.kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-sm">
                <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                  {k.label}
                </p>
                <p className={`mt-1 text-xl font-bold ${k.accent || "text-gray-900"}`}>
                  <Counter
                    value={k.value}
                    prefix={k.prefix || ""}
                    suffix={k.suffix || ""}
                    decimals={k.decimals || 0}
                  />
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-700">{cfg.chartLabel}</p>
              <span className="text-[10px] text-emerald-600">▲ live</span>
            </div>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-brand to-accent-2"
                  style={{
                    height: `${h}%`,
                    animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
                    animationDelay: `${i * 55}ms`,
                    opacity: 0.55 + (h / 100) * 0.45,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Status rows */}
          <div className="mt-4 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
            {cfg.rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between rounded-lg px-1 py-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      r.tone === "ok" ? "bg-emerald-500" : "bg-amber-500 animate-pulse-glow"
                    }`}
                  />
                  <span className="text-xs font-medium text-gray-700">{r.label}</span>
                </div>
                <span className="text-[11px] font-semibold text-gray-400">{r.state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-4 -top-4 hidden rounded-xl border border-gray-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur animate-float sm:block">
        <p className="text-[10px] font-medium text-gray-400">Status</p>
        <p className="text-sm font-bold text-brand">All systems go</p>
      </div>
      <div
        className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl border border-gray-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur animate-float sm:flex"
        style={{ animationDelay: "-3s" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">✓</span>
        <div>
          <p className="text-[10px] font-medium text-gray-400">Powered by</p>
          <p className="text-xs font-bold text-gray-800">AI · IoT · Cloud</p>
        </div>
      </div>
    </div>
  );
}
