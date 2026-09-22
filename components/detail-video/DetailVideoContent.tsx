"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaShareAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaWhatsapp, 
  FaArrowLeft,
  FaSearch,
  FaPlay
} from 'react-icons/fa';

interface DetailVideoProps {
  id?: number;
  title?: string;
  date?: string;
  author?: string;
  category?: string;
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
  category: "Galeri Multimedia",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // URL Iframe Video
  duration: "05:20",
  description: [
    "BATU — Video dokumentasi resmi yang menampilkan keindahan panorama alam, keanekaragaman agrowisata, serta fasilitas destinasi wisata unggulan di Kota Batu.",
    "Melalui tayangan multimedia ini, Pemerintah Kota Batu berkomitmen untuk terus mempromosikan potensi lokal, mendukung para pelaku UMKM, serta menyajikan panduan informasi terpadu bagi para wisatawan domestik maupun mancanegara.",
    "Simak cuplikan lengkap keseruan dan perkembangan infrastruktur pariwisata terpadu Kota Batu dalam durasi tayang 5 menit."
  ],
  tags: ["Pariwisata", "Wisata Batu", "Agrowisata", "Dokumentasi"]
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
  category = DUMMY_VIDEO.category,
  videoUrl = DUMMY_VIDEO.videoUrl,
  duration = DUMMY_VIDEO.duration,
  description = DUMMY_VIDEO.description,
  tags = DUMMY_VIDEO.tags
}: DetailVideoProps) {
  return (
    <section className="w-full bg-gray-50 py-10 font-mono text-gray-900 border-b-2 border-dashed border-gray-400">
      
      {/* BREADCRUMB & BACK BUTTON */}
      <div className="mx-auto max-w-7xl px-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs border-b border-gray-300 pb-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded border border-gray-800 bg-white px-3 py-1.5 font-bold uppercase transition-colors hover:bg-gray-900 hover:text-white"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Beranda</span>
          </Link>
          {/* <div className="flex items-center gap-2 text-gray-500">
            <Link href="#" className="hover:underline">Beranda</Link>
            <span>/</span>
            <Link href="#" className="hover:underline">Video</Link>
            <span>/</span>
            <span className="font-bold text-gray-900 truncate max-w-[200px] sm:max-w-none">
              Detail Video
            </span>
          </div> */}
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* SISI KIRI: MAIN VIDEO PLAYER & INFO */}
          <article className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8 lg:col-span-2">
            
            {/* CATEGORY BADGE */}
            <span className="inline-block rounded border border-gray-400 bg-gray-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
              {category}
            </span>

            {/* TITLE */}
            <h1 className="mt-4 text-2xl font-bold uppercase leading-tight tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h1>

            {/* META INFO */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-gray-300 py-3 text-xs text-gray-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-gray-500" />
                  <span>{date}</span>
                </div>
                {/* <div className="flex items-center gap-1.5">
                  <FaUser className="text-gray-500" />
                  <span>{author}</span>
                </div> */}
              </div>

              {/* SHARE BUTTONS */}
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-gray-500 mr-1">
                  <FaShareAlt /> Bagikan:
                </span>
                <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 bg-gray-50 hover:bg-gray-200" aria-label="Share Facebook">
                  <FaFacebookF className="h-3 w-3 text-gray-700" />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 bg-gray-50 hover:bg-gray-200" aria-label="Share Twitter">
                  <FaTwitter className="h-3 w-3 text-gray-700" />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 bg-gray-50 hover:bg-gray-200" aria-label="Share Whatsapp">
                  <FaWhatsapp className="h-3 w-3 text-gray-700" />
                </button>
              </div>
            </div>

            {/* VIDEO PLAYER CONTAINER */}
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded border-2 border-gray-400 bg-black">
              <iframe
                className="h-full w-full"
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* VIDEO DESCRIPTIONS */}
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-800">
              {description.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "font-semibold text-gray-900" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-gray-300 pt-6">
              <span className="flex items-center gap-1 text-xs font-bold uppercase text-gray-600 mr-2">
                <FaTag /> Tag:
              </span>
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="rounded border border-gray-300 bg-gray-100 px-2.5 py-1 text-[11px] uppercase text-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </article>

          {/* SISI KANAN: SIDEBAR */}
          <aside className="space-y-8">
            
            {/* CARI VIDEO */}
            <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6">
              <h3 className="mb-4 border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Cari Video
              </h3>
              <div className="flex items-center rounded border border-gray-300 bg-gray-50 p-1">
                <input
                  type="text"
                  placeholder="Ketik judul video..."
                  className="w-full bg-transparent px-3 py-1.5 text-xs focus:outline-none"
                />
                <button className="rounded bg-gray-900 p-2 text-white hover:bg-gray-700" aria-label="Cari">
                  <FaSearch className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* VIDEO TERKAIT */}
            <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6">
              <h3 className="mb-4 border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Video Lainnya
              </h3>
              <div className="space-y-4">
                {RELATED_VIDEOS.map((item) => (
                  <Link key={item.id} href="#" className="group block space-y-2">
                    <div className="relative h-32 w-full overflow-hidden rounded border border-gray-300 bg-gray-900">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-90"
                      />
                      <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[10px] text-white">
                        {item.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-transform group-hover:scale-110 group-hover:bg-red-600">
                          <FaPlay className="ml-0.5 h-3 w-3" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500">{item.date}</span>
                    <h4 className="text-xs font-bold uppercase leading-snug text-gray-900 group-hover:underline">
                      {item.title}
                    </h4>
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