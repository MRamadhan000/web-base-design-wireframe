"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { BeritaDetail } from "../components/Detail/BeritaDetail";
import { BeritaDetailSkeleton } from "../components/Detail/BeritaDetailSkeleton";

import { useBeritaDetailBySlugViewModel } from "../hooks/useBeritaDetailBySlugViewModel";

interface BeritaDetailViewProps {
  slug: string;
}

export function BeritaDetailView({ slug }: BeritaDetailViewProps) {
  const router = useRouter();

  const {
    berita,
    isLoading: isLoadingDetail,
    error: errorDetail,
    refetchDetail,
  } = useBeritaDetailBySlugViewModel(slug);

  if (isLoadingDetail) {
    return (
      <section className="w-full bg-background py-8 font-sans antialiased text-black md:py-12">
        <Container>
          <div className="mb-6">
            <div className="flex items-center border-b border-border pb-4">
              <div className="h-10 w-40 animate-pulse rounded-lg bg-border/60" />
            </div>
          </div>

          <div className="w-full">
            <BeritaDetailSkeleton />
          </div>
        </Container>
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
          onRetry={() => refetchDetail()}
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
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black transition-all hover:border-primary hover:text-primary hover:shadow-sm"
            >
              <FaArrowLeft className="h-3 w-3" />
              <span>Kembali</span>
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full">
          <BeritaDetail berita={berita} />
        </div>
      </Container>
    </section>
  );
}
