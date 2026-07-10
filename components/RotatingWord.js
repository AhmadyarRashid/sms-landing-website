"use client";

import { useEffect, useState } from "react";

// Cycles through a list of words with a soft fade/slide — draws the eye in the hero.
export default function RotatingWord({ words, className = "", interval = 2200 }) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const id = setInterval(() => {
      if (reduce) {
        setI((p) => (p + 1) % words.length);
        return;
      }
      setShow(false);
      setTimeout(() => {
        setI((p) => (p + 1) % words.length);
        setShow(true);
      }, 300);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-300 ease-out ${
        show ? "translate-y-0 opacity-100 blur-0" : "-translate-y-2 opacity-0 blur-sm"
      } ${className}`}
    >
      {words[i]}
    </span>
  );
}
