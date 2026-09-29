import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 font-sans">
      {/* SECTION ATAS: LOGO, ALAMAT, NAVIGASI, SOSMED */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* KOLOM 1: IDENTITAS PEMKOT */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* Logo Container */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-md">
                <FaBuilding className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wide text-white">
                  PEMKOT BATU
                </h3>
                <span className="text-[11px] text-gray-400 block tracking-wider uppercase">
                  Jawa Timur
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Portal resmi pelayanan publik dan pusat informasi terpadu
              Pemerintah Kota Batu, Jawa Timur.
            </p>
          </div>

          {/* KOLOM 2: LAYANAN POPULER */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Layanan Publik
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-emerald-400">
                  Perizinan Online (PTSP)
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-emerald-400">
                  Info Transportasi & Angkot
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-emerald-400">
                  Layanan Kependudukan
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-emerald-400">
                  Pengaduan Warga (Lapor)
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-emerald-400">
                  Portal Pariwisata Batu
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK REKAP */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontak Kami
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-emerald-500" />
                <span className="leading-relaxed">
                  Jl. Panglima Sudirman No. 507, Kota Batu, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-emerald-500" />
                <span>(0341) 5025555</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-emerald-500" />
                <span>info@batukota.go.id</span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: SOSIAL MEDIA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Media Sosial
            </h4>
            <p className="mb-4 text-xs text-gray-400 leading-relaxed">
              Dapatkan pembaruan berita resmi Kota Batu melalui kanal kami:
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-emerald-600 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-emerald-600 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-emerald-600 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-emerald-600 hover:text-white"
                aria-label="YouTube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION BAWAH: COPYRIGHT */}
      <div className="bg-black/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Pemerintah Kota Batu. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 text-[11px] text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Kebijakan Privasi
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-white">
              Syarat & Ketentuan
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-white">
              Peta Situs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}