"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaNewspaper, FaPhotoVideo, FaVideo } from "react-icons/fa";
import type { SearchResult } from "../types/search.types";

interface SearchDropdownProps {
  results: SearchResult;
  keyword: string;
  onClose: () => void;
}

export function SearchDropdown({ results, keyword, onClose }: SearchDropdownProps) {
  const hasBerita = results.berita.length > 0;
  const hasVideo = results.video.length > 0;
  const hasGaleri = results.galeri.length > 0;
  const hasAny = hasBerita || hasVideo || hasGaleri;

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[420px] overflow-y-auto rounded-2xl border border-white/20 bg-black/80 shadow-2xl backdrop-blur-2xl backdrop-saturate-150">
      {!hasAny && (
        <p className="px-5 py-4 text-center font-sans text-sm text-white/60">
          Tidak ada hasil untuk &ldquo;<span className="font-semibold text-white">{keyword}</span>&rdquo;
        </p>
      )}

      {/* ─── Berita ─────────────────────────────────────────────────── */}
      {hasBerita && (
        <section>
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <FaNewspaper className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
              Berita
            </span>
          </div>
          <ul>
            {results.berita.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/berita/${item.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/10"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-9 w-14 flex-shrink-0 rounded object-cover"
                    />
                  )}
                  <span className="line-clamp-2 font-sans text-sm text-white/90">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── Video ──────────────────────────────────────────────────── */}
      {hasVideo && (
        <section>
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <FaVideo className="h-3.5 w-3.5 text-rose-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-rose-400">
              Video
            </span>
          </div>
          <ul>
            {results.video.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/video/${item.slug}`}
                  onClick={onClose}
                  className="block px-4 py-3 font-sans text-sm text-white/90 transition-colors hover:bg-white/10"
                >
                  <span className="line-clamp-2">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── Galeri ─────────────────────────────────────────────────── */}
      {hasGaleri && (
        <section>
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <FaPhotoVideo className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Galeri
            </span>
          </div>
          <ul>
            {results.galeri.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/galeri/${item.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/10"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-9 w-9 flex-shrink-0 rounded object-cover"
                    />
                  )}
                  <span className="line-clamp-2 font-sans text-sm text-white/90">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

