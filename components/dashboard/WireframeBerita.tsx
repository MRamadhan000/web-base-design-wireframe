import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaBookOpen, FaArrowRight } from 'react-icons/fa';

const BERITA_DATA = [
  {
    id: 1,
    title: "Pemerintah Kota Batu Resmikan Program Inovasi Layanan Publik Digital",
    date: "20 Sep 2026",
    image: "/images/hero1.png",
  },
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

export default function WireframeBerita() {
  return (
    <section className="w-full bg-slate-50 py-16 border-b border-slate-200 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION BERITA */}
        <div className="mb-10 border-b border-slate-200 pb-6">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 text-center">
            Berita & Pengumuman
          </h2>
        </div>

        {/* GRID BERITA (MAKSIMAL 3) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BERITA_DATA.map((berita) => (
            <article
              key={berita.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md"
            >
              <div>
                {/* Gambar Berita */}
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Date Publish (Warna Secondary) */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <FaCalendarAlt className="h-3.5 w-3.5 text-slate-400" />
                  <span>{berita.date}</span>
                </div>

                {/* Judul Berita */}
                <h3 className="mt-2 line-clamp-3 text-base font-bold text-slate-900 leading-snug">
                  {berita.title}
                </h3>
              </div>

              {/* Button Baca Selengkapnya dengan Ikon */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/berita/detail"
                  className="inline-flex items-center justify-center gap-2 w-full text-center rounded-lg border border-emerald-600 bg-white py-2 text-xs font-semibold tracking-wider text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
                >
                  <FaBookOpen className="h-3.5 w-3.5" />
                  <span>Baca Berita</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON LIHAT SEMUA BERITA */}
        <div className="mt-12 text-center">
          <Link
            href="/berita"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-xs font-bold tracking-wider text-white transition-colors hover:bg-emerald-700 shadow-sm"
          >
            <span>Lihat Semua Berita</span>
            <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}