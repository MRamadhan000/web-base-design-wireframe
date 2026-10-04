"use client";

import Link from "next/link";
import { FaArrowRight, FaImage } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";

import { GaleriGrid } from "../components/GaleriGrid";
import { useGaleriViewModel } from "../hooks/useGaleriViewModel";

export function GaleriPreviewSection() {
  const {
    previewGaleri,
    isLoadingPreview,
    errorPreview,
    refetchPreviewGaleri,
  } = useGaleriViewModel();

  if (isLoadingPreview) {
    return (
      <section className="w-full bg-slate-50 py-16">
        <LoadingState message="Loading galeri..." />
      </section>
    );
  }

  if (errorPreview) {
    return (
      <section className="w-full bg-slate-50 py-16">
        <ErrorState
          message="Gagal mengambil galeri foto."
          onRetry={() => refetchPreviewGaleri()}
        />
      </section>
    );
  }

  return (
    <section className="w-full border-b border-slate-200 bg-slate-50 py-16 font-sans antialiased">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Galeri Kota Batu
          </h2>
        </div>

        <GaleriGrid items={previewGaleri} preview />

        <div className="mt-12 text-center">
          <Link
            href="/galeri"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-xs font-bold tracking-wider text-white shadow-sm transition-all hover:bg-emerald-700 active:scale-95"
          >
            <FaImage className="h-3.5 w-3.5" />
            <span>Jelajahi Galeri Foto</span>
            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}