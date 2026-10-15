"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { Pagination } from "@/components/ui/navigation/Pagination";

import { VideoList } from "../components/VideoList";
import { useAllVideoViewModel } from "../hooks/useAllVideoViewModel";

export function VideoPageView({
  page = 1,
  limit = 9,
}: {
  page?: number;
  limit?: number;
}) {
  const { allVideos, pagination, isLoading, error, refetch } =
    useAllVideoViewModel(page, limit);

  if (isLoading) {
    return <LoadingState message="Loading video..." />;
  }

  if (error) {
    return (
      <ErrorState
        message={
          error instanceof Error ? error.message : "Gagal mengambil video."
        }
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-black">
      <section className="border-b border-border/80 bg-surface py-12 md:py-16">
        <Container>
          <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Beranda
            </Link>
            <FaChevronRight className="h-2.5 w-2.5 text-muted-light" />
            <span className="font-semibold text-primary">Galeri Video</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Video & <span className="text-primary">Dokumentasi Kegiatan</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Saksikan berbagai dokumentasi kegiatan resmi, liputan khusus, dan
              video potensi daerah Pemerintah Kota Batu secara lengkap.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <VideoList videoList={allVideos} />
          {pagination && (
            <Pagination
              page={page}
              pageCount={pagination.pageCount}
              limit={limit}
              basePath="/video"
            />
          )}
        </Container>
      </section>
    </div>
  );
}