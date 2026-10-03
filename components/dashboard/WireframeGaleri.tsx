import Link from "next/link";
import { FaImage, FaArrowRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";

const GALLERY_DATA = [
  {
    id: 1,
    title: "Festival Bunga & Agrowisata",
    category: "Event Daerah",
    image: "/images/hero1.png",
    aspect: "md:col-span-1 md:row-span-2 h-[416px]",
  },
  {
    id: 2,
    title: "Alun-Alun Kota Batu",
    category: "Pariwisata",
    image: "/images/hero2.png",
    aspect: "md:col-span-1 md:row-span-1 h-[200px]",
  },
  {
    id: 3,
    title: "Pelayanan Publik Terpadu",
    category: "Dokumentasi",
    image: "/images/hero3.png",
    aspect: "md:col-span-1 md:row-span-1 h-[200px]",
  },
  {
    id: 4,
    title: "Kegiatan Kebudayaan Lokal",
    category: "Seni & Budaya",
    image: "/images/hero1.png",
    aspect: "md:col-span-1 md:row-span-2 h-[416px]",
  },
  {
    id: 5,
    title: "Panorama Pegunungan & Alam",
    category: "Pariwisata",
    image: "/images/hero2.png",
    aspect: "md:col-span-2 md:row-span-1 h-[200px]",
  },
  {
    id: 6,
    title: "Infrastruktur Pembangunan",
    category: "Dokumentasi",
    image: "/images/hero3.png",
    aspect: "md:col-span-2 md:row-span-1 h-[200px]",
  },
  {
    id: 7,
    title: "Sentra UMKM Kota Batu",
    category: "Ekonomi Kreatif",
    image: "/images/hero1.png",
    aspect: "md:col-span-2 md:row-span-1 h-[200px]",
  },
];

export default function WireframeGaleri() {
  return (
    <section className="w-full border-b border-slate-200 bg-slate-50 py-16 font-sans antialiased">
      <Container>
        {/* HEADER SECTION */}
        <div className="mb-10 text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Galeri Kota Batu
          </h2>
        </div>

        {/* GRID PERFECT BENTO */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-md ${item.aspect}`}
            >
              {/* GAMBAR */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY TEKS */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent p-5 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-block w-fit rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-xs">
                  {item.category}
                </span>

                <h3 className="mt-1.5 text-base font-bold leading-snug text-white">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-center gap-1.5 border-t border-slate-700/60 pt-2 text-xs font-medium text-emerald-400 transition-colors group-hover:text-emerald-300">
                  <span>Lihat Dokumentasi</span>
                  <FaArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON JELAJAHI GALERI */}
        <div className="mt-12 text-center">
          <Link
            href="/galeri"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-xs font-bold tracking-wider text-white shadow-sm transition-all hover:bg-emerald-700 active:scale-95"
          >
            <FaImage className="h-3.5 w-3.5" />

            <span>Jelajahi Galeri Foto</span>

            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
