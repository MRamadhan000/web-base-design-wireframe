"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight, FaImage, FaArrowRight } from "react-icons/fa";

// DUMMY DATA ALL GALERI FOTO
const ALL_GALLERY_DATA = [
  {
    id: 1,
    title: "Festival Bunga & Agrowisata Kota Batu",
    category: "Event Daerah",
    image: "/images/hero1.png",
  },
  {
    id: 2,
    title: "Suasana Malam Alun-Alun Kota Batu",
    category: "Pariwisata",
    image: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Pelayanan Publik Terpadu Balai Kota",
    category: "Dokumentasi",
    image: "/images/hero3.png",
  },
  {
    id: 4,
    title: "Kegiatan Kebudayaan & Pertunjukan Seni Lokal",
    category: "Seni & Budaya",
    image: "/images/hero1.png",
  },
  {
    id: 5,
    title: "Panorama Pegunungan & Keindahan Alam Batu",
    category: "Pariwisata",
    image: "/images/hero2.png",
  },
  {
    id: 6,
    title: "Peresmian Infrastruktur & Fasilitas Umum Baru",
    category: "Dokumentasi",
    image: "/images/hero3.png",
  },
  {
    id: 7,
    title: "Pemberdayaan Sentra Olahan Olahan UMKM",
    category: "Ekonomi Kreatif",
    image: "/images/hero1.png",
  },
  {
    id: 8,
    title: "Panen Raya Komoditas Hortikultura & Apel",
    category: "Pertanian",
    image: "/images/hero2.png",
  },
  {
    id: 9,
    title: "Edukasi Kebersihan & Pengelolaan Waste Management",
    category: "Lingkungan",
    image: "/images/hero3.png",
  },
];

export default function PageAllGaleri() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* HEADER / HERO PAGE (PUTIH CLEAN TANPA ORNAMEN) */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Beranda
            </Link>
            <FaChevronRight className="h-2.5 w-2.5 text-slate-400" />
            <span className="text-emerald-600 font-semibold">Galeri Foto</span>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Galeri Dokumentasi & <span className="text-emerald-600">Foto Daerah</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
              Kumpulan dokumentasi visual mengenai potensi wisata, kegiatan pemerintah,
              seni budaya, serta momen berharga di Kota Batu.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* GRID GALERI FOTO */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {ALL_GALLERY_DATA.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-md cursor-pointer"
              >
                {/* Gambar Foto */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY TEKS (HOVER EFEK GRADIENT) */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent p-5 opacity-0 transition-opacity duration-300 backdrop-blur-[1px] group-hover:opacity-100">
                  <h2 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h2>
                  <div className="mt-3 flex items-center gap-1.5 border-t border-slate-700/60 pt-2 text-xs font-medium text-emerald-400 transition-colors group-hover:text-emerald-300">
                    <span>Lihat Dokumentasi</span>
                    <FaArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION SIMPLE */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              disabled
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed"
            >
              &larr; Sebelumnya
            </button>
            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-xs">
              1
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-600 transition-colors">
              2
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-600 transition-colors">
              Selanjutnya &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}