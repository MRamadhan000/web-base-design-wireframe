"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { BeritaList } from "../components/BeritaList";
import { useBeritaViewModel } from "../hooks/useBeritaViewModel";

export function BeritaPageView() {
  const { allBerita, isLoadingAll, errorAll, refetchAllBerita } =
    useBeritaViewModel();

  if (isLoadingAll) {
    return <LoadingState message="Loading berita..." />;
  }

  if (errorAll) {
    return (
      <ErrorState
        message={
          errorAll instanceof Error
            ? errorAll.message
            : "Gagal mengambil berita."
        }
        onRetry={() => refetchAllBerita()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-black">
      {/* HEADER */}
      <section className="border-b border-border/80 bg-surface py-12 md:py-16">
        <Container>
          <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Beranda
            </Link>

            <FaChevronRight className="h-2.5 w-2.5 text-muted-light" />

            <span className="font-semibold text-primary">
              Berita & Pengumuman
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Berita &{" "}
              <span className="text-primary">Informasi Publik</span>
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Akses cepat dan transparan ke seluruh rilisan berita resmi,
              pengumuman, serta dokumentasi program kerja Pemerintah Kota Batu.
            </p>
          </div>
        </Container>
      </section>

      {/* LIST */}
      <section className="py-12">
        <Container>
          <BeritaList beritaList={allBerita} />

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted-light"
            >
              ← Sebelumnya
            </button>

            <button
              type="button"
              className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white"
            >
              1
            </button>

            <button
              type="button"
              className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black hover:border-primary hover:text-primary"
            >
              2
            </button>

            <button
              type="button"
              className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black hover:border-primary hover:text-primary"
            >
              Selanjutnya →
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}
