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
    <section className="w-full bg-gray-50 py-16 border-b-2 border-dashed border-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION VIDEO */}
        <div className="mb-10 border-b border-gray-300 pb-6">
          {/* <span className="rounded border border-gray-400 bg-gray-200 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-700"> */}
            {/* Galeri Multimedia */}
          {/* </span> */}
          <h2 className="mt-3 font-mono text-3xl font-bold uppercase tracking-tight text-gray-900">
            Video Kegiatan & Dokumentasi
          </h2>
        </div>

        {/* GRID VIDEO (MAKSIMAL 3) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VIDEO_DATA.map((video) => (
            <article
              key={video.id}
              className="group flex flex-col justify-between rounded-lg border-2 border-dashed border-gray-400 bg-white p-4 transition-all hover:border-gray-800"
            >
              <div>
                {/* THUMBNAIL VIDEO DENGAN PLAY BUTTON */}
                <div className="relative h-48 w-full overflow-hidden rounded border border-gray-300 bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover grayscale opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
                  />
                  
                  {/* Overlay Wireframe Label */}
                  <div className="absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] text-white uppercase backdrop-blur-sm">
                    [ Thumbnail Video ]
                  </div>

                  {/* Badge Durasi Video */}
                  <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 font-mono text-[11px] text-white">
                    {video.duration}
                  </div>

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-black/60 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                      <svg className="ml-0.5 h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
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
                  <span>{video.date}</span>
                </div>

                {/* Judul Video */}
                <h3 className="mt-2 line-clamp-2 font-mono text-base font-bold uppercase leading-snug text-gray-900">
                  {video.title}
                </h3>
              </div>

              {/* Action Button Ke Halaman Detail */}
              <div className="mt-6 pt-4 border-t border-gray-300">
                <Link
                  href="/video"
                  className="inline-block w-full text-center rounded border border-gray-800 bg-white py-2 font-mono text-xs font-semibold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
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
            className="inline-block rounded border-2 border-dashed border-gray-800 bg-white px-8 py-3 font-mono text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Lihat Semua Video &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}