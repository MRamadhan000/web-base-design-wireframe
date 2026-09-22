"use client";

import React from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaUserTie,
  FaLandmark,
  FaTree,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";

export default function WireframeProfilDaerah() {
  return (
    <div className="w-full bg-gray-50 min-h-screen font-mono text-gray-900 pb-16">
      
      {/* BREADCRUMB & BACK BUTTON */}
      <div className="w-full bg-white border-b-2 border-dashed border-gray-400 py-4 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded border border-gray-800 bg-gray-100 px-3 py-1.5 font-bold uppercase transition-colors hover:bg-gray-900 hover:text-white"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      {/* HEADER SECTION PROFIL */}
      <section className="w-full bg-white border-b-2 border-dashed border-gray-400 py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <span className="rounded border border-gray-400 bg-gray-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
            Tentang Daerah
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-gray-900">
            Profil Kota Batu
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-gray-600 leading-relaxed">
            Mengenal lebih dekat struktur kepemimpinan, visi misi, letak
            geografis, serta sejarah perkembangan Kota Wisata Batu.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pt-10 space-y-12">
        
        {/* SECTION 1: KEPEMIMPINAN (WALIKOTA & WAKIL WALIKOTA) */}
        <section className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8">
          <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-3">
            <FaUserTie className="h-5 w-5 text-gray-800" />
            <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
              Pimpinan Daerah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CARD WALIKOTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
              <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded border-2 border-dashed border-gray-400 bg-gray-200">
                <img
                  src="/images/hero1.png"
                  alt="Walikota Batu"
                  className="h-full w-full object-cover grayscale opacity-80"
                />
                <div className="absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[9px] text-white uppercase">
                  [ Foto ]
                </div>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">
                  Walikota Batu
                </span>
                <h3 className="mt-1 text-lg font-bold uppercase text-gray-900">
                  [ Nama Walikota ]
                </h3>
                <div className="mt-4 pt-3 border-t border-gray-300">
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    "Fokus pada transformasi layanan digital terpadu dan
                    pengembangan ekosistem pariwisata ramah lingkungan."
                  </p>
                </div>
              </div>
            </div>

            {/* CARD WAKIL WALIKOTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
              <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded border-2 border-dashed border-gray-400 bg-gray-200">
                <img
                  src="/images/hero2.png"
                  alt="Wakil Walikota Batu"
                  className="h-full w-full object-cover grayscale opacity-80"
                />
                <div className="absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[9px] text-white uppercase">
                  [ Foto ]
                </div>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">
                  Wakil Walikota Batu
                </span>
                <h3 className="mt-1 text-lg font-bold uppercase text-gray-900">
                  [ Nama Wakil Walikota ]
                </h3>
                <div className="mt-4 pt-3 border-t border-gray-300">
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    "Mengoptimalkan kemitraan UMKM pertanian dan peningkatan
                    kualitas SDM masyarakat lokal."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* SECTION 2: VISI & MISI DAERAH */}
        <section className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8">
          <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-3">
            <FaLandmark className="h-5 w-5 text-gray-800" />
            <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
              Visi & Misi Daerah
            </h2>
          </div>

          <div className="space-y-6">
            {/* VISI */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Visi Kota Batu:
              </span>
              <p className="mt-2 text-sm font-semibold text-gray-900 leading-relaxed bg-gray-50 p-4 rounded border border-gray-200">
                "Terwujudnya Kota Batu yang Mandiri, Sejahtera, Daya Saing Berkelanjutan, dan Berbudaya berbasis Pariwisata dan Agrobisnis."
              </p>
            </div>

            {/* MISI */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Misi Utama:
              </span>
              <ul className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                <li className="flex items-start gap-3 rounded border border-gray-200 bg-gray-50 p-3.5">
                  <FaCheckCircle className="mt-0.5 text-gray-800 shrink-0 h-4 w-4" />
                  <span>
                    Meningkatkan kualitas pelayanan publik secara digital dan transparan.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded border border-gray-200 bg-gray-50 p-3.5">
                  <FaCheckCircle className="mt-0.5 text-gray-800 shrink-0 h-4 w-4" />
                  <span>
                    Mengembangkan potensi pariwisata alam dan kebudayaan daerah.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded border border-gray-200 bg-gray-50 p-3.5">
                  <FaCheckCircle className="mt-0.5 text-gray-800 shrink-0 h-4 w-4" />
                  <span>
                    Pemberdayaan ekonomi masyarakat berbasis produk hortikultura dan UMKM.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: WIREFRAME MAP & GEOGRAFIS */}
        <section className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8">
          <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 text-gray-800" />
            <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
              Peta Geografis & Wilayah
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* WIREFRAME MAP PLACEHOLDER */}
            <div className="lg:col-span-2 relative h-[320px] sm:h-[400px] w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-500 bg-gray-200 flex flex-col items-center justify-center p-6 text-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

              <FaMapMarkerAlt className="h-12 w-12 text-gray-500 mb-3 animate-bounce" />
              <span className="font-bold text-sm uppercase text-gray-800">
                [ Wireframe Interactive Map / GIS Kota Batu ]
              </span>
              <p className="mt-1 text-xs text-gray-500 max-w-md">
                Fitur pemetaan wilayah kecamatan (Batu, Bumiaji, Junrejo),
                lokasi instansi, dan titik objek pariwisata.
              </p>

              <button className="mt-4 rounded border border-gray-800 bg-white px-4 py-2 text-xs font-bold uppercase text-gray-900 shadow hover:bg-gray-900 hover:text-white">
                Buka Peta Digital Interaktif
              </button>
            </div>

            {/* DATA STATISTIK WILAYAH */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-gray-900 border-b border-gray-200 pb-2">
                Data Wilayah Singkat
              </h3>

              <div className="rounded border border-gray-300 bg-gray-50 p-3">
                <span className="text-[10px] text-gray-500 uppercase">
                  Luas Wilayah
                </span>
                <p className="text-sm font-bold text-gray-900">199,09 km²</p>
              </div>

              <div className="rounded border border-gray-300 bg-gray-50 p-3">
                <span className="text-[10px] text-gray-500 uppercase">
                  Ketinggian
                </span>
                <p className="text-sm font-bold text-gray-900">
                  680 - 1.200 mdpl
                </p>
              </div>

              <div className="rounded border border-gray-300 bg-gray-50 p-3">
                <span className="text-[10px] text-gray-500 uppercase">
                  Suhu Rata-Rata
                </span>
                <p className="text-sm font-bold text-gray-900">18°C - 24°C</p>
              </div>

              <div className="rounded border border-gray-300 bg-gray-50 p-3">
                <span className="text-[10px] text-gray-500 uppercase">
                  Pembagian Administratif
                </span>
                <p className="text-sm font-bold text-gray-900">
                  3 Kecamatan, 19 Desa, 5 Kelurahan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SEJARAH SINGKAT KOTA BATU */}
        <section className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8">
          <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-3">
            <FaHistory className="h-5 w-5 text-gray-800" />
            <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
              Sejarah Singkat
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* TIMELINE / NARASI SEJARAH */}
            <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-800">
              <p className="font-semibold text-gray-900">
                Kota Batu telah dikenal sejak abad ke-10 sebagai kawasan
                peristirahatan kerajaan di Jawa Timur karena keindahan alam dan
                keasrian udaranya.
              </p>
              <p>
                Nama "Batu" sendiri menurut sejarah lokal berasal dari nama
                seorang pengikut Pangeran Diponegoro bernama Mbah Mbuco (Mbah
                Wastu) yang bermukim di wilayah ini dan memperkenalkan pemukiman
                serta pertanian.
              </p>
              <p>
                Awalnya Kota Batu merupakan bagian dari wilayah administratif
                Kabupaten Malang. Seiring perkembangannya yang pesat di sektor
                pariwisata dan agrobisnis, Kota Batu secara resmi ditetapkan
                sebagai kota otonom mandiri pada tanggal{" "}
                <strong>17 Oktober 2001</strong> berdasarkan UU No. 11 Tahun
                2001.
              </p>
            </div>

            {/* CARD HIGHLIGHT OTONOMI */}
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 text-center">
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">
                Hari Jadi Kota Batu
              </span>
              <h3 className="mt-2 text-3xl font-bold uppercase text-gray-900">
                17 OKTOBER
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Resmi Berdiri Sejak Tahun 2001
              </p>
              <div className="mt-4 pt-4 border-t border-dashed border-gray-300 text-[11px] text-gray-500">
                "De Kleine Zwitserland" (Swiss Kecil di Pulau Jawa)
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}