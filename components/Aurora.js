// Decorative animated background: soft aurora blobs + optional grid.
// Purely presentational — sits behind content with pointer-events disabled.
export default function Aurora({ dark = false, grid = true, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {grid && (
        <div
          className={`absolute inset-0 mask-fade ${dark ? "bg-grid-dark" : "bg-grid"}`}
        />
      )}

      <div
        className="aurora-blob aurora-blob-1 -left-24 -top-24 h-[28rem] w-[28rem]"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(16,185,129,0.55), transparent 70%)"
            : "radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-2 -right-20 top-10 h-[24rem] w-[24rem]"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(45,212,191,0.45), transparent 70%)"
            : "radial-gradient(circle, rgba(45,212,191,0.3), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-1 bottom-0 left-1/3 h-[20rem] w-[20rem]"
        style={{
          animationDelay: "-6s",
          background: dark
            ? "radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)"
            : "radial-gradient(circle, rgba(34,211,238,0.18), transparent 70%)",
        }}
      />
    </div>
  );
}
