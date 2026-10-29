"use client";

import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

import { Container } from "@/components/ui/layout/Container";
import { useSearchViewModel } from "@/features/searching/hooks/useSearchViewModel";
import { SearchDropdown } from "@/features/searching/components/SearchDropdown";

const IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero1.png",
  "/images/hero2.png",
];

export default function WireframeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const {
    inputValue,
    debouncedKeyword,
    isLoading,
    isEnabled,
    results,
    setInputValue,
    clearSearch,
  } = useSearchViewModel();

  // ── Auto-slide ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ── Open dropdown when there are results ───────────────────────────────────
  useEffect(() => {
    if (isEnabled && results) {
      setIsDropdownOpen(true);
    }
  }, [isEnabled, results]);

  // ── Close dropdown on outside click ───────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleClear() {
    clearSearch();
    setIsDropdownOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    if (e.target.value.trim().length >= 2) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }

  // Prevent form submission — search is debounced & live
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="relative top-0 h-screen w-full overflow-hidden border-b border-border bg-black">
      {/* BACKGROUND IMAGES SLIDER */}
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center pt-28 text-center text-white">
        <Container>
          <div className="flex flex-col items-center">
            <h1 className="max-w-3xl font-mono text-3xl font-bold uppercase tracking-wide sm:text-5xl">
              Selamat Datang di Kota Batu
            </h1>

            <p className="mt-4 max-w-xl font-mono text-sm text-muted-light sm:text-base">
              Layanan informasi publik dan transportasi terpadu untuk
              masyarakat dan wisatawan.
            </p>

            {/* SEARCH */}
            <div ref={searchWrapperRef} className="relative mt-8 w-full max-w-md">
              <form
                onSubmit={handleSubmit}
                className="flex w-full items-center overflow-hidden rounded-full border border-white/35 bg-white/20 p-1.5 shadow-lg shadow-black/15 backdrop-blur-2xl backdrop-saturate-150 focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/25"
              >
                {/* Search icon / spinner */}
                <div className="flex pl-4 text-white/85">
                  {isLoading ? (
                    <ImSpinner8 className="h-4 w-4 animate-spin" />
                  ) : (
                    <FaSearch className="h-4 w-4" />
                  )}
                </div>

                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={() => {
                    if (isEnabled && results) setIsDropdownOpen(true);
                  }}
                  placeholder="Cari berita, video, galeri..."
                  className="w-full bg-transparent px-3 py-2 font-sans text-sm text-white placeholder-white/75 focus:outline-none"
                  autoComplete="off"
                />

                {/* Clear button */}
                {inputValue && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="mr-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                    aria-label="Hapus pencarian"
                  >
                    <FaTimes className="h-3.5 w-3.5" />
                  </button>
                )}

                <button
                  type="submit"
                  className="rounded-full bg-white/90 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-white active:scale-95"
                >
                  Cari
                </button>
              </form>

              {/* SEARCH DROPDOWN */}
              {isDropdownOpen && isEnabled && results && (
                <SearchDropdown
                  results={results}
                  keyword={debouncedKeyword}
                  onClose={() => setIsDropdownOpen(false)}
                />
              )}

              {/* Loading hint while waiting for API */}
              {isLoading && isEnabled && !results && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-white/20 bg-black/80 px-5 py-4 text-center font-sans text-sm text-white/60 backdrop-blur-2xl">
                  Mencari...
                </div>
              )}
            </div>

            {/* SLIDE INDICATOR */}
            <div className="mt-10 flex gap-2">
              {IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-surface"
                      : "w-2.5 bg-surface/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
