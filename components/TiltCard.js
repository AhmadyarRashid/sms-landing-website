"use client";

import { useRef } from "react";

/**
 * Subtle 3D tilt-on-hover wrapper. Respects reduced-motion via CSS transitions
 * being cheap; disables the effect on touch (no hover) automatically.
 */
export default function TiltCard({ className = "", max = 8, children, ...rest }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${
      -py * max
    }deg) translateZ(0)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
