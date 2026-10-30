"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

import { Container } from "@/components/ui/layout/Container";
import { useHeroSearch } from "@/features/searching/hooks/useHeroSearch";
import {
  SEARCH_LISTBOX_ID,
  SearchDropdown,
  searchOptionId,
} from "@/features/searching/components/SearchDropdown";
import { useClickOutside } from "@/features/searching/hooks/useClickOutSide";
import { useHeroSlider } from "@/features/searching/hooks/useHeroSlider";

const IMAGES = ["/images/hero1.png", "/images/hero2.png", "/images/hero3.png"];
const SLIDE_INTERVAL_MS = 5000;

export default function WireframeHero() {
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const search = useHeroSearch();

  const slider = useHeroSlider(
    IMAGES.length,
    SLIDE_INTERVAL_MS,
    search.isFocused || search.showDropdown,
  );

  useClickOutside(searchWrapperRef, search.close);

  return (
    <section className="relative z-20 min-h-svh w-full border-b border-border bg-black">
      {/* BACKGROUND IMAGES SLIDER (overflow-hidden hanya di sini, bukan di section,
          supaya dropdown tidak terpotong) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              index === slider.currentIndex ? "opacity-100" : "opacity-0"
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
              Layanan informasi publik dan transportasi terpadu untuk masyarakat
              dan wisatawan.
            </p>

            {/* SEARCH */}
            <div
              ref={searchWrapperRef}
              className="relative mt-8 w-full max-w-md"
            >
              <form
                onSubmit={search.submit}
                role="search"
                className="flex w-full items-center overflow-hidden rounded-full border border-white/35 bg-white/20 p-1.5 shadow-lg shadow-black/15 backdrop-blur-2xl backdrop-saturate-150 focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/25"
              >
                {/* Search icon / spinner */}
                <div className="flex pl-4 text-white/85" aria-hidden="true">
                  {search.isLoading ? (
                    <ImSpinner8 className="h-4 w-4 animate-spin" />
                  ) : (
                    <FaSearch className="h-4 w-4" />
                  )}
                </div>

                <input
                  type="text"
                  role="combobox"
                  aria-label="Cari berita, video, galeri"
                  aria-expanded={search.showDropdown}
                  aria-controls={SEARCH_LISTBOX_ID}
                  aria-autocomplete="list"
                  aria-activedescendant={
                    search.showDropdown && search.activeIndex >= 0
                      ? searchOptionId(search.activeIndex)
                      : undefined
                  }
                  value={search.inputValue}
                  onChange={(e) => search.onChange(e.target.value)}
                  onFocus={search.onFocus}
                  onBlur={search.onBlur}
                  onKeyDown={search.onKeyDown}
                  placeholder="Cari berita, video, galeri..."
                  className="w-full bg-transparent px-3 py-2 font-sans text-sm text-white placeholder-white/80 focus:outline-none"
                  autoComplete="off"
                />

                {/* Clear button */}
                {search.inputValue && (
                  <button
                    type="button"
                    onClick={search.clear}
                    className="mr-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    aria-label="Hapus pencarian"
                  >
                    <FaTimes className="h-3.5 w-3.5" />
                  </button>
                )}
              </form>

              {/* Hint: baru 1 karakter */}
              {search.showTooShortHint && (
                <div
                  role="status"
                  className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-white/20 bg-black/80 px-5 py-3 text-center font-sans text-xs text-white/70 backdrop-blur-2xl"
                >
                  Ketik minimal {search.minQueryLength} huruf untuk mencari
                </div>
              )}

              {/* SEARCH DROPDOWN (hasil, loading skeleton, atau empty state) */}
              {search.showDropdown && (
                <SearchDropdown
                  results={search.results}
                  keyword={search.debouncedKeyword}
                  isLoading={search.isLoading}
                  activeIndex={search.activeIndex}
                  onClose={search.close}
                />
              )}
            </div>

            {/* SLIDE INDICATOR */}
            <div className="mt-8 flex items-center">
              {IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => slider.goTo(idx)}
                  className="group p-2 focus-visible:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === slider.currentIndex}
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all group-focus-visible:ring-2 group-focus-visible:ring-white/70 ${
                      idx === slider.currentIndex
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
