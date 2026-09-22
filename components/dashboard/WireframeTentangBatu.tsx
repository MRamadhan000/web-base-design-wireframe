import Link from "next/link";
import React from "react";

export default function WireframeTentangBatu() {
  return (
    <section className="w-full bg-gray-50 py-16 border-b-2 border-dashed border-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* SISI KIRI: Gambar Placeholder / Frame */}
          <div className="relative">
            {/* Box Utama Gambar */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-400 bg-gray-200 shadow-sm sm:h-[450px]">
              <img
                src="/images/hero1.png"
                alt="Tentang Kota Batu"
                className="h-full w-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 rounded bg-black/70 px-3 py-1 font-mono text-xs text-white uppercase tracking-wider backdrop-blur-sm">
                [ Wireframe: Photo / Visual ]
              </div>
            </div>
          </div>

          {/* SISI KANAN: Teks Berstruktur */}
          <div className="flex flex-col justify-center">
            {/* Kategori Badge */}
            <div className="mb-3 inline-flex items-center gap-2">
              {/* <span className="rounded border border-gray-400 bg-gray-200 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-700"> */}
                {/* Profil Daerah */}
              {/* </span> */}
              {/* <span className="h-px w-8 bg-gray-400"></span> */}
            </div>

            {/* Headline */}
            <h2 className="font-mono text-3xl font-bold uppercase tracking-tight text-gray-900 sm:text-4xl">
              Kota Wisata Berdaya, <br />
              <span className="underline decoration-dashed decoration-gray-400 underline-offset-8">
                Sejuk & Inovatif
              </span>
            </h2>

            {/* Paragraf Pembuka / Lead Text */}
            <p className="mt-6 font-mono text-base font-medium leading-relaxed text-gray-800">
              Kota Batu adalah salah satu destinasi utama di Jawa Timur yang
              terkenal dengan keindahan panorama alam, keasrian udara
              pegunungan, serta ragam potensi agrowisata dan kebudayaan lokal.
            </p>

            {/* Blockquote Highlights */}
            <blockquote className="my-6 border-l-4 border-gray-800 bg-white p-4 rounded-r border-y border-r border-gray-300 font-mono text-xs leading-relaxed text-gray-600 italic">
              "Menjadi pusat pelayanan publik yang transparan, modern, serta
              mendukung pertumbuhan ekonomi kreatif dan pariwisata
              berkelanjutan."
            </blockquote>

            {/* Action Button */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/profil"
                className="rounded border-2 border-gray-800 bg-gray-900 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-gray-700"
              >
                Selengkapnya &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
