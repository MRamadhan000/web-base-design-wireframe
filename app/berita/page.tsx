"use client";

import Link from "next/link";
import { FaCalendarAlt, FaChevronRight, FaBookOpen } from "react-icons/fa";

// DUMMY DATA ALL BERITA
const ALL_BERITA_DATA = [
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
  {
    id: 4,
    title: "Festival Kebudayaan Pegunungan Dan Pameran UMKM Kota Batu 2026",
    date: "10 Sep 2026",
    image: "/images/hero1.png",
  },
  {
    id: 5,
    title: "Edukasi Pengelolaan Sampah Mandiri Tingkat Desa Dan Kelurahan",
    date: "05 Sep 2026",
    image: "/images/hero2.png",
  },
  {
    id: 6,
    title: "Pemutakhiran Sistem Transportasi Angkutan Umum Perkotaan",
    date: "01 Sep 2026",
    image: "/images/hero3.png",
  },
];

export default function PageAllBerita() {
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
            <span className="text-emerald-600 font-semibold">Berita & Pengumuman</span>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Berita & <span className="text-emerald-600">Informasi Publik</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
              Akses cepat dan transparan ke seluruh rilisan berita resmi, pengumuman,
              serta dokumentasi program kerja Pemerintah Kota Batu.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* GRID BERITA */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ALL_BERITA_DATA.map((berita) => (
              <article
                key={berita.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-md"
              >
                <div>
                  {/* Gambar Berita */}
                  <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={berita.image}
                      alt={berita.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Tanggal (Warna Secondary) */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                    <FaCalendarAlt className="h-3.5 w-3.5 text-slate-400" />
                    <span>{berita.date}</span>
                  </div>

                  {/* Judul */}
                  <h2 className="mt-2 text-base font-bold text-slate-900 leading-snug line-clamp-3 hover:text-emerald-600 transition-colors">
                    <Link href={`/berita/${berita.id}`}>{berita.title}</Link>
                  </h2>
                </div>

                {/* Tombol Baca dengan Ikon */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/berita/detail`}
                    className="inline-flex items-center justify-center gap-2 w-full text-center rounded-lg border border-emerald-600 bg-white py-2 text-xs font-semibold tracking-wider text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
                  >
                    <FaBookOpen className="h-3.5 w-3.5" />
                    <span>Baca Berita</span>
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