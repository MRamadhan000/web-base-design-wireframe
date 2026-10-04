"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { HiOutlineBuildingOffice2, HiOutlineHomeModern, HiOutlineMap } from "react-icons/hi2";

export default function ProfileDaerahPage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased text-black">
      {/* HEADER / HERO PAGE (PUTIH CLEAN TANPA ORNAMEN) */}
      <section className="border-b border-border/80 bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Beranda
            </Link>
            <FaChevronRight className="h-2.5 w-2.5 text-muted-light" />
            <span className="font-semibold text-primary">Profil Daerah</span>
          </nav>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Profil <span className="text-primary">Daerah</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Mengenal Kota Batu melalui pemimpin, wilayah, visi pembangunan,
              dan perjalanan sejarahnya.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {/* ================= PEMIMPIN ================= */}
        <section>
          <SectionTitle
            number="01"
            title="Pemimpin Daerah"
            description="Pimpinan daerah yang memimpin dan mengarahkan pembangunan Kota Batu."
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <LeaderCard
              role="Walikota Batu"
              name="Nama Walikota Batu"
              quote="Bersama masyarakat, kita wujudkan Kota Batu yang lebih maju, sejahtera, dan berkelanjutan."
            />

            <LeaderCard
              role="Wakil Walikota Batu"
              name="Nama Wakil Walikota Batu"
              quote="Kolaborasi dan inovasi menjadi bagian penting dalam membangun Kota Batu."
            />
          </div>
        </section>

        {/* ================= VISI MISI ================= */}
        <section className="mt-16">
          <SectionTitle
            number="02"
            title="Visi & Misi Pembangunan"
            description="Arah dan tujuan pembangunan Kota Batu untuk masa depan yang lebih baik."
          />

          <div className="mt-7 grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-[0.9fr_1.4fr]">
            {/* Vision */}
            <div className="relative overflow-hidden bg-primary p-7 text-white sm:p-9">
              <div className="absolute -bottom-8 -right-5 text-[120px] font-black leading-none text-white/5">
                BATU
              </div>

              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-surface/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Visi Kota Batu
                </span>

                <h3 className="mt-6 max-w-md text-2xl font-bold leading-relaxed sm:text-3xl">
                  “Terwujudnya Kota Batu yang Mandiri, Sejahtera, Berdaya Saing
                  dan Berkelanjutan.”
                </h3>

                <div className="mt-8 h-px w-20 bg-accent" />

                <p className="mt-5 max-w-md text-xs leading-6 text-accent">
                  Visi menjadi arah utama dalam pembangunan dan pelayanan
                  masyarakat Kota Batu.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-accent-soft p-7 sm:p-9">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Misi Strategis Daerah
                </p>
              </div>

              <div className="space-y-1">
                <MissionItem
                  number="01"
                  title="Meningkatkan kualitas pelayanan publik"
                  description="Pelayanan publik yang mudah, cepat, transparan, dan berkualitas."
                />

                <MissionItem
                  number="02"
                  title="Mengembangkan potensi pariwisata"
                  description="Mengembangkan potensi wisata alam dan atraksi budaya secara berkelanjutan."
                />

                <MissionItem
                  number="03"
                  title="Mendorong pemberdayaan ekonomi warga"
                  description="Mendorong pertanian, UMKM, industri kreatif, dan sektor pariwisata."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= GEOGRAFIS ================= */}
        <section className="mt-16">
          <SectionTitle
            number="03"
            title="Wilayah & Geografis"
            description="Letak, luas, dan kondisi geografis Kota Batu."
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Map Placeholder */}
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-border bg-black">
              {/* fake map pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
              </div>

              <div className="relative flex h-full flex-col justify-between p-7 text-white">
                <div>
                  <span className="rounded-full bg-primary-light/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-accent">
                    Sistem Informasi Geografis
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    Peta Wilayah Kota Batu
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-muted-light">
                    Eksplorasi wilayah Kota Batu berdasarkan kecamatan,
                    kelurahan, jaringan jalan, dan informasi geografis.
                  </p>
                </div>

                {/* Empty map */}
                <div className="absolute inset-x-0 top-20 bottom-16 flex items-center justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-dashed border-primary-light/50">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-primary-light/40 text-xs text-muted-light">
                      MAP
                    </div>
                  </div>
                </div>

                <button className="relative z-10 w-fit rounded-lg bg-primary-light px-4 py-2.5 text-xs font-bold text-white transition hover:bg-primary-light">
                  Lihat Peta Interaktif →
                </button>
              </div>
            </div>

            {/* Geographic data */}
            <div className="rounded-2xl border border-border bg-surface p-7">
              <div className="mb-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Data Geografis
                </p>

                <h3 className="mt-2 text-xl font-bold text-black">
                  Kota Batu
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <GeoStat
                  label="Luas Wilayah"
                  value="199,09"
                  unit="km²"
                />

                <GeoStat
                  label="Ketinggian"
                  value="680 – 1.200"
                  unit="mdpl"
                />

                <GeoStat
                  label="Suhu Rata-rata"
                  value="18°C – 24°C"
                  unit=""
                />

                <GeoStat
                  label="Administratif"
                  value="3"
                  unit="Kecamatan"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SEJARAH ================= */}
        <section className="mt-16">
          <SectionTitle
            number="04"
            title="Sejarah Singkat"
            description="Perjalanan Kota Batu dari masa lalu hingga menjadi kota yang terus berkembang."
          />

          <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Text */}
              <div className="p-7 sm:p-9">
                <p className="text-sm leading-7 text-muted">
                  Kota Batu dikenal sebagai kawasan peristirahatan dengan
                  kondisi geografis yang sejuk serta memiliki potensi pertanian
                  dan pariwisata.
                </p>

                <p className="mt-5 text-sm leading-7 text-muted">
                  Pada <strong className="text-black">17 Oktober 2001</strong>,
                  Kota Batu resmi berdiri sebagai daerah otonom berdasarkan
                  Undang-Undang Nomor 11 Tahun 2001.
                </p>

                <button className="mt-7 rounded-lg bg-primary px-5 py-3 text-xs font-bold text-white transition hover:bg-primary-dark">
                  Baca Sejarah Lengkap →
                </button>
              </div>

              {/* Timeline */}
              <div className="flex items-center bg-accent-soft p-7 sm:p-9">
                <div className="relative border-l-2 border-accent pl-7">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-accent-soft bg-primary" />

                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    17 Oktober 2001
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-black">
                    Kota Batu resmi berdiri
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-muted">
                    Kota Batu menjadi daerah otonom yang terpisah dari
                    Kabupaten Malang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BATU DALAM ANGKA ================= */}
        <section className="mt-16">
          <SectionTitle
            number="05"
            title="Batu dalam Angka"
            description="Data penting yang menggambarkan kondisi Kota Batu."
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NumberCard
              value="199,09"
              unit="km²"
              label="Luas Wilayah"
              icon={<HiOutlineMap className="h-5 w-5" />}
            />

            <NumberCard
              value="3"
              unit="Kecamatan"
              label="Wilayah Administratif"
              icon={<HiOutlineBuildingOffice2 className="h-5 w-5" />}
            />

            <NumberCard
              value="24"
              unit="Desa / Kelurahan"
              label="Desa & Kelurahan"
              icon={<HiOutlineHomeModern className="h-5 w-5" />}
            />

            <NumberCard
              value="680 – 1.200"
              unit="mdpl"
              label="Ketinggian Wilayah"
              icon={<HiOutlineGlobeAlt className="h-5 w-5" />}
            />
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}
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

