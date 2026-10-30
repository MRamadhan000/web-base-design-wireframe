"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { FaNewspaper, FaPhotoVideo, FaPlay, FaVideo } from "react-icons/fa";
import type { SearchResult } from "../types/search.types";
import { SkeletonRows } from "./SkeletonRows";
import { Thumb } from "./Thumb";

// ─── Types & config ──────────────────────────────────────────────────────────

export interface ResultItem {
  id: string | number;
  slug: string;
  title: string;
  image?: string | null;
}

export interface SectionConfig {
  key: "berita" | "video" | "galeri";
  label: string;
  basePath: string;
  Icon: IconType;
  textClass: string;
  thumbClass: string;
}

export const SECTIONS: SectionConfig[] = [
  {
    key: "berita",
    label: "Berita",
    basePath: "/berita",
    Icon: FaNewspaper,
    textClass: "text-sky-400",
    thumbClass: "h-9 w-14",
  },
  {
    key: "video",
    label: "Video",
    basePath: "/video",
    Icon: FaVideo,
    textClass: "text-rose-400",
    thumbClass: "h-9 w-14",
  },
  {
    key: "galeri",
    label: "Galeri",
    basePath: "/galeri",
    Icon: FaPhotoVideo,
    textClass: "text-emerald-400",
    thumbClass: "h-9 w-9",
  },
];

/** Ubah ke path halaman hasil pencarian lengkap milikmu. */
export const SEARCH_PAGE_PATH = "/pencarian";

export const SEARCH_LISTBOX_ID = "search-results";
export const searchOptionId = (index: number) => `search-option-${index}`;

function searchPageHref(keyword: string) {
  return `${SEARCH_PAGE_PATH}?q=${encodeURIComponent(keyword)}`;
}

/**
 * Daftar href berurutan (Berita → Video → Galeri → "Lihat semua").
 * Dipakai parent untuk navigasi keyboard, jadi urutannya harus sama
 * dengan urutan render di bawah.
 */
export function flattenResults(results: SearchResult, keyword: string): string[] {
  const hrefs = SECTIONS.flatMap((s) =>
    (results[s.key] as ResultItem[]).map((item) => `${s.basePath}/${item.slug}`),
  );
  if (hrefs.length > 0) hrefs.push(searchPageHref(keyword));
  return hrefs;
}

// ─── Small pieces ────────────────────────────────────────────────────────────

function Highlight({ text, keyword }: { text: string; keyword: string }) {
  const q = keyword.trim();
  if (!q) return <>{text}</>;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-transparent font-bold text-white underline decoration-white/40 underline-offset-2">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}


// ─── Main component ──────────────────────────────────────────────────────────
interface SearchDropdownProps {
  results?: SearchResult | null;
  keyword: string;
  isLoading?: boolean;
  /** Index opsi yang sedang disorot keyboard; -1 jika tidak ada. */
  activeIndex?: number;
  onClose: () => void;
}

export function SearchDropdown({
  results,
  keyword,
  isLoading = false,
  activeIndex = -1,
  onClose,
}: SearchDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Jaga opsi aktif tetap terlihat saat navigasi panah
  useEffect(() => {
    if (activeIndex < 0) return;
    containerRef.current
      ?.querySelector(`#${searchOptionId(activeIndex)}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const hasAny = results
    ? SECTIONS.some((s) => results[s.key].length > 0)
    : false;

  // Hasil lama dipertahankan (dimudarkan) saat pencarian baru berjalan
  const isStale = isLoading && Boolean(results);

  let optionIndex = 0;

  return (
    <div
      ref={containerRef}
      className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[min(420px,50dvh)] animate-in fade-in slide-in-from-top-1 overflow-y-auto overscroll-contain rounded-2xl border border-white/20 bg-black/85 text-left shadow-2xl backdrop-blur-2xl backdrop-saturate-150 duration-150 motion-reduce:animate-none"
    >
      {/* Loading awal (belum ada hasil sama sekali) */}
      {!results && isLoading && <SkeletonRows />}

      {/* Empty state */}
      {results && !hasAny && (
        <div className="px-5 py-5 text-center font-sans">
          <p className="text-sm text-white/70">
            Tidak ada hasil untuk &ldquo;
            <span className="font-semibold text-white">{keyword}</span>&rdquo;
          </p>
          <p className="mt-1 text-xs text-white/50">
            Coba kata kunci lain, atau jelajahi langsung:
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {SECTIONS.map(({ key, label, basePath }) => (
              <Link
                key={key}
                href={basePath}
                onClick={onClose}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hasil */}
      {results && hasAny && (
        <div
          id={SEARCH_LISTBOX_ID}
          role="listbox"
          aria-label="Hasil pencarian"
          className={`transition-opacity ${isStale ? "opacity-60" : "opacity-100"}`}
        >
          {SECTIONS.map((config) => {
            const items = results[config.key] as ResultItem[];
            if (items.length === 0) return null;

            return (
              <section key={config.key} role="group" aria-label={config.label}>
                <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-white/10 bg-black/90 px-4 py-2 backdrop-blur">
                  <config.Icon className={`h-3.5 w-3.5 ${config.textClass}`} />
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-widest ${config.textClass}`}
                  >
                    {config.label}
                  </span>
                </div>

                <ul>
                  {items.map((item) => {
                    const index = optionIndex++;
                    const isActive = index === activeIndex;
                    return (
                      <li
                        key={item.id}
                        id={searchOptionId(index)}
                        role="option"
                        aria-selected={isActive}
                      >
                        <Link
                          href={`${config.basePath}/${item.slug}`}
                          onClick={onClose}
                          tabIndex={-1}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/10 ${
                            isActive ? "bg-white/15" : ""
                          }`}
                        >
                          <Thumb item={item} config={config} />
                          <span className="line-clamp-2 font-sans text-sm text-white/80">
                            <Highlight text={item.title} keyword={keyword} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}

          {/* Footer: lihat semua hasil */}
          {(() => {
            const index = optionIndex;
            const isActive = index === activeIndex;
            return (
              <div
                id={searchOptionId(index)}
                role="option"
                aria-selected={isActive}
                className="sticky bottom-0"
              >
                <Link
                  href={searchPageHref(keyword)}
                  onClick={onClose}
                  tabIndex={-1}
                  className={`block border-t border-white/10 bg-black/90 px-4 py-3 text-center font-sans text-xs font-semibold text-sky-400 transition-colors hover:bg-white/10 ${
                    isActive ? "bg-white/15" : ""
                  }`}
                >
                  Lihat semua hasil untuk &ldquo;{keyword}&rdquo; →
                </Link>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}