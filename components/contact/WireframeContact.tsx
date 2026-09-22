"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaBuilding,
} from 'react-icons/fa';

export default function WireframeContactPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesan terkirim dari ${formData.nama}`);
    setFormData({ nama: '', email: '', telepon: '', subjek: '', pesan: '' });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-mono text-gray-900 pb-16">
      
      {/* BREADCRUMB & BACK BUTTON */}
      <div className="w-full bg-white border-b-2 border-dashed border-gray-400 py-4 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded border border-gray-800 bg-gray-100 px-3 py-1.5 font-bold uppercase transition-colors hover:bg-gray-900 hover:text-white"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      {/* HEADER SECTION */}
      <section className="w-full bg-white border-b-2 border-dashed border-gray-400 py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <span className="rounded border border-gray-400 bg-gray-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
            Pusat Bantuan & Layanan Informasi
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-gray-900">
            Hubungi Pemkot Batu
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-gray-600 leading-relaxed">
            Sampaikan saran, pertanyaan, atau permohonan informasi resmi secara langsung kepada Balai Kota / Instansi Terkait Kota Batu.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pt-10 space-y-12">

        {/* INFO KONTAK GRID (4 CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 border border-gray-400 text-gray-800">
              <FaMapMarkerAlt className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-gray-900">Alamat Kantor</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Balai Kota Among Tani, Jl. Panglima Sudirman No. 507, Pesanggrahan, Kec. Batu, Kota Batu
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 border border-gray-400 text-gray-800">
              <FaPhoneAlt className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-gray-900">Telepon / Fax</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              (0341) 5025555 <br />
              (0341) 5025777 (Fax)
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 border border-gray-400 text-gray-800">
              <FaEnvelope className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-gray-900">Email Resmi</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              info@batukota.go.id <br />
              humas@batukota.go.id
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 border border-gray-400 text-gray-800">
              <FaClock className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-gray-900">Jam Layanan</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Senin - Jumat <br />
              08:00 - 16:00 WIB
            </p>
          </div>
        </div>

        {/* SECTION FORM & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* FORM KIRIM PESAN */}
          <section className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8">
            <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-3">
              <FaPaperPlane className="h-5 w-5 text-gray-800" />
              <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
                Kirim Pesan / Aspirasi
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama..."
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-xs focus:border-gray-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-xs focus:border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    placeholder="08123456..."
                    value={formData.telepon}
                    onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                    className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-xs focus:border-gray-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Subjek Pesan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pertanyaan Informasi"
                    value={formData.subjek}
                    onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                    className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-xs focus:border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Isi Pesan / Pertanyaan *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan pesan lengkap Anda..."
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-xs focus:border-gray-800 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded border border-gray-800 bg-gray-900 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gray-700"
              >
                Kirim Pesan Sekarang
              </button>
            </form>
          </section>

          {/* WIREFRAME MAP LOKASI BALAI KOTA */}
          <section className="rounded-lg border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-3">
                <FaBuilding className="h-5 w-5 text-gray-800" />
                <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
                  Lokasi Balai Kota
                </h2>
              </div>

              {/* MAP PLACEHOLDER */}
              <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden rounded border-2 border-dashed border-gray-500 bg-gray-200 flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                <FaMapMarkerAlt className="h-10 w-10 text-gray-500 mb-2 animate-bounce" />
                <span className="font-bold text-xs uppercase text-gray-800">
                  [ Embed Google Maps / Peta Balai Kota Among Tani ]
                </span>
                <p className="mt-1 text-[11px] text-gray-500">
                  Jl. Panglima Sudirman No. 507, Kota Batu
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-600 flex items-center justify-between">
              <span>Koordinat: -7.8712, 112.5271</span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="font-bold uppercase text-gray-900 underline hover:no-underline"
              >
                Buka di Maps &rarr;
              </a>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
}