"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineIdentification,
  HiOutlineUserGroup,
  HiOutlineFaceSmile,
  HiOutlineDocumentText,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineHeart,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhone,
  HiOutlineMagnifyingGlass,
  HiOutlineEnvelope,
} from "react-icons/hi2";

const SERVICES = [
  {
    id: "01",
    title: "Penerbitan & Cetak KTP-el",
    description:
      "Permohonan cetak KTP-el baru (pemula usia 17 tahun), penggantian KTP rusak/hilang, serta aktivasi Identitas Kependudukan Digital (IKD).",
    requirements:
      "KK, Surat Kehilangan (jika hilang), KTP fisik rusak (jika ganti).",
    button: "Ajukan e-KTP →",
    visual: "e-KTP & IKD",
    visualNote: "KTP Elektronik dan Identitas Kependudukan Digital",
    icon: <HiOutlineIdentification className="h-6 w-6" />,
  },
  {
    id: "02",
    title: "Pengurusan Kartu Keluarga (KK)",
    description:
      "Layanan pembuatan KK baru, penambahan anggota keluarga (kelahiran), pengurangan anggota keluarga, serta perubahan data alamat/status.",
    requirements: "KK Lama, Akta Nikah/Lahir, Surat Pindah (jika ada).",
    button: "Ajukan Perubahan KK →",
    visual: "Kartu Keluarga",
    visualNote: "Formulir KK ber-QR Code resmi",
    icon: <HiOutlineUserGroup className="h-6 w-6" />,
  },
  {
    id: "03",
    title: "Kartu Identitas Anak (KIA)",
    description:
      "Penerbitan kartu identitas resmi bagi anak berusia 0 hingga 17 tahun kurang satu hari sebagai pemenuhan hak konstitusional anak.",
    requirements:
      "Akta Kelahiran, KK Orang Tua, Pasfoto 3x4 (untuk anak usia 5–17 tahun).",
    button: "Buat KIA Anak →",
    visual: "KIA",
    visualNote: "Kartu Identitas Anak berwarna merah",
    icon: <HiOutlineFaceSmile className="h-6 w-6" />,
  },
  {
    id: "04",
    title: "Penerbitan Akta Kelahiran",
    description:
      "Pengurusan dokumen pencatatan kelahiran bayi/anak warga Kota Batu untuk mendapatkan NIK dan kepastian hukum identitas anak.",
    requirements:
      "Surat Keterangan Lahir (Bidan/RS), KK, KTP Orang Tua, Buku Nikah.",
    button: "Urusi Akta Kelahiran →",
    visual: "Akta Kelahiran",
    visualNote: "Lembar akta kelahiran resmi",
    icon: <HiOutlineDocumentText className="h-6 w-6" />,
  },
  {
    id: "05",
    title: "Penerbitan Akta Kematian",
    description:
      "Pelaporan kematian warga Kota Batu untuk penerbitan Akta Kematian resmi sekaligus pembaruan status pada Kartu Keluarga (KK).",
    requirements:
      "Surat Keterangan Kematian (RS/Desa/Kelurahan), KTP & KK Almarhum/ah.",
    button: "Lapor Kematian →",
    visual: "Akta Kematian",
    visualNote: "Dokumen akta kematian dan pelaporan sipil",
    icon: <HiOutlineClipboardDocumentList className="h-6 w-6" />,
  },
  {
    id: "06",
    title: "Surat Pindah Datang (SKPWNI)",
    description:
      "Layanan administrasi bagi warga yang ingin pindah keluar dari Kota Batu maupun warga luar yang datang menetap di Kota Batu.",
    requirements: "KK Asli, KTP-el, Alamat tujuan lengkap.",
    button: "Ajukan Pindah / Datang →",
    visual: "SKPWNI",
    visualNote: "Dokumen kepindahan penduduk",
    icon: <HiOutlineMapPin className="h-6 w-6" />,
  },
  {
    id: "07",
    title: "Akta Perkawinan & Perceraian",
    description:
      "Pencatatan sipil perkawinan dan perceraian bagi warga non-Muslim untuk legalitas hukum negara.",
    requirements:
      "Surat Pemberkatan Gereja/Vihara/Pura, KTP, KK, Pasfoto berdampingan.",
    button: "Catat Perkawinan →",
    visual: "Akta Perkawinan",
    visualNote: "Dokumen pencatatan sipil perkawinan/perceraian",
    icon: <HiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: "08",
    title: "Konsolidasi & Update Data NIK",
    description:
      "Layanan sinkronisasi NIK yang tidak terdeteksi pada sistem BPJS, perbankan, pajak, atau layanan publik lainnya.",
    requirements: "NIK, Nomor KK, Bukti kendala layanan.",
    button: "Konsolidasi NIK →",
    visual: "Konsolidasi NIK",
    visualNote: "Bantuan konsolidasi dan update data",
    icon: <HiOutlineChatBubbleLeftRight className="h-6 w-6" />,
  },
];

