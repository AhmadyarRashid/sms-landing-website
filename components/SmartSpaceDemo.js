// Original, code-built "scenario video": a person walks into a building and the
// space reacts — the gate unlocks, and each room's lights + AC switch on when
// they enter and off when they leave, while the automation rules fire alongside.
// Pure CSS animation on a 14s loop (see globals.css ss-* keyframes).

// Icons -------------------------------------------------------------
const BulbIcon = (
  <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.5 1 .5 1.6h6c0-.6 0-1.2.5-1.6A6 6 0 0012 3z" />
);
const AcIcon = (
  <>
    <rect x="3" y="6" width="18" height="7" rx="2" />
    <path d="M6 17c0-1.5 1-2 1-3M12 17c0-1.5 1-2 1-3M18 17c0-1.5 1-2 1-3" />
  </>
);

function Device({ icon, room }) {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center ${
        room === 1 ? "ss-room1-dev" : "ss-room2-dev"
      }`}
      style={{ color: "#9ca3af" }}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {icon}
      </svg>
    </span>
  );
}

function Room({ n, label, className }) {
  return (
    <div className={`absolute rounded-xl border border-gray-200 bg-white/60 ${className}`}>
      {/* Warm light glow that fades in while occupied */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl ${
          n === 1 ? "ss-room1-glow" : "ss-room2-glow"
        }`}
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(16,185,129,0.35), rgba(253,224,71,0.15) 45%, transparent 75%)",
        }}
      />
      <span className="absolute left-2 top-1.5 text-[10px] font-semibold text-gray-400">
        {label}
      </span>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
        <Device icon={BulbIcon} room={n} />
        <Device icon={AcIcon} room={n} />
      </div>
    </div>
  );
}

function Rule({ cls, tone, text }) {
  const dot = tone === "amber" ? "bg-amber-400" : tone === "red" ? "bg-red-400" : "bg-emerald-400";
  return (
    <div className={`flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 ${cls}`}>
      <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
      <span className="text-[11px] font-medium text-gray-200 sm:text-xs">{text}</span>
    </div>
  );
}

export default function SmartSpaceDemo() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-2xl shadow-brand/10 ring-1 ring-black/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs font-medium text-gray-500">Smart Building — live automation</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" /> Live
        </span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
        {/* Floor plan */}
        <div className="relative aspect-[4/3] bg-grid" style={{ backgroundColor: "#f8faf9" }}>
          {/* Corridor label */}
          <span className="absolute left-3 top-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Floor plan
          </span>

          {/* Rooms */}
          <Room n={1} label="Office" className="left-[20%] top-[24%] h-[42%] w-[26%]" />
          <Room n={2} label="Meeting Room" className="left-[56%] top-[24%] h-[42%] w-[26%]" />

          {/* Entrance / gate */}
          <div className="absolute bottom-[10%] left-[8%] flex flex-col items-center">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white">
              {/* locked (red) */}
              <span className="ss-gate-lock absolute text-red-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 018 0v3" />
                </svg>
              </span>
              {/* unlocked (green) */}
              <span className="ss-gate-unlock absolute text-emerald-500" style={{ opacity: 0 }}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 014-4c1.5 0 2.8.8 3.5 2" />
                </svg>
              </span>
            </div>
            <span className="mt-1 text-[9px] font-medium text-gray-400">Gate</span>
          </div>

          {/* Moving occupant */}
          <div className="ss-avatar absolute z-10" style={{ left: "7%", top: "64%", transform: "translate(-50%,-50%)" }}>
            <span className="ss-ping absolute inset-0 -z-10 rounded-full bg-brand/40" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-white shadow-lg ring-4 ring-brand/15">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Rules panel */}
        <div className="flex flex-col justify-center gap-3 bg-ink p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-accent-2">
            Your automation rules
          </p>
          <Rule cls="ss-rule-1" tone="amber" text="Presence detected at gate → unlock door" />
          <Rule cls="ss-rule-2" tone="emerald" text="Occupant enters room → lights + AC on" />
          <Rule cls="ss-rule-3" tone="red" text="Everyone leaves → switch everything off" />
          <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
            Build rules once — the building runs itself, saving energy and keeping every
            space secure and comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}
