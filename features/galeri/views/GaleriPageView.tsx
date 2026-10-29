"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { Pagination } from "@/components/ui/navigation/Pagination";

import { GaleriGrid } from "../components/GaleriGrid";
import { useAllGaleriViewModel } from "../hooks/useAllGaleriViewModel";
import { PageHeaderView } from "@/shared/components/PageHeaderView";
import { useRouter } from "next/navigation";

export function GaleriPageView({
  page = 1,
  limit = 9,
}: {
  page?: number;
  limit?: number;
}) {
  const router = useRouter();
  const { allGaleri, pagination, isLoading, error, refetch } =
    useAllGaleriViewModel(page, limit);

  if (error) {
    return (
      <ErrorState
        message={
          error instanceof Error
            ? error.message
            : "Gagal mengambil galeri foto."
        }
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-black">
      <PageHeaderView
        title="Galeri Dokumentasi &"
        highlight="Foto Daerah"
        description="Kumpulan dokumentasi visual mengenai potensi wisata, kegiatan pemerintah, seni budaya, serta momen berharga di Kota Batu."
        showBackButton={true}
        onBack={() => router.push("/#galeri")}
      />

      {/* DAFTAR GALERI */}
      <section className="py-12">
        <Container>
          <GaleriGrid items={allGaleri} isLoading={isLoading} skeletonCount={6}/>

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
