import React from 'react';
import { 
  FaHospital, 
  FaBus, 
  FaBuilding, 
  FaIdCard, 
  FaFileAlt, 
  FaTree, 
  FaExclamationTriangle, 
  FaStore 
} from 'react-icons/fa';

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
    <section className="w-full bg-white py-16 border-b-2 border-dashed border-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-10 text-center">
          {/* <span className="rounded border border-gray-400 bg-gray-100 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-700"> */}
            {/* Akses Cepat */}
          {/* </span> */}
          <h2 className="mt-3 font-mono text-3xl font-bold uppercase tracking-tight text-gray-900">
            Layanan Utama Kota Batu
          </h2>
          <p className="mt-2 font-mono text-xs text-gray-500">
            [ Pilih layanan untuk menuju portal resmi ]
          </p>
        </div>

        {/* GRID 8 QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.id}
                href="#"
                className="group flex flex-col items-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-50 p-6 text-center transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 hover:shadow-md"
              >
                {/* ICON BOX */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-400 bg-white text-gray-800 transition-colors group-hover:border-gray-800 group-hover:bg-gray-900 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* TITLE & DESC */}
                <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-gray-900">
                  {action.title}
                </h3>
                {/* <p className="mt-1 font-mono text-[11px] text-gray-500">
                  {action.desc}
                </p> */}

                {/* WIREFRAME LABEL */}
                <span className="mt-3 font-mono text-[9px] uppercase tracking-widest text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
                  [ Buka Layanan ]
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}