export default function LayananKependudukanPage() {
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return SERVICES;

    return SERVICES.filter((service) =>
      [
        service.title,
        service.description,
        service.requirements,
        service.visual,
        service.visualNote,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-background font-sans antialiased text-black">
      <section className="border-b border-border/80 bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Beranda
            </Link>
            <FaChevronRight className="h-2.5 w-2.5 text-muted-light" />
            <span className="font-semibold text-primary">Kependudukan</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Layanan Kependudukan &{" "}
              <span className="text-primary">Catatan Sipil</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8 lg:py-8">
        <section className="mt-4">
          <label className="relative block w-full">
            <span className="sr-only">Cari layanan</span>
            <HiOutlineMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari layanan, misalnya KTP, KK, KIA..."
              className="h-11 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-muted-light focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
            />
          </label>

          {filteredServices.length > 0 ? (
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="mt-7 rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">
              <p className="text-sm font-bold text-black">
                Layanan tidak ditemukan
              </p>
              <p className="mt-2 text-xs text-muted">
                Tidak ada hasil untuk “{query}”. Coba kata kunci lain.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-5 text-xs font-bold text-primary hover:text-primary-light"
              >
                Hapus pencarian
              </button>
            </div>
          )}
        </section>

        <section className="mt-16">
          <div className="mt-7 grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-2">
            <a
              href="https://wa.me/6280000000000"
              className="group relative overflow-hidden bg-primary p-7 text-white transition hover:bg-primary-dark sm:p-9"
            >
              <FaWhatsapp className="absolute -bottom-6 -right-4 h-36 w-36 text-white/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  
                </div>
                <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                  08xx-xxxx-xxxx
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-accent">
                  Konsultasi pengajuan dokumen dan kendala data kependudukan.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-white">
                  <FaWhatsapp className="h-4 w-4 text-white" />
                  Chat WhatsApp →
                </span>
              </div>
            </a>

            <a
              href="mailto:disdukcapil@batukota.go.id"
              className="group relative overflow-hidden bg-accent-soft p-7 transition hover:bg-accent sm:p-9"
            >
              <div className="relative z-10">
                <div className="flex gap-4">
                
                </div>
                <h3 className="mt-6 break-all text-2xl font-bold text-black sm:text-3xl">
                  disdukcapil@batukota.go.id
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                  Kirim pertanyaan atau kelengkapan dokumen melalui email resmi.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-primary">
                  <HiOutlineEnvelope className="h-4 w-4" />
                  Kirim Email →
                </span>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-muted-light sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© Pemerintah Kota Batu</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">
              Informasi
            </a>
            <a href="#" className="hover:text-primary">
              Kontak
            </a>
            <a href="#" className="hover:text-primary">
              Kebijakan
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-primary/5">
      <div className="relative h-36 overflow-hidden bg-gradient-to-br from-accent-soft to-accent-soft">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-primary/70 to-primary/60" />
        <div className="relative flex h-full items-end justify-between p-5 text-white">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-accent">
              {service.visual}
            </p>
            <p className="mt-1 max-w-[220px] text-xs leading-5 text-white/80">
              {service.visualNote}
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/15 text-white backdrop-blur">
            {service.icon}
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        <h3 className="mt-3 text-lg font-bold text-black">
          {service.title}
        </h3>
        <p className="mt-2 text-xs leading-6 text-muted">
          {service.description}
        </p>
        {/* <div className="mt-4 rounded-xl border border-border bg-background p-3">
          <p className="text-[9px] font-bold uppercase tracking-wider text-muted-light">
            Persyaratan Ringkas
          </p>
          <p className="mt-1.5 text-xs leading-5 text-muted">
            {service.requirements}
          </p>
        </div> */}
        <button className="mt-5 w-fit text-left text-xs font-bold text-primary transition group-hover:text-primary-light">
          {service.button}
        </button>
      </div>
    </article>
  );
}
