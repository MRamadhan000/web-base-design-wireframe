import { Video, VideoDetail, VideoRelated } from "./video.types";

const DUMMY_VIDEOS: VideoDetail[] = [
  {
    id: 1,
    title: "Profil & Potensi Pariwisata Kota Batu Terbaru",
    date: "21 Sep 2026",
    duration: "05:20",
    thumbnail: "/images/hero1.png",
    author: "Dinas Pariwisata & Humas Pemkot Batu",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: [
      "BATU — Video dokumentasi resmi yang menampilkan keindahan panorama alam, keanekaragaman agrowisata, serta fasilitas destinasi wisata unggulan di Kota Batu.",
      "Pemerintah Kota Batu terus mempromosikan potensi lokal dan mendukung para pelaku UMKM melalui informasi terpadu bagi wisatawan.",
      "Simak dokumentasi lengkap perkembangan pariwisata dan destinasi unggulan Kota Batu.",
    ],
    tags: ["Pariwisata", "Wisata Batu", "Agrowisata", "Dokumentasi"],
  },
  {
    id: 2,
    title: "Dokumentasi Liputan Inovasi Pelayanan Publik Smart City",
    date: "19 Sep 2026",
    duration: "03:45",
    thumbnail: "/images/hero2.png",
    author: "Humas Pemkot Batu",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: [
      "Dokumentasi inovasi pelayanan publik Kota Batu dalam mendukung layanan yang mudah diakses dan terintegrasi.",
      "Inisiatif Smart City menghubungkan teknologi dengan kebutuhan masyarakat dan peningkatan kualitas pelayanan.",
    ],
    tags: ["Smart City", "Pelayanan Publik", "Inovasi"],
  },
  {
    id: 3,
    title: "Keseruan Festival Seni & Budaya Pegunungan Kota Batu",
    date: "14 Sep 2026",
    duration: "08:12",
    thumbnail: "/images/hero3.png",
    author: "Humas Pemkot Batu",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: [
      "Festival seni dan budaya menghadirkan beragam pertunjukan serta tradisi masyarakat Kota Batu.",
      "Kegiatan ini menjadi ruang apresiasi bagi seniman lokal sekaligus memperkenalkan kekayaan budaya daerah.",
    ],
    tags: ["Seni", "Budaya", "Festival", "Kota Batu"],
  },
  {
    id: 4,
    title: "Sistem Informasi Transportasi Terpadu Angkutan Kota",
    date: "10 Sep 2026",
    duration: "05:15",
    thumbnail: "/images/hero1.png",
    author: "Humas Pemkot Batu",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: [
      "Informasi mengenai pengembangan transportasi terpadu dan layanan angkutan umum di Kota Batu.",
      "Sistem informasi ini membantu masyarakat merencanakan perjalanan dengan lebih mudah.",
    ],
    tags: ["Transportasi", "Layanan Publik", "Kota Batu"],
  },
  {
    id: 5,
    title: "Gelar Produk UMKM Unggulan dan Pasar Tani Kota Batu",
    date: "05 Sep 2026",
    duration: "07:30",
    thumbnail: "/images/hero2.png",
    author: "Dinas Koperasi dan UMKM Kota Batu",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: [
      "Gelar produk dan pasar tani mempertemukan pelaku UMKM, petani, dan masyarakat untuk mengenal produk unggulan lokal.",
      "Kegiatan ini mendukung pemasaran produk daerah serta pertumbuhan ekonomi masyarakat Kota Batu.",
    ],
    tags: ["UMKM", "Pasar Tani", "Produk Lokal"],
  },
  {
    id: 6,
    title: "Sosialisasi Pengelolaan Sampah Berbasis Komunitas",
    date: "01 Sep 2026",
    duration: "06:10",
    thumbnail: "/images/hero3.png",
    author: "Dinas Lingkungan Hidup Kota Batu",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: [
      "Sosialisasi ini mengajak masyarakat berperan aktif mengurangi dan memilah sampah dari lingkungan sekitar.",
      "Kolaborasi komunitas menjadi bagian penting dalam menjaga kebersihan dan kelestarian lingkungan Kota Batu.",
    ],
    tags: ["Lingkungan", "Pengelolaan Sampah", "Komunitas"],
  },
];

export async function getLatestVideos(): Promise<Video[]> {
  return DUMMY_VIDEOS.slice(0, 3).map(
    ({ id, title, date, duration, thumbnail }) => ({
      id,
      title,
      date,
      duration,
      thumbnail,
    }),
  );
}

export async function getAllVideos(): Promise<Video[]> {
  return DUMMY_VIDEOS.map(({ id, title, date, duration, thumbnail }) => ({
    id,
    title,
    date,
    duration,
    thumbnail,
  }));
}

export async function getVideoById(
  id: number,
): Promise<VideoDetail | undefined> {
  return DUMMY_VIDEOS.find((video) => video.id === id);
}

export async function getRelatedVideos(id: number): Promise<VideoRelated[]> {
  return DUMMY_VIDEOS.filter((video) => video.id !== id)
    .slice(0, 2)
    .map(({ id, title, date, duration, thumbnail }) => ({
      id,
      title,
      date,
      duration,
      thumbnail,
    }));
}