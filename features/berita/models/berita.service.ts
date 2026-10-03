import { Berita, BeritaDetail, BeritaRelated } from "./berita.types";

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
];

export async function getLatestBerita(): Promise<Berita[]> {
  return DUMMY_BERITA.slice(0, 3).map(({ id, title, date, image }) => ({
    id,
    title,
    date,
    image,
  }));
}

export async function getAllBerita(): Promise<Berita[]> {
  return DUMMY_BERITA.map(({ id, title, date, image }) => ({
    id,
    title,
    date,
    image,
  }));
}

export async function getBeritaById(
  id: number,
): Promise<BeritaDetail | undefined> {
  return DUMMY_BERITA.find((berita) => berita.id === id);
}

export async function getRelatedBerita(id: number): Promise<BeritaRelated[]> {
  return DUMMY_BERITA.filter((berita) => berita.id !== id)
    .slice(0, 2)
    .map(({ id, title, date, image }) => ({
      id,
      title,
      date,
      image,
    }));
}