/* =========================================================
   COMPONENTS
========================================================= */

function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary sm:flex">
        {number}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            {title}
          </h2>

          <div className="hidden h-px w-16 bg-primary-light sm:block" />
        </div>

        <p className="mt-1.5 text-xs leading-5 text-muted sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

function LeaderCard({
  role,
  name,
  quote,
}: {
  role: string;
  name: string;
  quote: string;
}) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-primary/5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Image Placeholder */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-accent-soft to-accent-soft sm:h-40 sm:w-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface text-xl text-muted-light shadow-sm">
                👤
              </div>
              <p className="mt-2 text-[9px] font-medium uppercase tracking-wider text-muted-light">
                Foto
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <span className="w-fit rounded-full bg-accent px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-primary">
            {role}
          </span>

          <h3 className="mt-3 text-lg font-bold text-black">
            {name}
          </h3>

          <p className="mt-2 text-xs italic leading-5 text-muted">
            “{quote}”
          </p>

          <button className="mt-auto pt-4 text-left text-xs font-bold text-primary transition group-hover:text-primary-light">
            Lihat Profil →
          </button>
        </div>
      </div>
    </article>
  );
}

function MissionItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex gap-4 border-b border-primary/10 py-5 last:border-b-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
        {number}
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-sm font-bold text-black">{title}</h4>
          <span className="text-primary">→</span>
        </div>

        <p className="mt-1.5 text-xs leading-5 text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

function GeoStat({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <p className="text-[9px] font-bold uppercase tracking-wider text-muted-light">
        {label}
      </p>

      <div className="mt-2 flex flex-wrap items-end gap-1">
        <span className="text-xl font-bold tracking-tight text-black">
          {value}
        </span>

        {unit && (
          <span className="pb-0.5 text-[10px] font-medium text-muted-light">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

function NumberCard({
  value,
  unit,
  label,
  icon,
}: {
  value: string;
  unit: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-primary/5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-end gap-1">
          <span className="text-2xl font-bold tracking-tight text-black">
            {value}
          </span>

          <span className="pb-1 text-[10px] font-medium text-muted-light">
            {unit}
          </span>
        </div>

        <p className="mt-2 text-xs font-medium text-muted">{label}</p>
      </div>
    </div>
  );
}