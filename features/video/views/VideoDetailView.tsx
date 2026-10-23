"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { DetailVideoContent } from "../components/DetailVideoContent";
import { VideoDetailSkeleton } from "../components/Detail/VideoDetailSkeleton";

import { useVideoDetailBySlugViewModel } from "../hooks/useVideoDetailBySlugViewModel";

interface VideoDetailViewProps {
  slug: string;
}

export function VideoDetailView({ slug }: VideoDetailViewProps) {
  const {
    video,
    isLoading,
    error,
    refetchDetail,
  } = useVideoDetailBySlugViewModel(slug);

  if (isLoading) {
    return (
      <section className="w-full bg-background py-8 font-sans antialiased text-black md:py-12">
        <Container>
          <div className="mb-6">
            <div className="flex items-center border-b border-border pb-4">
              <div className="h-10 w-40 animate-pulse rounded-lg bg-border/60" />
            </div>
          </div>

          <div className="w-full">
            <VideoDetailSkeleton />
          </div>
        </Container>
      </section>
    );
  }

  if (error || !video) {
    return (
      <section className="w-full bg-background py-16">
        <Container>
          <ErrorState
            message={
              error instanceof Error
                ? error.message
                : "Video tidak ditemukan."
            }
            onRetry={() => refetchDetail()}
          />
        </Container>
      </section>
    );
  }

  return <DetailVideoContent video={video} />;
}