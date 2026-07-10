"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Lightweight video player. Shows a poster with a play button and only loads
 * the heavy embed / video on click (good for performance).
 *
 * Props:
 *   - youtubeId : a YouTube video id  (preferred), OR
 *   - src       : a local video file path (e.g. "/images/clip.mp4")
 *   - poster    : optional poster image (falls back to the YouTube thumbnail)
 *   - title     : accessible label / caption
 */
export default function VideoFeature({ youtubeId, src, poster, title = "Watch" }) {
  const [playing, setPlaying] = useState(false);

  const posterSrc =
    poster ||
    (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null);

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-gray-100 bg-black shadow-2xl shadow-brand/10 ring-1 ring-black/5">
      {playing ? (
        youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            controls
            autoPlay
            playsInline
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 h-full w-full"
        >
          {posterSrc && (
            <Image
              src={posterSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
              unoptimized={!!youtubeId}
            />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
          {/* Play badge */}
          <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span className="absolute h-20 w-20 rounded-full bg-white/30 animate-pulse-glow" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-brand shadow-xl transition-transform duration-300 group-hover:scale-110">
              <svg className="ml-1 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-5 left-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              ▶ Watch
            </span>
            <span className="mt-2 block text-lg font-bold text-white drop-shadow">
              {title}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
