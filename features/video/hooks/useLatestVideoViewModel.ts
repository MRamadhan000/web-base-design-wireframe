"use client";

import { useQuery } from "@tanstack/react-query";

import { VIDEO_QUERY_KEYS } from "../constants/video.query-keys";
import { findLatestVideos } from "../repositories/video.repository";

export function useLatestVideoViewModel() {
  const query = useQuery({
    queryKey: VIDEO_QUERY_KEYS.latest,
    queryFn: findLatestVideos,
  });

  return {
    videoList: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}