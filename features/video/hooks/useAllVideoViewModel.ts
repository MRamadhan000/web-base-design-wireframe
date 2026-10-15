"use client";

import { useQuery } from "@tanstack/react-query";

import { VIDEO_QUERY_KEYS } from "../constants/video.query-keys";
import { findAllVideos } from "../repositories/video.repository";

export function useAllVideoViewModel(page: number, limit: number) {
  const query = useQuery({
    queryKey: VIDEO_QUERY_KEYS.list(page, limit),
    queryFn: () => findAllVideos(page, limit),
  });

  return {
    allVideos: query.data?.data ?? [],
    pagination: query.data?.pagination,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}