"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { LoadingState } from "@/components/ui/state/LoadingState";

import { DetailVideoContent } from "../components/DetailVideoContent";
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
    return <LoadingState message="Loading video..." />;
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

  return <DetailVideoContent video={video}  />;
}