"use client";

import { useQuery } from "@tanstack/react-query";

import {
  findAllVideos,
  findLatestVideos,
  findRelatedVideos,
  findVideoById,
} from "../repositories/video.repository";

export function useVideoViewModel(id?: number) {
  const VIDEO_QUERY_KEYS = {
    all: ["videos"] as const,

    latest: () => ["videos", "latest"] as const,

    list: () => ["videos", "all"] as const,

    detail: (id: number) => ["videos", "detail", id] as const,

    related: (id: number) => ["videos", "related", id] as const,
  };

  const latestVideosQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.latest(),
    queryFn: findLatestVideos,
  });

  const allVideosQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.list(),
    queryFn: findAllVideos,
  });

  const videoDetailQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.detail(id ?? 0),
    queryFn: () => findVideoById(id!),
    enabled: id !== undefined,
  });

  const relatedVideosQuery = useQuery({
    queryKey: VIDEO_QUERY_KEYS.related(id ?? 0),
    queryFn: () => findRelatedVideos(id!),
    enabled: id !== undefined,
  });

  return {
    videoList: latestVideosQuery.data ?? [],
    isLoadingLatest: latestVideosQuery.isLoading,
    errorLatest: latestVideosQuery.error,
    refetchLatestVideos: latestVideosQuery.refetch,

    allVideos: allVideosQuery.data ?? [],
    isLoadingAll: allVideosQuery.isLoading,
    errorAll: allVideosQuery.error,
    refetchAllVideos: allVideosQuery.refetch,

    video: videoDetailQuery.data ?? null,
    relatedVideos: relatedVideosQuery.data ?? [],

    isLoadingDetail: videoDetailQuery.isLoading || relatedVideosQuery.isLoading,

    errorDetail: videoDetailQuery.error || relatedVideosQuery.error,

    refetchVideoDetail: videoDetailQuery.refetch,
    refetchRelatedVideos: relatedVideosQuery.refetch,
  };
}
