"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { VideoList } from "../components/VideoList";
import { useLatestVideoViewModel } from "../hooks/useLatestVideoViewModel";

export function VideoSection() {
  const { videoList, isLoading, error, refetch } = useLatestVideoViewModel();

  if (error) {
    return (
      <section className="w-full bg-background py-16">
        <ErrorState
          message="Gagal mengambil video terbaru."
          onRetry={() => refetch()}
        />
      </section>
    );
  }

  return (
    <section className="w-full border-b border-border bg-background py-16 font-sans antialiased">
      <Container>
        <div className="mb-10 border-b border-border pb-6">
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-black">
            Video Kegiatan & Dokumentasi
          </h2>
        </div>

        <VideoList
          videoList={videoList}
          isLoading={isLoading}
          skeletonCount={3}
        />

        <div className="mt-12 text-center">
          <Link
            href="/video"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-xs font-bold tracking-wider text-white shadow-sm transition-colors hover:bg-primary"
          >
            <span>Lihat Semua Video</span>
            <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
