import {
  FaHospital,
  FaBus,
  FaBuilding,
  FaIdCard,
  FaFileAlt,
  FaTree,
  FaExclamationTriangle,
  FaStore,
} from "react-icons/fa";
import { QuickActionItem } from "./quick-action.types";

export const QUICK_ACTIONS_DATA: QuickActionItem[] = [
  {
    id: 1,
    title: "Layanan Kesehatan",
    description: "RSUD & Puskesmas",
    icon: FaHospital,
    href: "/layanan/kesehatan",
  },
  {
    id: 2,
    title: "Transportasi",
    description: "Jadwal & Rute Angkot",
    icon: FaBus,
    href: "/layanan/transportasi",
  },
  {
    id: 3,
    title: "Perizinan",
    description: "PTSP & Usaha Lokal",
    icon: FaBuilding,
    href: "/layanan/perizinan",
  },
  {
    id: 4,
    title: "Kependudukan",
    description: "KTP, KK & Akta",
    icon: FaIdCard,
    href: "/layanan/kependudukan",
  },
  {
    id: 5,
    title: "Pajak Daerah",
    description: "PBB & Retribusi",
    icon: FaFileAlt,
    href: "/layanan/pajak",
  },
  {
    id: 6,
    title: "Info Wisata",
    description: "Destinasi & Tiket",
    icon: FaTree,
    href: "/layanan/wisata",
  },
  {
    id: 7,
    title: "Lapor / Aduan",
    description: "Pengaduan Warga",
    icon: FaExclamationTriangle,
    href: "/layanan/pengaduan",
  },
  {
    id: 8,
    title: "Lapaktani & UMKM",
    description: "Pasar Digital Batu",
    icon: FaStore,
    href: "/layanan/umkm",
  },
];
