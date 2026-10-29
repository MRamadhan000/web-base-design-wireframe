"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";
import { Pagination } from "@/components/ui/navigation/Pagination";

import { VideoList } from "../components/VideoList";
import { useAllVideoViewModel } from "../hooks/useAllVideoViewModel";
import { PageHeaderView } from "@/shared/components/PageHeaderView";
import { useRouter } from "next/navigation";

export function VideoPageView({
  page = 1,
  limit = 9,
}: {
  page?: number;
  limit?: number;
}) {
  const router = useRouter();
  const { allVideos, pagination, isLoading, error, refetch } =
    useAllVideoViewModel(page, limit);

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
    <div className="min-h-screen bg-background font-sans text-black antialiased">
      <PageHeaderView
        title="Video &"
        highlight="Dokumentasi Kegiatan"
        description="Saksikan berbagai dokumentasi kegiatan resmi, liputan khusus, dan video potensi daerah Pemerintah Kota Batu secara lengkap."
        onBack={() => router.push("/#video")}
      />

      <section className="py-12">
        <Container>
          <VideoList videoList={allVideos} isLoading={isLoading} />

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
