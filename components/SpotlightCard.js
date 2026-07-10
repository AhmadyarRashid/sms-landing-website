"use client";

import { useRef } from "react";

/**
 * Glass card with a radial glow that tracks the cursor.
 * Renders as <div> by default; pass `as` (e.g. Link, "a") to change the tag.
 */
export default function SpotlightCard({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight gradient-border ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
