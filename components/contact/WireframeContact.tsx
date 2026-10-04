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
    <div className="w-full bg-background min-h-screen font-mono text-black pb-16">
      
      {/* BREADCRUMB & BACK BUTTON */}
      <div className="w-full bg-surface border-b-2 border-dashed border-border py-4 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded border border-border bg-accent-soft px-3 py-1.5 font-bold uppercase transition-colors hover:bg-black hover:text-white"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      {/* HEADER SECTION */}
      <section className="w-full bg-surface border-b-2 border-dashed border-border py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <span className="rounded border border-border bg-accent-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-black">
            Pusat Bantuan & Layanan Informasi
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-black">
            Hubungi Pemkot Batu
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-muted leading-relaxed">
            Sampaikan saran, pertanyaan, atau permohonan informasi resmi secara langsung kepada Balai Kota / Instansi Terkait Kota Batu.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pt-10 space-y-12">

        {/* INFO KONTAK GRID (4 CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border-2 border-dashed border-border bg-surface p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft border border-border text-black">
              <FaMapMarkerAlt className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-black">Alamat Kantor</h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Balai Kota Among Tani, Jl. Panglima Sudirman No. 507, Pesanggrahan, Kec. Batu, Kota Batu
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-border bg-surface p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft border border-border text-black">
              <FaPhoneAlt className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-black">Telepon / Fax</h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              (0341) 5025555 <br />
              (0341) 5025777 (Fax)
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-border bg-surface p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft border border-border text-black">
              <FaEnvelope className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-black">Email Resmi</h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              info@batukota.go.id <br />
              humas@batukota.go.id
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-border bg-surface p-6 text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft border border-border text-black">
              <FaClock className="h-5 w-5" />
            </div>
            <h3 className="font-bold uppercase text-sm text-black">Jam Layanan</h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Senin - Jumat <br />
              08:00 - 16:00 WIB
            </p>
          </div>
        </div>

        {/* SECTION FORM & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* FORM KIRIM PESAN */}
          <section className="rounded-lg border-2 border-dashed border-border bg-surface p-6 sm:p-8">
            <div className="border-b border-border pb-4 mb-6 flex items-center gap-3">
              <FaPaperPlane className="h-5 w-5 text-black" />
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                Kirim Pesan / Aspirasi
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-black mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama..."
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-xs focus:border-border focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-black mb-1">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-xs focus:border-border focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-black mb-1">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    placeholder="08123456..."
                    value={formData.telepon}
                    onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-xs focus:border-border focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-black mb-1">
                    Subjek Pesan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pertanyaan Informasi"
                    value={formData.subjek}
                    onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-xs focus:border-border focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-black mb-1">
                  Isi Pesan / Pertanyaan *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan pesan lengkap Anda..."
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className="w-full rounded border border-border bg-background px-3 py-2 text-xs focus:border-border focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded border border-border bg-black py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-soft"
              >
                Kirim Pesan Sekarang
              </button>
            </form>
          </section>

          {/* WIREFRAME MAP LOKASI BALAI KOTA */}
          <section className="rounded-lg border-2 border-dashed border-border bg-surface p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="border-b border-border pb-4 mb-6 flex items-center gap-3">
                <FaBuilding className="h-5 w-5 text-black" />
                <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                  Lokasi Balai Kota
                </h2>
              </div>

              {/* MAP PLACEHOLDER */}
              <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden rounded border-2 border-dashed border-border bg-accent-soft flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                <FaMapMarkerAlt className="h-10 w-10 text-muted mb-2 animate-bounce" />
                <span className="font-bold text-xs uppercase text-black">
                  [ Embed Google Maps / Peta Balai Kota Among Tani ]
                </span>
                <p className="mt-1 text-[11px] text-muted">
                  Jl. Panglima Sudirman No. 507, Kota Batu
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border text-xs text-muted flex items-center justify-between">
              <span>Koordinat: -7.8712, 112.5271</span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="font-bold uppercase text-black underline hover:no-underline"
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