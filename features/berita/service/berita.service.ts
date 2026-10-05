import { ApiResponse } from "@/shared/models/api-response";
import { BeritaDetail, Berita, BeritaRelated } from "../models/berita.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IS_LOCAL = true;

const DUMMY_BERITA: BeritaDetail[] = [
  {
    id: 1,
    title:
      "Pemerintah Kota Batu Resmikan Program Inovasi Layanan Publik Digital",
    date: "20 Sep 2026",
    author: "Humas Pemkot Batu",
    image: "/images/hero1.png",
    content: [
      "BATU — Pemerintah Kota Batu secara resmi meluncurkan portal layanan publik berbasis digital terpadu guna meningkatkan efisiensi dan transparansi administrasi bagi masyarakat Kota Batu.",
      "Peluncuran program ini dipimpin langsung oleh jajaran pimpinan daerah dalam acara sosialisasi yang digelar di Balai Kota Batu. Sistem anyar ini mengintegrasikan layanan dari berbagai Dinas, mulai dari pengelolaan izin usaha (PTSP), pendaftaran kependudukan, hingga pengecekan jadwal transportasi lokal.",
      "Masyarakat kini dapat mengakses beragam dokumen publik serta melakukan pendaftaran secara online tanpa perlu datang langsung ke kantor kedinasan terkait. Langkah ini juga diharapkan mampu mendukung ekosistem Smart City Kota Batu secara berkelanjutan.",
    ],
    tags: ["Smart City", "Layanan Digital", "Pemkot Batu", "Inovasi"],
  },

  {
    id: 2,
    title: "Pengembangan Kawasan Agrowisata Unggulan Sektor Hortikultura",
    date: "18 Sep 2026",
    author: "Humas Pemkot Batu",
    image: "/images/hero2.png",
    content: [
      "BATU — Pemerintah Kota Batu terus mendorong pengembangan kawasan agrowisata sebagai salah satu sektor unggulan daerah.",
      "Pengembangan kawasan ini melibatkan berbagai pihak untuk meningkatkan potensi pertanian, pariwisata, dan ekonomi masyarakat lokal.",
      "Program tersebut diharapkan dapat memberikan nilai tambah bagi produk hortikultura sekaligus memperkuat daya tarik wisata Kota Batu.",
    ],
    tags: ["Agrowisata", "Hortikultura", "Pariwisata", "Ekonomi"],
  },

  {
    id: 3,
    title: "Persiapan Pemkot Batu Menghadapi Puncak Musim Wisata Daerah",
    date: "15 Sep 2026",
    author: "Humas Pemkot Batu",
    image: "/images/hero3.png",
    content: [
      "BATU — Pemerintah Kota Batu melakukan berbagai persiapan untuk menghadapi peningkatan jumlah wisatawan pada periode puncak musim wisata.",
      "Persiapan meliputi koordinasi transportasi, pelayanan publik, keamanan, serta pengelolaan kawasan wisata.",
      "Masyarakat dan wisatawan diharapkan dapat memperoleh pengalaman berkunjung yang aman, nyaman, dan tertib selama periode tersebut.",
    ],
    tags: ["Wisata", "Kota Batu", "Transportasi", "Pelayanan Publik"],
  },

  {
    id: 4,
    title:
      "Pemkot Batu Perkuat Program Pengelolaan Lingkungan dan Ruang Terbuka Hijau",
    date: "12 Sep 2026",
    author: "Humas Pemkot Batu",
    image: "/images/hero1.png",
    content: [
      "BATU — Pemerintah Kota Batu terus memperkuat program pengelolaan lingkungan melalui peningkatan kualitas ruang terbuka hijau dan fasilitas publik di berbagai wilayah.",
      "Program ini mencakup penataan taman kota, penghijauan kawasan permukiman, serta peningkatan kesadaran masyarakat terhadap kebersihan lingkungan.",
      "Pemerintah daerah berharap kolaborasi antara masyarakat, komunitas, dan pemerintah dapat menciptakan lingkungan Kota Batu yang lebih bersih, nyaman, dan berkelanjutan.",
    ],
    tags: ["Lingkungan", "Ruang Terbuka Hijau", "Kebersihan", "Kota Batu"],
  },

  {
    id: 5,
    title:
      "Peningkatan Pelayanan Kesehatan Masyarakat Melalui Fasilitas Digital",
    date: "10 Sep 2026",
    author: "Humas Pemkot Batu",
    image: "/images/hero2.png",
    content: [
      "BATU — Pemerintah Kota Batu mengembangkan pemanfaatan teknologi digital untuk mendukung peningkatan kualitas pelayanan kesehatan masyarakat.",
      "Pemanfaatan sistem digital dilakukan untuk membantu proses administrasi, penyampaian informasi layanan, serta mempermudah masyarakat memperoleh informasi mengenai fasilitas kesehatan.",
      "Pengembangan layanan tersebut menjadi bagian dari upaya pemerintah dalam meningkatkan akses dan kualitas pelayanan publik berbasis teknologi.",
    ],
    tags: ["Kesehatan", "Layanan Digital", "Pelayanan Publik", "Teknologi"],
  },

  {
    id: 6,
    title: "Kota Batu Dorong Pengembangan UMKM dan Ekonomi Kreatif Lokal",
    date: "8 Sep 2026",
    author: "Humas Pemkot Batu",
    image: "/images/hero3.png",
    content: [
      "BATU — Pemerintah Kota Batu terus mendorong pertumbuhan usaha mikro, kecil, dan menengah serta sektor ekonomi kreatif sebagai bagian dari penguatan ekonomi masyarakat.",
      "Berbagai kegiatan dilakukan melalui pelatihan, pendampingan pelaku usaha, promosi produk lokal, serta pengembangan pemasaran berbasis digital.",
      "Program tersebut diharapkan dapat membantu pelaku UMKM memperluas jangkauan pasar sekaligus meningkatkan daya saing produk unggulan Kota Batu.",
    ],
    tags: ["UMKM", "Ekonomi Kreatif", "Produk Lokal", "Pemberdayaan"],
  },
];

