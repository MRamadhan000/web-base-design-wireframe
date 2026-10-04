"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { useBeritaViewModel } from "../hooks/useBeritaViewModel";
import { BeritaDetail } from "../components/Detail/BeritaDetail";
import { BeritaSearch } from "../components/Detail/BeritaSearch";
import { BeritaRelated } from "../components/Detail/BeritaRelated";

interface BeritaDetailViewProps {
  id: number;
}

export function BeritaDetailView({ id }: BeritaDetailViewProps) {
  const {
    berita,
    relatedBerita,
    isLoadingDetail,
    errorDetail,
    refetchBeritaDetail,
  } = useBeritaViewModel(id);

  if (isLoadingDetail) {
    return (
      <section className="w-full bg-background py-16">
        <LoadingState message="Loading berita..." />
      </section>
    );
  }

  if (errorDetail || !berita) {
    return (
      <section className="w-full bg-background py-16">
        <ErrorState
          message={
            errorDetail instanceof Error
              ? errorDetail.message
              : "Berita tidak ditemukan."
          }
          onRetry={() => refetchBeritaDetail()}
        />
      </section>
    );
  }

  return (
    <section className="w-full bg-background py-8 font-sans antialiased text-black md:py-12">
      <Container>
        {/* BACK BUTTON */}
        <div className="mb-6">
          <div className="flex items-center border-b border-border pb-4">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black transition-all hover:border-primary hover:text-primary hover:shadow-sm"
            >
              <FaArrowLeft className="h-3 w-3" />
              <span>Kembali ke Berita</span>
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BeritaDetail berita={berita} />

          <aside className="space-y-6">
            <BeritaSearch />

            <BeritaRelated beritaList={relatedBerita} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
