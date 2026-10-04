"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";

import { GaleriGrid } from "../components/GaleriGrid";
import { useGaleriViewModel } from "../hooks/useGaleriViewModel";

export function GaleriPageView() {
  const { allGaleri, isLoadingAll, errorAll, refetchAllGaleri } =
    useGaleriViewModel();

  if (isLoadingAll) {
    return <LoadingState message="Loading galeri..." />;
  }

  if (errorAll) {
    return (
      <ErrorState
        message="Gagal mengambil galeri foto."
        onRetry={() => refetchAllGaleri()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
        <Container>
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="transition-colors hover:text-emerald-600">
              Beranda
            </Link>
            <FaChevronRight className="h-2.5 w-2.5 text-slate-400" />
            <span className="font-semibold text-emerald-600">Galeri Foto</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Galeri Dokumentasi &{" "}
              <span className="text-emerald-600">Foto Daerah</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
              Kumpulan dokumentasi visual mengenai potensi wisata, kegiatan
              pemerintah, seni budaya, serta momen berharga di Kota Batu.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <GaleriGrid items={allGaleri} />

          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-400"
            >
              ← Sebelumnya
            </button>
            <button
              type="button"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-xs"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-600"
            >
              2
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-600"
            >
              Selanjutnya →
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}