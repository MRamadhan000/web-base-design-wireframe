"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { Pagination } from "@/components/ui/navigation/Pagination";

import { BeritaList } from "../components/BeritaList";
import { useAllBeritaViewModel } from "../hooks/useAllBeritaViewModel";
import { PageHeaderView } from "@/shared/components/PageHeaderView";

export function BeritaPageView({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  const { allBerita, pagination, isLoading, error, refetch } =
    useAllBeritaViewModel(page, limit);

  if (error) {
    return (
      <ErrorState
        message={
          error instanceof Error ? error.message : "Gagal mengambil berita."
        }
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-black">
      <PageHeaderView
        title="Berita &"
        highlight="Informasi Publik"
        description="Akses cepat dan transparan ke seluruh rilisan berita resmi, pengumuman, serta dokumentasi program kerja Pemerintah Kota Batu."
        showBackButton={true}
      />

      <section className="py-12">
        <Container>
          <BeritaList
            beritaList={allBerita}
            isLoading={isLoading}
            skeletonCount={limit}
          />

          {pagination && (
            <Pagination
              page={page}
              pageCount={pagination.pageCount}
              limit={limit}
              basePath="/berita"
            />
          )}
        </Container>
      </section>
    </div>
  );
}