"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaTag,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaArrowLeft,
  FaSearch,
  FaPlay,
} from "react-icons/fa";

interface DetailVideoProps {
  id?: number;
  title?: string;
  date?: string;
  author?: string;
  videoUrl?: string;
  duration?: string;
  description?: string[];
  tags?: string[];
}

const DUMMY_VIDEO = {
  id: 1,
  title: "Profil & Potensi Pariwisata Kota Batu Terbaru 2026",
  date: "21 Sep 2026",
  author: "Dinas Pariwisata & Humas Pemkot Batu",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // URL Iframe Video
  duration: "05:20",
  description: [
    "BATU — Video dokumentasi resmi yang menampilkan keindahan panorama alam, keanekaragaman agrowisata, serta fasilitas destinasi wisata unggulan di Kota Batu.",
    "Melalui tayangan multimedia ini, Pemerintah Kota Batu berkomitmen untuk terus mempromosikan potensi lokal, mendukung para pelaku UMKM, serta menyajikan panduan informasi terpadu bagi para wisatawan domestik maupun mancanegara.",
    "Simak cuplikan lengkap keseruan dan perkembangan infrastruktur pariwisata terpadu Kota Batu dalam durasi tayang 5 menit.",
  ],
  tags: ["Pariwisata", "Wisata Batu", "Agrowisata", "Dokumentasi"],
};

const RELATED_VIDEOS = [
  {
    id: 2,
    title: "Dokumentasi Liputan Inovasi Pelayanan Publik Smart City",
    date: "19 Sep 2026",
    duration: "03:45",
    thumbnail: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Keseruan Festival Seni & Budaya Pegunungan Kota Batu",
    date: "14 Sep 2026",
    duration: "08:12",
    thumbnail: "/images/hero3.png",
  },
];

export default function DetailVideoContent({
  title = DUMMY_VIDEO.title,
  date = DUMMY_VIDEO.date,
  author = DUMMY_VIDEO.author,
  videoUrl = DUMMY_VIDEO.videoUrl,
  duration = DUMMY_VIDEO.duration,
  description = DUMMY_VIDEO.description,
  tags = DUMMY_VIDEO.tags,
}: DetailVideoProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full bg-slate-50 py-8 md:py-12 text-slate-800 font-sans antialiased">
      {/* BREADCRUMB & BACK BUTTON */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-6">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-emerald-600 hover:text-emerald-600 hover:shadow-sm"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* SISI KIRI: MAIN VIDEO PLAYER & INFO */}
          <article className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm lg:col-span-2">
            {/* TITLE */}
            <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {title}
            </h1>

            {/* META INFO */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-emerald-600" />
                <span>{date}</span>
              </div>

              {/* SHARE BUTTONS */}
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mr-1">
                  <FaShareAlt className="text-emerald-600" /> Bagikan:
                </span>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
                  aria-label="Share Facebook"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </button>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
                  aria-label="Share Twitter"
                >
                  <FaTwitter className="h-3.5 w-3.5" />
                </button>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
                  aria-label="Share Whatsapp"
                >
                  <FaWhatsapp className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* VIDEO PLAYER CONTAINER */}
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl bg-slate-900 shadow-sm">
              <iframe
                className="h-full w-full border-0"
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* VIDEO DESCRIPTIONS */}
            <div className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
              {description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "font-medium text-slate-900" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mr-2">
                <FaTag className="text-emerald-600" /> Tag:
              </span>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-emerald-100 hover:text-emerald-800 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* SISI KANAN: SIDEBAR */}
          <aside className="space-y-6">
            {/* CARI VIDEO */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Cari Video
              </h3>
              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik judul video..."
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                <button
                  className="rounded-md bg-emerald-600 p-2 text-white hover:bg-emerald-700 transition-colors"
                  aria-label="Cari"
                >
                  <FaSearch className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* VIDEO TERKAIT */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Video Lainnya
              </h3>
              <div className="space-y-4">
                {RELATED_VIDEOS.map((item) => (
                  <Link
                    key={item.id}
                    href="#"
                    className="group flex items-start gap-3"
                  >
                    <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-900">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.2 text-[9px] font-medium text-white backdrop-blur-xs">
                        {item.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-90 transition-opacity group-hover:bg-black/10">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xs transition-transform group-hover:scale-110">
                          <FaPlay className="ml-0.5 h-2 w-2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <span className="text-[10px] font-medium text-emerald-600">
                        {item.date}
                      </span>
                      <h4 className="text-xs font-semibold leading-snug text-slate-800 transition-colors group-hover:text-emerald-600 line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
