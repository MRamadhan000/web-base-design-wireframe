"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";

import { VideoList } from "../components/VideoList";
import { useVideoViewModel } from "../hooks/useVideoViewModel";

export function VideoSection() {
  const { videoList, isLoadingLatest, errorLatest, refetchLatestVideos } =
    useVideoViewModel();

  if (isLoadingLatest) {
    return (
      <section className="w-full bg-slate-50 py-16">
        <LoadingState message="Loading video terbaru..." />
      </section>
    );
  }

  if (errorLatest) {
    return (
      <section className="w-full bg-slate-50 py-16">
        <ErrorState
          message="Gagal mengambil video terbaru."
          onRetry={() => refetchLatestVideos()}
        />
      </section>
    );
  }

  return (
    <section className="w-full border-b border-slate-200 bg-slate-50 py-16 font-sans antialiased">
      <Container>
        <div className="mb-10 border-b border-slate-200 pb-6">
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-900">
            Video Kegiatan & Dokumentasi
          </h2>
        </div>

        <VideoList videoList={videoList} />

        <div className="mt-12 text-center">
          <Link
            href="/video"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 text-xs font-bold tracking-wider text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            <span>Lihat Semua Video</span>
            <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}