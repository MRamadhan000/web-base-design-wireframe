"use client";

import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaChevronRight, FaPlay } from "react-icons/fa";

// DUMMY DATA ALL VIDEO
const ALL_VIDEO_DATA = [
  {
    id: 1,
    title: "Profil & Potensi Pariwisata Kota Batu Terbaru",
    duration: "09:20",
    date: "21 Sep 2026",
    thumbnail: "/images/hero1.png",
  },
  {
    id: 2,
    title: "Dokumentasi Liputan Inovasi Pelayanan Publik Smart City",
    duration: "09:45",
    date: "19 Sep 2026",
    thumbnail: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Keseruan Festival Seni & Budaya Pegunungan Kota Batu",
    duration: "08:42",
    date: "14 Sep 2026",
    thumbnail: "/images/hero3.png",
  },
  {
    id: 4,
    title: "Sistem Informasi Transportasi Terpadu Angkutan Kota",
    duration: "05:15",
    date: "10 Sep 2026",
    thumbnail: "/images/hero1.png",
  },
  {
    id: 5,
    title: "Gelar Produk UMKM Unggulan dan Pasar Tani Kota Batu",
    duration: "07:30",
    date: "05 Sep 2026",
    thumbnail: "/images/hero2.png",
  },
  {
    id: 6,
    title: "Sosialisasi Pengelolaan Sampah Berbasis Komunitas",
    duration: "06:10",
    date: "01 Sep 2026",
    thumbnail: "/images/hero3.png",
  },
];

export default function PageAllVideo() {
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
            <span className="text-emerald-600 font-semibold">Galeri Video</span>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Video & <span className="text-emerald-600">Dokumentasi Kegiatan</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
              Saksikan berbagai dokumentasi kegiatan resmi, liputan khusus, dan video
              potensi daerah Pemerintah Kota Batu secara lengkap.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* GRID VIDEO */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ALL_VIDEO_DATA.map((video) => (
              <article
                key={video.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-md"
              >
                <div>
                  {/* Thumbnail Video dengan Badge Durasi */}
                  <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Badge Durasi Kanan Bawah */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                      <FaPlay className="h-2.5 w-2.5 text-white" />
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  {/* Tanggal (Warna Secondary) */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                    <FaCalendarAlt className="h-3.5 w-3.5 text-slate-400" />
                    <span>{video.date}</span>
                  </div>

                  {/* Judul Video */}
                  <h2 className="mt-2 text-base font-bold text-slate-900 leading-snug line-clamp-3 hover:text-emerald-600 transition-colors">
                    <Link href={`/video/${video.id}`}>{video.title}</Link>
                  </h2>
                </div>

                {/* Tombol Tonton Video */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/video/detail"
                    className="inline-flex items-center justify-center gap-2 w-full text-center rounded-lg border border-emerald-600 bg-white py-2 text-xs font-semibold tracking-wider text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
                  >
                    <FaPlay className="h-3 w-3" />
                    <span>Lihat Video</span>
                  </Link>
                </div>
              </article>
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