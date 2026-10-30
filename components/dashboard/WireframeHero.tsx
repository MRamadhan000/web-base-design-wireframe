"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

import { Container } from "@/components/ui/layout/Container";
import { useSearchViewModel } from "@/features/searching/hooks/useSearchViewModel";
import {
  SearchDropdown,
  SEARCH_LISTBOX_ID,
  SEARCH_PAGE_PATH,
  flattenResults,
  searchOptionId,
} from "@/features/searching/components/SearchDropdown";

const IMAGES = ["/images/hero1.png", "/images/hero2.png", "/images/hero3.png"];
const SLIDE_INTERVAL_MS = 5000;
const MIN_QUERY_LENGTH = 2;

export default function WireframeHero() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
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

  const trimmed = inputValue.trim();
  const isTooShort = trimmed.length > 0 && trimmed.length < MIN_QUERY_LENGTH;

  // Daftar href untuk navigasi keyboard (urutan sama dengan render dropdown)
  const hrefs = useMemo(
    () => (results ? flattenResults(results, debouncedKeyword) : []),
    [results, debouncedKeyword],
  );

  const showDropdown =
    isDropdownOpen && isEnabled && (Boolean(results) || isLoading);

  // ── Hormati prefers-reduced-motion ─────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // ── Auto-slide ─────────────────────────────────────────────────────────────
  // currentIndex ada di deps, jadi timer otomatis di-reset saat indikator diklik.
  // Slider berhenti saat search difokus / dropdown terbuka.
  const isSliderPaused = prefersReducedMotion || isSearchFocused || showDropdown;

  useEffect(() => {
    if (isSliderPaused) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [currentIndex, isSliderPaused]);

  // ── Reset sorotan keyboard saat hasil berubah ──────────────────────────────
  useEffect(() => {
    setActiveIndex(-1);
  }, [results]);

  // ── Tutup dropdown saat klik di luar ───────────────────────────────────────
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

  function closeDropdown() {
    setIsDropdownOpen(false);
    setActiveIndex(-1);
  }

  function handleClear() {
    clearSearch();
    closeDropdown();
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
    setActiveIndex(-1);
    setIsDropdownOpen(value.trim().length >= MIN_QUERY_LENGTH);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Escape":
        closeDropdown();
        break;
      case "ArrowDown":
        if (hrefs.length === 0) return;
        e.preventDefault();
        setIsDropdownOpen(true);
        setActiveIndex((prev) => (prev + 1) % hrefs.length);
        break;
      case "ArrowUp":
        if (hrefs.length === 0) return;
        e.preventDefault();
        setActiveIndex((prev) => (prev <= 0 ? hrefs.length - 1 : prev - 1));
        break;
    }
  }

  // Enter / tombol "Cari": buka opsi yang disorot, atau ke halaman hasil lengkap
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (showDropdown && activeIndex >= 0 && hrefs[activeIndex]) {
      router.push(hrefs[activeIndex]);
      closeDropdown();
      return;
    }

    if (trimmed.length >= MIN_QUERY_LENGTH) {
      router.push(`${SEARCH_PAGE_PATH}?q=${encodeURIComponent(trimmed)}`);
      closeDropdown();
    }
  }

  return (
    <section className="relative z-20 min-h-svh w-full border-b border-border bg-black">
      {/* BACKGROUND IMAGES SLIDER (overflow-hidden hanya di sini, bukan di section,
          supaya dropdown tidak terpotong) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/65" />
          </div>
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-svh items-center justify-center py-28 text-center text-white">
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
                role="search"
                className="flex w-full items-center overflow-hidden rounded-full border border-white/35 bg-white/20 p-1.5 shadow-lg shadow-black/15 backdrop-blur-2xl backdrop-saturate-150 focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/25"
              >
                {/* Search icon / spinner */}
                <div className="flex pl-4 text-white/85" aria-hidden="true">
                  {isLoading ? (
                    <ImSpinner8 className="h-4 w-4 animate-spin" />
                  ) : (
                    <FaSearch className="h-4 w-4" />
                  )}
                </div>

                <input
                  type="text"
                  role="combobox"
                  aria-label="Cari berita, video, galeri"
                  aria-expanded={showDropdown}
                  aria-controls={SEARCH_LISTBOX_ID}
                  aria-autocomplete="list"
                  aria-activedescendant={
                    showDropdown && activeIndex >= 0
                      ? searchOptionId(activeIndex)
                      : undefined
                  }
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() => {
                    setIsSearchFocused(true);
                    if (isEnabled && results) setIsDropdownOpen(true);
                  }}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Cari berita, video, galeri..."
                  className="w-full bg-transparent px-3 py-2 font-sans text-sm text-white placeholder-white/80 focus:outline-none"
                  autoComplete="off"
                />

                {/* Clear button */}
                {inputValue && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="mr-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    aria-label="Hapus pencarian"
                  >
                    <FaTimes className="h-3.5 w-3.5" />
                  </button>
                )}

          
              </form>
              {/* Hint: baru 1 karakter */}
              {isSearchFocused && isTooShort && (
                <div
                  role="status"
                  className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-white/20 bg-black/80 px-5 py-3 text-center font-sans text-xs text-white/70 backdrop-blur-2xl"
                >
                  Ketik minimal {MIN_QUERY_LENGTH} huruf untuk mencari
                </div>
              )}

              {/* SEARCH DROPDOWN (hasil, loading skeleton, atau empty state) */}
              {showDropdown && (
                <SearchDropdown
                  results={results}
                  keyword={debouncedKeyword}
                  isLoading={isLoading}
                  activeIndex={activeIndex}
                  onClose={closeDropdown}
                />
              )}
            </div>

            {/* SLIDE INDICATOR */}
            <div className="mt-8 flex items-center">
              {IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className="group p-2 focus-visible:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === currentIndex}
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all group-focus-visible:ring-2 group-focus-visible:ring-white/70 ${
                      idx === currentIndex
                        ? "w-8 bg-surface"
                        : "w-2.5 bg-surface/40 group-hover:bg-surface/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}