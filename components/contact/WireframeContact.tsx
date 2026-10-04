"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

const labelClass = "block text-xs font-bold uppercase tracking-wider text-muted-light mb-1.5";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesan terkirim dari ${formData.nama}`);
    setFormData({ nama: "", email: "", telepon: "", subjek: "", pesan: "" });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Alamat Kantor",
      lines: [
        "Balai Kota Among Tani, Jl. Panglima Sudirman No. 507, Pesanggrahan, Kec. Batu, Kota Batu",
      ],
    },
    {
      icon: FaPhoneAlt,
      title: "Telepon / Fax",
      lines: ["(0341) 5025555", "(0341) 5025777 (Fax)"],
    },
    {
      icon: FaEnvelope,
      title: "Email Resmi",
      lines: ["info@batukota.go.id", "humas@batukota.go.id"],
    },
    {
      icon: FaClock,
      title: "Jam Layanan",
      lines: ["Senin - Jumat", "08:00 - 16:00 WIB"],
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen text-black pb-20 antialiased font-sans">
      {/* TOP NAVIGATION */}
      <nav className="w-full bg-surface border-b border-border/80 py-3.5 px-4 sm:px-8 sticky top-0 z-20 backdrop-blur-md bg-surface/90">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-primary transition-colors"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Beranda</span>
          </Link>
          <span className="text-xs font-medium text-muted-light">Kontak</span>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <header className="w-full bg-surface border-b border-border/80 py-12 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Pemerintah Kota Batu
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            Sampaikan saran, pertanyaan, atau permohonan informasi resmi secara langsung kepada
            Balai Kota atau instansi terkait Kota Batu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-8 pt-12 space-y-16">
        {/* SECTION 1: INFO KONTAK */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-border pb-3">
            <h2 className="text-lg font-bold tracking-tight text-black">Informasi Kontak</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="bg-surface border border-border/80 rounded-2xl p-5 shadow-xs flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {title}
                </span>
                <div className="mt-2 text-xs text-muted leading-relaxed space-y-0.5">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: FORM & LOKASI */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* FORM */}
          <div className="lg:col-span-7 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold tracking-tight text-black border-b border-border pb-3 mb-6">
              Kirim Pesan / Aspirasi
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama..."
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Alamat Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nomor Telepon</label>
                  <input
                    type="tel"
                    placeholder="08123456..."
                    value={formData.telepon}
                    onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Subjek Pesan *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pertanyaan Informasi"
                    value={formData.subjek}
                    onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Isi Pesan / Pertanyaan *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan pesan lengkap Anda..."
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* LOKASI */}
          <div className="lg:col-span-5 bg-black rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-between">
            <div className="relative z-10">
              <span className="text-xs font-semibold text-primary-light tracking-wider uppercase">
                Lokasi Kantor
              </span>
              <h3 className="text-xl font-bold mt-1">Balai Kota Among Tani</h3>
              <p className="mt-2 text-xs text-muted-light max-w-md leading-relaxed">
                Jl. Panglima Sudirman No. 507, Pesanggrahan, Kec. Batu, Kota Batu.
              </p>
              <p className="mt-3 text-xs text-muted-light">
                Koordinat: -7.8712, 112.5271
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <a
                href="https://maps.google.com/?q=-7.8712,112.5271"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary hover:bg-primary-light text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Buka di Google Maps
              </a>
            </div>

            {/* Decorative Map Pattern Grid */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          </div>
        </section>
      </main>
    </div>
  );
}