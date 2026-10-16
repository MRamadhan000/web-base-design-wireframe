"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";

const IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero1.png",
  "/images/hero2.png",
];

export default function WireframeHero() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % IMAGES.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const slug = searchQuery.trim().toLowerCase().replace(/\s+/g, "-");

    if (slug) {
      router.push(`/berita/${encodeURIComponent(slug)}`);
    }
  };

  return (
    <section className="relative top-0 h-screen w-full overflow-hidden border-b border-border bg-black">
      {/* BACKGROUND IMAGES SLIDER */}
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
          }}
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
            <form
              onSubmit={handleSearch}
              className="mt-8 flex w-full max-w-md items-center overflow-hidden rounded-full border border-white/35 bg-white/20 p-1.5 shadow-lg shadow-black/15 backdrop-blur-2xl backdrop-saturate-150 focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/25"
            >
              <div className="flex pl-4 text-white/85">
                <FaSearch className="h-4 w-4" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Anda cari apa..."
                className="w-full bg-transparent px-3 py-2 font-sans text-sm text-white placeholder-white/75 focus:outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-white/90 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-white active:scale-95"
              >
                Cari
              </button>
            </form>

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