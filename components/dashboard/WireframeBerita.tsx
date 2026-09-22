import React from 'react';
import Link from 'next/link';

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
    <section className="w-full bg-white py-16 border-b-2 border-dashed border-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION BERITA */}
        <div className="mb-10 border-b border-gray-300 pb-6">
          {/* <span className="rounded border border-gray-400 bg-gray-100 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-700">
            Informasi Terkini
          </span> */}
          <h2 className="mt-3 font-mono text-3xl font-bold uppercase tracking-tight text-gray-900">
            Berita & Pengumuman
          </h2>
        </div>

        {/* GRID BERITA (MAKSIMAL 3) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BERITA_DATA.map((berita) => (
            <article
              key={berita.id}
              className="flex flex-col justify-between rounded-lg border-2 border-dashed border-gray-400 bg-gray-50 p-4 transition-all hover:border-gray-800"
            >
              <div>
                {/* Gambar Berita */}
                <div className="relative h-48 w-full overflow-hidden rounded border border-gray-300 bg-gray-200">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="h-full w-full object-cover grayscale opacity-80 transition-all duration-300 hover:grayscale-0"
                  />
                  <div className="absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] text-white uppercase backdrop-blur-sm">
                    [ Gambar ]
                  </div>
                </div>

                {/* Date Publish */}
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-gray-500">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{berita.date}</span>
                </div>

                {/* Judul Berita */}
                <h3 className="mt-2 line-clamp-3 font-mono text-base font-bold text-gray-900 uppercase leading-snug">
                  {berita.title}
                </h3>
              </div>

              {/* Button Baca Selengkapnya */}
              <div className="mt-6 pt-4 border-t border-gray-300">
                <Link
                  href="/berita"
                  className="inline-block w-full text-center rounded border border-gray-800 bg-white py-2 font-mono text-xs font-semibold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  Baca Berita
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON LIHAT SEMUA BERITA */}
        <div className="mt-12 text-center">
          <Link
            href="/berita"
            className="inline-block rounded border-2 border-dashed border-gray-800 bg-gray-100 px-8 py-3 font-mono text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Lihat Semua Berita &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}