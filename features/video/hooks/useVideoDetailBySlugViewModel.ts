"use client";

import { useQuery } from "@tanstack/react-query";

import { VIDEO_QUERY_KEYS } from "../constants/video.query-keys";
import { findVideoBySlug } from "../repositories/video.repository";

export function useVideoDetailBySlugViewModel(slug?: string) {
  const detailQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.detail(slug ?? ""),
    queryFn: () => findVideoBySlug(slug!),
    enabled: Boolean(slug),
  });

  return {
    video: detailQuery.data ?? null,
    isLoading: detailQuery.isLoading,
    error: detailQuery.error,
    refetchDetail: detailQuery.refetch,
  };
}