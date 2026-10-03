"use client";

import { useQuery } from "@tanstack/react-query";

import {
  findAllVideos,
  findLatestVideos,
  findRelatedVideos,
  findVideoById,
} from "../repositories/video.repository";

export function useVideoViewModel(id?: number) {
  const latestVideosQuery = useQuery({
    queryKey: ["videos", "latest"],
    queryFn: findLatestVideos,
  });

  const allVideosQuery = useQuery({
    queryKey: ["videos", "all"],
    queryFn: findAllVideos,
  });

  const videoDetailQuery = useQuery({
    queryKey: ["videos", "detail", id ?? 0],
    queryFn: () => findVideoById(id!),
    enabled: id !== undefined,
  });

  const relatedVideosQuery = useQuery({
    queryKey: ["videos", "related", id ?? 0],
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
  };
}