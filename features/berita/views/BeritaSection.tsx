"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { useBeritaViewModel } from "../hooks/useBeritaViewModel";
import { BeritaList } from "../components/BeritaList";

export function BeritaSection() {
  const { beritaList, isLoadingLatest, errorLatest, refetchLatestBerita } =
    useBeritaViewModel();

  if (isLoadingLatest) {
    return (
      <section className="w-full bg-background py-16">
        <LoadingState message="Loading berita terbaru..." />
      </section>
    );
  }

  if (errorLatest) {
    return (
      <section className="w-full bg-background py-16">
        <ErrorState
          message="Gagal mengambil berita terbaru."
          onRetry={() => refetchLatestBerita()}
        />
      </section>
    );
  }

  return (
    <section className="w-full border-b border-border bg-background py-16 font-sans antialiased">
      <Container>
        <div className="mb-10 border-b border-border pb-6">
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-black">
            Berita & Pengumuman
          </h2>
        </div>

        <BeritaList beritaList={beritaList} />

        <div className="mt-12 text-center">
          <Link
            href="/berita"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-xs font-bold tracking-wider text-white shadow-sm transition-colors hover:bg-primary"
          >
            <span>Lihat Semua Berita</span>
            <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