export async function getLatestBerita(): Promise<ApiResponse<Berita[]>> {
  if (IS_LOCAL) {
    const data = DUMMY_BERITA.slice(0, 3).map(({ id, title, date, image }) => ({
      id,
      title,
      date,
      image,
    }));

    return new ApiResponse(data, "Berita terbaru berhasil dimuat");
  }

  const response = await fetch(`${API_BASE_URL}/berita/latest`);

  if (!response.ok) {
    throw new Error("Gagal mengambil berita terbaru");
  }

  return response.json();
}

export async function getAllBerita(): Promise<ApiResponse<Berita[]>> {
  if (IS_LOCAL) {
    const data = DUMMY_BERITA.map(({ id, title, date, image }) => ({
      id,
      title,
      date,
      image,
    }));

    return new ApiResponse(data, "Daftar berita berhasil dimuat");
  }

  const response = await fetch(`${API_BASE_URL}/berita`);

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar berita");
  }

  return response.json();
}

export async function getBeritaById(
  id: number,
): Promise<ApiResponse<BeritaDetail | null>> {
  if (IS_LOCAL) {
    const data = DUMMY_BERITA.find((berita) => berita.id === id) ?? null;

    return new ApiResponse(
      data,
      data ? "Detail berita berhasil dimuat" : "Berita tidak ditemukan",
    );
  }

  const response = await fetch(`${API_BASE_URL}/berita/${id}`);

  if (!response.ok) {
    throw new Error("Gagal mengambil detail berita");
  }

  return response.json();
}

export async function getRelatedBerita(
  id: number,
): Promise<ApiResponse<BeritaRelated[]>> {
  if (IS_LOCAL) {
    const data = DUMMY_BERITA.filter((berita) => berita.id !== id)
      .slice(0, 2)
      .map(({ id, title, date, image }) => ({
        id,
        title,
        date,
        image,
      }));

    return new ApiResponse(data, "Berita terkait berhasil dimuat");
  }

  const response = await fetch(`${API_BASE_URL}/berita/${id}/related`);

  if (!response.ok) {
    throw new Error("Gagal mengambil berita terkait");
  }

  return response.json();
}
