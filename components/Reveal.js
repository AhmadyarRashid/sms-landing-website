"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children with a subtle animation when scrolled into view.
 *
 * Props:
 *  - variant: "up" | "left" | "right" | "zoom"  (default "up")
 *  - delay:   ms to stagger the animation        (default 0)
 *  - as:      element/tag to render              (default "div")
 *  - className: extra classes for the wrapper
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers) → just show it.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      {...rest}
      style={{ transitionDelay: `${delay}ms`, ...rest.style }}
      className={`reveal reveal-${variant} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
