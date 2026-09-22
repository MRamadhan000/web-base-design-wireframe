"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProfilDaerahContent() {
  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 pb-20 antialiased font-sans">
      
      {/* TOP NAVIGATION */}
      <nav className="w-full bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-8 sticky top-0 z-20 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Beranda</span>
          </Link>
          <span className="text-xs font-medium text-slate-400">Profil Daerah</span>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <header className="w-full bg-white border-b border-slate-200/80 py-12 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
            Pemerintah Kota Batu
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Profil Daerah
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Struktur kepemimpinan, visi strategis, gambaran geografis, serta perjalanan sejarah Kota Wisata Batu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-8 pt-12 space-y-16">
        
        {/* SECTION 1: KEPEMIMPINAN */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Pimpinan Daerah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WALIKOTA */}
            <div className="flex flex-col sm:flex-row bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs gap-5">
              <div className="h-48 w-36 shrink-0 rounded-xl overflow-hidden bg-slate-100 mx-auto sm:mx-0">
                <img
                  src="/images/hero1.png"
                  alt="Walikota Batu"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Walikota Batu
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Nama Walikota Batu
                </h3>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  "Fokus pada transformasi layanan digital terpadu dan pengembangan ekosistem pariwisata ramah lingkungan."
                </p>
              </div>
            </div>

            {/* WAKIL WALIKOTA */}
            <div className="flex flex-col sm:flex-row bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs gap-5">
              <div className="h-48 w-36 shrink-0 rounded-xl overflow-hidden bg-slate-100 mx-auto sm:mx-0">
                <img
                  src="/images/hero2.png"
                  alt="Wakil Walikota Batu"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Wakil Walikota Batu
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Nama Wakil Walikota Batu
                </h3>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  "Mengoptimalkan kemitraan UMKM pertanian dan peningkatan kualitas SDM masyarakat lokal."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-3 mb-6">
            Visi & Misi Pembangunan
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* VISI BANNER */}
            <div className="lg:col-span-5 bg-emerald-900 text-white rounded-xl p-6 flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Visi Kota Batu
              </span>
              <p className="my-6 text-base font-medium leading-relaxed">
                "Terwujudnya Kota Batu yang Mandiri, Sejahtera, Daya Saing Berkelanjutan, dan Berbudaya berbasis Pariwisata dan Agrobisnis."
              </p>
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            </div>

            {/* MISI LIST */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Misi Strategis Daerah
              </h3>
              <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-3 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    1
                  </span>
                  <span className="mt-0.5 leading-normal">
                    Meningkatkan kualitas pelayanan publik secara digital, cepat, dan transparan.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    2
                  </span>
                  <span className="mt-0.5 leading-normal">
                    Mengembangkan potensi pariwisata alam dan seni kebudayaan daerah secara berkelanjutan.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    3
                  </span>
                  <span className="mt-0.5 leading-normal">
                    Mendorong pemberdayaan ekonomi warga berbasis hasil agrobisnis, hortikultura, dan UMKM.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* SECTION 3: GEOGRAFIS & MAP */}
        <section>
          <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-3">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Wilayah & Geografis
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* MAP SECTION */}
            <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              <div className="relative z-10">
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  Sistem Informasi Geografis
                </span>
                <h3 className="text-xl font-bold mt-1">Peta Wilayah Kota Batu</h3>
                <p className="mt-2 text-xs text-slate-300 max-w-md leading-relaxed">
                  Pemetaan batas kecamatan (Batu, Bumiaji, Junrejo), jaringan jalan, fasilitas umum, serta persebaran titik wisata.
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Buka Peta Interaktif
                </button>
              </div>

              {/* Decorative Map Pattern Grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            </div>

            {/* STATS MATRIX */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Luas Wilayah</span>
                <p className="text-2xl font-bold text-slate-900 mt-0.5">199,09 <span className="text-sm font-normal text-slate-500">km²</span></p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Ketinggian</span>
                <p className="text-base font-bold text-slate-900 mt-0.5">680 – 1.200 <span className="text-xs font-normal text-slate-500">mdpl</span></p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Suhu Udara</span>
                <p className="text-base font-bold text-slate-900 mt-0.5">18°C – 24°C</p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Administratif</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">3 Kecamatan, 19 Desa, 5 Kelurahan</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SEJARAH */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-3 mb-6">
            Sejarah Singkat
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Kota Batu telah dikenal sejak abad ke-10 sebagai kawasan peristirahatan peristimewaan raja-raja di Jawa Timur karena dikelilingi pegunungan dan udara yang sangat sejuk.
              </p>
              <p>
                Nama "Batu" dipercaya berasal dari julukan pengikut Pangeran Diponegoro, Mbah Mbuco (Mbah Wastu), yang bermukim di daerah ini untuk mengajarkan keagamaan dan bercocok tanam.
              </p>
              <p>
                Semula berstatus sebagai kota administratif di bawah Kabupaten Malang, Kota Batu secara resmi ditetapkan sebagai kota otonom mandiri pada tanggal <strong className="text-slate-900">17 Oktober 2001</strong> berdasarkan Undang-Undang No. 11 Tahun 2001.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 text-center flex flex-col justify-center items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Hari Jadi Kota
              </span>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">17 OKTOBER</p>
              <p className="text-xs text-slate-500 mt-1">Otonom Sejak Tahun 2001</p>
              <p className="text-[11px] text-slate-400 italic mt-4 pt-3 border-t border-slate-200 w-full">
                "De Kleine Zwitserland"
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}