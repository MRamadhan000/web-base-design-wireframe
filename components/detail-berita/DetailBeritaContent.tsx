"use client";

import React from 'react';
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
  FaSearch
} from 'react-icons/fa';

interface DetailBeritaProps {
  id?: number;
  title?: string;
  date?: string;
  author?: string;
  category?: string;
  image?: string;
  content?: string[];
  tags?: string[];
}

const DUMMY_BERITA = {
  id: 1,
  title: "Pemerintah Kota Batu Resmikan Program Inovasi Layanan Publik Digital",
  date: "20 Sep 2026",
  author: "Humas Pemkot Batu",
  category: "Layanan Publik",
  image: "/images/hero1.png",
  content: [
    "BATU — Pemerintah Kota Batu secara resmi meluncurkan portal layanan publik berbasis digital terpadu guna meningkatkan efisiensi dan transparansi administrasi bagi masyarakat Kota Batu.",
    "Peluncuran program ini dipimpin langsung oleh jajaran pimpinan daerah dalam acara sosialisasi yang digelar di Balai Kota Batu. Sistem anyar ini mengintegrasikan layanan dari berbagai Dinas, mulai dari pengelolaan izin usaha (PTSP), pendaftaran kependudukan, hingga pengecekan jadwal transportasi lokal.",
    "Masyarakat kini dapat mengakses beragam dokumen publik serta melakukan pendaftaran secara online tanpa perlu datang langsung ke kantor kedinasan terkait. Langkah ini juga diharapkan mampu mendukung ekosistem Smart City Kota Batu secara berkelanjutan."
  ],
  tags: ["Smart City", "Layanan Digital", "Pemkot Batu", "Inovasi"]
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
  author = DUMMY_BERITA.author,
  category = DUMMY_BERITA.category,
  image = DUMMY_BERITA.image,
  content = DUMMY_BERITA.content,
  tags = DUMMY_BERITA.tags
}: DetailBeritaProps) {
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
            <span>Kembali ke Berita</span>
          </Link>
          {/* <div className="flex items-center gap-2 text-gray-500">
            <Link href="#" className="hover:underline">Beranda</Link>
            <span>/</span>
            <Link href="#" className="hover:underline">Berita</Link>
            <span>/</span>
            <span className="font-bold text-gray-900 truncate max-w-[200px] sm:max-w-none">
              Detail Berita
            </span>
          </div> */}
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* SISI KIRI: MAIN ARTICLE */}
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

            {/* IMAGE */}
            <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded border border-gray-400 bg-gray-200 sm:h-[380px]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover grayscale opacity-90 transition-all hover:grayscale-0"
              />
              <div className="absolute top-3 left-3 rounded bg-black/70 px-2 py-0.5 text-[10px] uppercase text-white backdrop-blur-sm">
                [ Detail Gambar Berita ]
              </div>
            </div>

            {/* BODY TEXT */}
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-800">
              {content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "font-semibold text-gray-900" : ""}>
                  {paragraph}
                </p>
              ))}

              <blockquote className="my-6 rounded-r border-y border-r border-l-4 border-gray-800 border-gray-300 bg-gray-50 p-4 text-xs italic text-gray-700">
                "Inovasi digital ini bukan sekadar mengikuti tren, tetapi merupakan bentuk komitmen nyata Pemkot Batu dalam menghadirkan pelayanan publik yang responsif, cepat, dan transparan bagi seluruh warga."
              </blockquote>
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
            
            {/* CARI BERITA */}
            <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6">
              <h3 className="mb-4 border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Cari Berita
              </h3>
              <div className="flex items-center rounded border border-gray-300 bg-gray-50 p-1">
                <input
                  type="text"
                  placeholder="Ketik kata kunci..."
                  className="w-full bg-transparent px-3 py-1.5 text-xs focus:outline-none"
                />
                <button className="rounded bg-gray-900 p-2 text-white hover:bg-gray-700" aria-label="Cari">
                  <FaSearch className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* BERITA TERKAIT */}
            <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6">
              <h3 className="mb-4 border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Berita Terkait
              </h3>
              <div className="space-y-4">
                {RELATED_NEWS.map((item) => (
                  <Link key={item.id} href="#" className="group block space-y-2">
                    <div className="relative h-28 w-full overflow-hidden rounded border border-gray-300 bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover grayscale opacity-80 transition-all group-hover:grayscale-0"
                      />
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