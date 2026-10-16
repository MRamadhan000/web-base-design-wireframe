"use client";

import { Container } from "@/components/ui/layout/Container";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { Pagination } from "@/components/ui/navigation/Pagination";

import { GaleriGrid } from "../components/GaleriGrid";
import { useAllGaleriViewModel } from "../hooks/useAllGaleriViewModel";

export function GaleriPageView({
  page = 1,
  limit = 9,
}: {
  page?: number;
  limit?: number;
}) {
  const { allGaleri, pagination, isLoading, error, refetch } =
    useAllGaleriViewModel(page, limit);

  if (isLoading) {
    return <LoadingState message="Loading galeri..." />;
  }

  if (error) {
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Gagal mengambil galeri foto."}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-black">
      <section className="border-b border-border/80 bg-surface py-12 md:py-16">
        <Container>
          <Breadcrumb
            items={[{ label: "Beranda", href: "/" }, { label: "Galeri Foto" }]}
          />

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Galeri Dokumentasi &{" "}
              <span className="text-primary">Foto Daerah</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Kumpulan dokumentasi visual mengenai potensi wisata, kegiatan
              pemerintah, seni budaya, serta momen berharga di Kota Batu.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <GaleriGrid items={allGaleri} />

          {pagination && (
            <Pagination
              page={page}
              pageCount={pagination.pageCount}
              limit={limit}
              basePath="/galeri"
            />
          )}
        </Container>
      </section>
    </div>
  );
}