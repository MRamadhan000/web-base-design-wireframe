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

import { Container } from "@/components/ui/layout/Container";

const QUICK_ACTIONS = [
  {
    id: 1,
    title: "Layanan Kesehatan",
    desc: "RSUD & Puskesmas",
    icon: FaHospital,
  },
  {
    id: 2,
    title: "Transportasi",
    desc: "Jadwal & Rute Angkot",
    icon: FaBus,
  },
  {
    id: 3,
    title: "Perizinan",
    desc: "PTSP & Usaha Lokal",
    icon: FaBuilding,
  },
  {
    id: 4,
    title: "Kependudukan",
    desc: "KTP, KK & Akta",
    icon: FaIdCard,
  },
  {
    id: 5,
    title: "Pajak Daerah",
    desc: "PBB & Retribusi",
    icon: FaFileAlt,
  },
  {
    id: 6,
    title: "Info Wisata",
    desc: "Destinasi & Tiket",
    icon: FaTree,
  },
  {
    id: 7,
    title: "Lapor / Aduan",
    desc: "Pengaduan Warga",
    icon: FaExclamationTriangle,
  },
  {
    id: 8,
    title: "Lapaktani & UMKM",
    desc: "Pasar Digital Batu",
    icon: FaStore,
  },
];

export default function WireframeQuickAction() {
  return (
    <section className="w-full border-b border-slate-200 bg-slate-50 py-16 font-sans antialiased">
      <Container>
        {/* HEADER SECTION */}
        <div className="mb-12 text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Layanan Utama Kota Batu
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pilih layanan untuk menuju portal resmi
          </p>
        </div>

        {/* GRID 8 QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.id}
                href="/layanan"
                className="group relative flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500 hover:bg-emerald-50/20 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                {/* ICON BOX */}
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100/70 text-emerald-700 shadow-xs ring-1 ring-emerald-600/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600 group-hover:shadow-md group-hover:shadow-emerald-600/30">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base font-bold tracking-wide text-slate-900 transition-colors duration-200 group-hover:text-emerald-700">
                    {action.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
