"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";

import { VideoList } from "../components/VideoList";
import { useVideoViewModel } from "../hooks/useVideoViewModel";

export function VideoPageView() {
  const { allVideos, isLoadingAll, errorAll, refetchAllVideos } =
    useVideoViewModel();

  if (isLoadingAll) {
    return <LoadingState message="Loading video..." />;
  }

  if (errorAll) {
    return (
      <ErrorState
        message={
          errorAll instanceof Error ? errorAll.message : "Gagal mengambil video."
        }
        onRetry={() => refetchAllVideos()}
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
              className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black transition-colors hover:border-primary hover:text-primary"
            >
              2
            </button>
            <button
              type="button"
              className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black transition-colors hover:border-primary hover:text-primary"
            >
              Selanjutnya →
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}