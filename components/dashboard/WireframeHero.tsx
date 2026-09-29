"use client";

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero1.png",
  "/images/hero2.png",
];

export default function WireframeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Mencari: ${searchQuery}`);
    }
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gray-900 border-b border-gray-800">
      {/* Background Images Slider */}
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        >
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Hero Content (Statis / Tidak Berubah) */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="max-w-3xl font-mono text-3xl font-bold uppercase tracking-wide sm:text-5xl">
          Selamat Datang di Kota Batu
        </h1>

        <p className="mt-4 max-w-xl font-mono text-sm text-gray-200 sm:text-base">
          Layanan informasi publik dan transportasi terpadu untuk masyarakat dan
          wisatawan.
        </p>

        {/* Search Input Box (Tanpa Garis Wireframe/Dashed) */}
        <form 
          onSubmit={handleSearch}
          className="mt-8 flex w-full max-w-md items-center overflow-hidden rounded-full border border-gray-200 bg-white p-1.5 shadow-lg focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-400/20"
        >
          <div className="flex pl-4 text-gray-400">
            <FaSearch className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Anda cari apa..."
            className="w-full bg-transparent px-3 py-2 font-sans text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gray-900 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-gray-800 active:scale-95"
          >
            Cari
          </button>
        </form>

        {/* Slide Indicator */}
        <div className="mt-10 flex gap-2">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-white" : "w-2.5 bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}