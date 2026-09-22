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
} from "react-icons/fa";

interface DetailBeritaProps {
  id?: number;
  title?: string;
  date?: string;
  author?: string;
  image?: string;
  content?: string[];
  tags?: string[];
}

const DUMMY_BERITA = {
  id: 1,
  title: "Pemerintah Kota Batu Resmikan Program Inovasi Layanan Publik Digital",
  date: "20 Sep 2026",
  author: "Humas Pemkot Batu",
  image: "/images/hero1.png",
  content: [
    "BATU — Pemerintah Kota Batu secara resmi meluncurkan portal layanan publik berbasis digital terpadu guna meningkatkan efisiensi dan transparansi administrasi bagi masyarakat Kota Batu.",
    "Peluncuran program ini dipimpin langsung oleh jajaran pimpinan daerah dalam acara sosialisasi yang digelar di Balai Kota Batu. Sistem anyar ini mengintegrasikan layanan dari berbagai Dinas, mulai dari pengelolaan izin usaha (PTSP), pendaftaran kependudukan, hingga pengecekan jadwal transportasi lokal.",
    "Masyarakat kini dapat mengakses beragam dokumen publik serta melakukan pendaftaran secara online tanpa perlu datang langsung ke kantor kedinasan terkait. Langkah ini juga diharapkan mampu mendukung ekosistem Smart City Kota Batu secara berkelanjutan.",
  ],
  tags: ["Smart City", "Layanan Digital", "Pemkot Batu", "Inovasi"],
};

const RELATED_NEWS = [
  {
    id: 2,
    title: "Pengembangan Kawasan Agrowisata Unggulan Sektor Hortikultura",
    date: "18 Sep 2026",
    image: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Persiapan Pemkot Batu Menghadapi Puncak Musim Wisata Daerah",
    date: "15 Sep 2026",
    image: "/images/hero3.png",
  },
];

export default function DetailBeritaContent({
  title = DUMMY_BERITA.title,
  date = DUMMY_BERITA.date,
  image = DUMMY_BERITA.image,
  content = DUMMY_BERITA.content,
  tags = DUMMY_BERITA.tags,
}: DetailBeritaProps) {
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
            <span>Kembali ke Berita</span>
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* SISI KIRI: MAIN ARTICLE */}
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

            {/* IMAGE */}
            <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-xl bg-slate-100 sm:h-[380px]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* BODY TEXT */}
            <div className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
              {content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "font-medium text-slate-900" : ""}
                >
                  {paragraph}
                </p>
              ))}

              <blockquote className="my-6 rounded-r-lg border-l-4 border-emerald-600 bg-emerald-50/50 p-4 text-sm italic text-slate-800">
                "Inovasi digital ini bukan sekadar mengikuti tren, tetapi
                merupakan bentuk komitmen nyata Pemkot Batu dalam menghadirkan
                pelayanan publik yang responsif, cepat, dan transparan bagi
                seluruh warga."
              </blockquote>
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
            {/* CARI BERITA */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Cari Berita
              </h3>
              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik kata kunci..."
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

            {/* BERITA TERKAIT */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Berita Terkait
              </h3>
              <div className="space-y-4">
                {RELATED_NEWS.map((item) => (
                  <Link
                    key={item.id}
                    href="#"
                    className="group flex items-start gap-3"
                  >
                    <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
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
