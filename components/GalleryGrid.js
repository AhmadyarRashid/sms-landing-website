"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

// Repeating bento rhythm — every 6th tile goes big / tall / wide for a
// dynamic, magazine-style mosaic instead of a flat grid of squares.
function spanFor(i) {
  const m = i % 6;
  if (m === 0) return "sm:col-span-2 sm:row-span-2";
  if (m === 3) return "sm:row-span-2";
  if (m === 5) return "sm:col-span-2";
  return "";
}

export default function GalleryGrid({ images }) {
  const [index, setIndex] = useState(-1); // -1 = closed
  const open = index >= 0;

  const close = useCallback(() => setIndex(-1), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Keyboard controls + lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4">
        {images.map((src, i) => (
          <Reveal
            key={src}
            variant="zoom"
            delay={(i % 4) * 70}
            className={`group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 ${spanFor(
              i
            )}`}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              className="absolute inset-0 h-full w-full cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`SMS Services gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Hover overlay: a single centered "expand" affordance (not a caption) */}
              <span className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-transform duration-300 group-hover:scale-100">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-up"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 max-h-[82vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`SMS Services gallery image ${index + 1}`}
              width={1400}
              height={933}
              className="mx-auto h-auto max-h-[82vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-sm text-white/70">
              {index + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
