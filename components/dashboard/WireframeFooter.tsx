import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function WireframeFooter() {
  return (
    <footer className="w-full border-t-2 border-dashed border-gray-400 bg-gray-900 text-white font-mono">
      {/* SECTION ATAS: LOGO, ALAMAT, NAVIGASI, SOSMED */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* KOLOM 1: IDENTITAS PEMKOT */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-dashed border-gray-400 bg-gray-800 text-xs text-gray-300">
                LOGO
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                  PEMKOT BATU
                </h3>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Portal resmi pelayanan publik dan pusat informasi terpadu
              Pemerintah Kota Batu, Jawa Timur.
            </p>
          </div>

          {/* KOLOM 2: LAYANAN POPULER */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white underline decoration-dashed underline-offset-8">
              Layanan Publik
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  &rarr; Perizinan Online (PTSP)
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  &rarr; Info Transportasi & Angkot
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  &rarr; Layanan Kependudukan
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  &rarr; Pengaduan Warga (Lapor)
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  &rarr; Portal Pariwisata Batu
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK REKAP */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white underline decoration-dashed underline-offset-8">
              Kontak Kami
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-gray-300" />
                <span>
                  Jl. Panglima Sudirman No. 507, Kota Batu, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-gray-300" />
                <span>(0341) 5025555</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-gray-300" />
                <span>info@batukota.go.id</span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: SOSIAL MEDIA & NEWSLETTER */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white underline decoration-dashed underline-offset-8">
              Media Sosial
            </h4>
            <p className="mb-4 text-xs text-gray-400">
              Dapatkan pembaruan berita resmi Kota Batu melalui kanal kami:
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 bg-gray-800 text-gray-300 transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 bg-gray-800 text-gray-300 transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 bg-gray-800 text-gray-300 transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 bg-gray-800 text-gray-300 transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="YouTube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION BAWAH: COPYRIGHT */}
      <div className="border-t border-dashed border-gray-700 bg-black/40 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-gray-400 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Pemerintah Kota Batu. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 text-[11px]">
            <a href="#" className="hover:underline">
              Kebijakan Privasi
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Syarat & Ketentuan
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Peta Situs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
