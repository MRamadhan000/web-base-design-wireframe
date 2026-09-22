import React from 'react';
import Link from 'next/link';

const VIDEO_DATA = [
  {
    id: 1,
    title: "Profil & Potensi Pariwisata Kota Batu Terbaru",
    duration: "05:20",
    date: "21 Sep 2026",
    thumbnail: "/images/hero1.png",
  },
  {
    id: 2,
    title: "Dokumentasi Liputan Inovasi Pelayanan Publik Smart City",
    duration: "03:45",
    date: "19 Sep 2026",
    thumbnail: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Keseruan Festival Seni & Budaya Pegunungan Kota Batu",
    duration: "08:12",
    date: "14 Sep 2026",
    thumbnail: "/images/hero3.png",
  },
];

export default function WireframeVideo() {
  return (
    <section className="w-full bg-slate-50 py-16 border-b border-slate-200 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION VIDEO */}
        <div className="mb-10 border-b border-slate-200 pb-6">
          {/* <span className="rounded border border-gray-400 bg-gray-200 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-700"> */}
            {/* Galeri Multimedia */}
          {/* </span> */}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 text-center">
            Video Kegiatan & Dokumentasi
          </h2>
        </div>

        {/* GRID VIDEO (MAKSIMAL 3) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VIDEO_DATA.map((video) => (
            <article
              key={video.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md"
            >
              <div>
                {/* THUMBNAIL VIDEO DENGAN PLAY BUTTON */}
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                  />
                  
                </div>

                {/* Date Publish */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600">
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
                  <span>{video.date}</span>
                </div>

                {/* Judul Video */}
                <h3 className="mt-2 line-clamp-2 text-base font-bold text-slate-900 leading-snug">
                  {video.title}
                </h3>
              </div>

              {/* Action Button Ke Halaman Detail */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/video"
                  className="inline-block w-full text-center rounded-lg border border-emerald-600 bg-white py-2 text-xs font-semibold tracking-wider text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
                >
                  Lihat Video
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON LIHAT SEMUA VIDEO */}
        <div className="mt-12 text-center">
          <Link
            href="/video"
            className="inline-block rounded-lg bg-emerald-600 px-8 py-3 text-xs font-bold tracking-wider text-white transition-colors hover:bg-emerald-700 shadow-sm"
          >
            Lihat Semua Video &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}