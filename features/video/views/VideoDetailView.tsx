"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";

import { DetailVideoContent } from "../components/DetailVideoContent";
import { useVideoViewModel } from "../hooks/useVideoViewModel";

interface VideoDetailViewProps {
  id: number;
}

export function VideoDetailView({ id }: VideoDetailViewProps) {
  const {
    video,
    relatedVideos,
    isLoadingDetail,
    errorDetail,
    refetchVideoDetail,
  } = useVideoViewModel(id);

  if (isLoadingDetail) {
    return <LoadingState message="Loading video..." />;
  }

  if (errorDetail || !video) {
    return (
      <section className="w-full bg-background py-16">
        <Container>
          <ErrorState
            message={
              errorDetail instanceof Error
                ? errorDetail.message
                : "Video tidak ditemukan."
            }
            onRetry={() => refetchVideoDetail()}
          />
        </Container>
      </section>
    );
  }

  return <DetailVideoContent video={video} relatedVideos={relatedVideos} />;
}