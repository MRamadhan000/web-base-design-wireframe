"use client";

import { useQuery } from "@tanstack/react-query";

import { VIDEO_QUERY_KEYS } from "../constants/video.query-keys";
import {
  findRelatedVideos,
  findVideoBySlug,
} from "../repositories/video.repository";

export function useVideoDetailBySlugViewModel(slug?: string) {
  const detailQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.detail(slug ?? ""),
    queryFn: () => findVideoBySlug(slug!),
    enabled: Boolean(slug),
  });

  const relatedQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.related(slug ?? ""),
    queryFn: () => findRelatedVideos(slug!),
    enabled: Boolean(slug),
  });

  return {
    video: detailQuery.data ?? null,
    relatedVideos: relatedQuery.data ?? [],
    isLoading: detailQuery.isLoading || relatedQuery.isLoading,
    error: detailQuery.error || relatedQuery.error,
    refetchDetail: detailQuery.refetch,
  };
}