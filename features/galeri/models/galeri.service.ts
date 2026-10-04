import { ApiResponse } from "@/shared/models/api-response";

import { GaleriItem } from "./galeri.types";

const ALL_GALLERY_DATA: GaleriItem[] = [
  {
    id: 1,
    title: "Festival Bunga & Agrowisata Kota Batu",
    category: "Event Daerah",
    image: "/images/hero1.png",
    previewAspect: "md:col-span-1 md:row-span-2 h-[416px]",
  },
  {
    id: 2,
    title: "Suasana Malam Alun-Alun Kota Batu",
    category: "Pariwisata",
    image: "/images/hero2.png",
    previewAspect: "md:col-span-1 md:row-span-1 h-[200px]",
  },
  {
    id: 3,
    title: "Pelayanan Publik Terpadu Balai Kota",
    category: "Dokumentasi",
    image: "/images/hero3.png",
    previewAspect: "md:col-span-1 md:row-span-1 h-[200px]",
  },
  {
    id: 4,
    title: "Kegiatan Kebudayaan & Pertunjukan Seni Lokal",
    category: "Seni & Budaya",
    image: "/images/hero1.png",
    previewAspect: "md:col-span-1 md:row-span-2 h-[416px]",
  },
  {
    id: 5,
    title: "Panorama Pegunungan & Keindahan Alam Batu",
    category: "Pariwisata",
    image: "/images/hero2.png",
    previewAspect: "md:col-span-2 md:row-span-1 h-[200px]",
  },
  {
    id: 6,
    title: "Peresmian Infrastruktur & Fasilitas Umum Baru",
    category: "Dokumentasi",
    image: "/images/hero3.png",
    previewAspect: "md:col-span-2 md:row-span-1 h-[200px]",
  },
  {
    id: 7,
    title: "Pemberdayaan Sentra Olahan UMKM",
    category: "Ekonomi Kreatif",
    image: "/images/hero1.png",
    previewAspect: "md:col-span-2 md:row-span-1 h-[200px]",
  },
  {
    id: 8,
    title: "Panen Raya Komoditas Hortikultura & Apel",
    category: "Pertanian",
    image: "/images/hero2.png",
  },
  {
    id: 9,
    title: "Edukasi Kebersihan & Pengelolaan Lingkungan",
    category: "Lingkungan",
    image: "/images/hero3.png",
  },
];

export async function getAllGaleri(): Promise<ApiResponse<GaleriItem[]>> {
  return new ApiResponse(ALL_GALLERY_DATA, "Galeri berhasil dimuat");
}

export async function getPreviewGaleri(): Promise<ApiResponse<GaleriItem[]>> {
  return new ApiResponse(
    ALL_GALLERY_DATA.filter((item) => item.previewAspect),
    "Galeri pilihan berhasil dimuat",
  );
}