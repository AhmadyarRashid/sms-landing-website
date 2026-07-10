// Infinite, seamless horizontal marquee. Duplicates its children so the loop
// is gapless, and pauses on hover. Children are supplied once by the caller.
export default function Marquee({ children, className = "" }) {
  return (
    <div className={`group/marquee marquee-mask overflow-hidden ${className}`}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
