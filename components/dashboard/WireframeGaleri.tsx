import React from 'react';

const GALLERY_DATA = [
  {
    id: 1,
    title: "Festival Bunga & Agrowisata",
    category: "Event Daerah",
    image: "/images/hero1.png",
    aspect: "md:col-span-1 md:row-span-2 h-[416px]", // Portrait Kiri
  },
  {
    id: 2,
    title: "Alun-Alun Kota Batu",
    category: "Pariwisata",
    image: "/images/hero2.png",
    aspect: "md:col-span-1 md:row-span-1 h-[200px]", // Square
  },
  {
    id: 3,
    title: "Pelayanan Publik Terpadu",
    category: "Dokumentasi",
    image: "/images/hero3.png",
    aspect: "md:col-span-1 md:row-span-1 h-[200px]", // Square Tengah Atas
  },
  {
    id: 4,
    title: "Kegiatan Kebudayaan Lokal",
    category: "Seni & Budaya",
    image: "/images/hero1.png",
    aspect: "md:col-span-1 md:row-span-2 h-[416px]", // Portrait Kanan
  },
  {
    id: 5,
    title: "Panorama Pegunungan & Alam",
    category: "Pariwisata",
    image: "/images/hero2.png",
    aspect: "md:col-span-2 md:row-span-1 h-[200px]", // Wide Landscape Tengah
  },
  {
    id: 6,
    title: "Infrastruktur Pembangunan",
    category: "Dokumentasi",
    image: "/images/hero3.png",
    aspect: "md:col-span-2 md:row-span-1 h-[200px]", // Wide Landscape Bawah Kiri
  },
  {
    id: 7,
    title: "Sentra UMKM Kota Batu",
    category: "Ekonomi Kreatif",
    image: "/images/hero1.png",
    aspect: "md:col-span-2 md:row-span-1 h-[200px]", // Wide Landscape Bawah Kanan (Pelengkap)
  },
];

export default function WireframeGaleri() {
  return (
    <section className="w-full bg-gray-50 py-16 border-b-2 border-dashed border-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-10 text-center">
          {/* <span className="rounded border border-gray-400 bg-gray-200 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-700"> */}
            {/* Dokumentasi Kegiatan */}
          {/* </span> */}
          <h2 className="mt-3 font-mono text-3xl font-bold uppercase tracking-tight text-gray-900">
            Galeri Kota Batu
          </h2>
          <p className="mt-2 font-mono text-xs text-gray-500">
            [ Hover pada foto untuk melihat detail dokumentasi ]
          </p>
        </div>

        {/* GRID PERFECT BENTO (TOTAL 7 ITEM) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg border-2 border-dashed border-gray-400 bg-gray-200 ${item.aspect}`}
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Tag Wireframe Placeholder */}
              <div className="absolute top-3 left-3 z-10 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] text-white uppercase backdrop-blur-sm transition-opacity group-hover:opacity-0">
                [ FOTO {item.id} ]
              </div>

              {/* OVERLAY TEKS (HOVER) */}
              <div className="absolute inset-0 flex flex-col justify-end bg-black/75 p-5 opacity-0 transition-opacity duration-300 backdrop-blur-[2px] group-hover:opacity-100">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-gray-300">
                  {item.category}
                </span>
                <h3 className="mt-1 font-mono text-base font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <div className="mt-3 border-t border-dashed border-gray-500 pt-2 font-mono text-[11px] text-gray-300">
                  Lihat Dokumentasi &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}