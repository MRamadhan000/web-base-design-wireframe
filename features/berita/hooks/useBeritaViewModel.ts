"use client";

import { useQuery } from "@tanstack/react-query";

import {
  findAllBerita,
  findBeritaById,
  findLatestBerita,
  findRelatedBerita,
} from "../repositories/berita.repository";

export function useBeritaViewModel(id?: number) {
  const BERITA_QUERY_KEYS = {
    all: ["berita"] as const,

    latest: () => ["berita", "latest"] as const,

    list: () => ["berita", "all"] as const,

    detail: (id: number) => ["berita", "detail", id] as const,

    related: (id: number) => ["berita", "related", id] as const,
  };

  const latestBeritaQuery = useQuery({
    queryKey: BERITA_QUERY_KEYS.latest(),
    queryFn: findLatestBerita,
  });

  const allBeritaQuery = useQuery({
    queryKey: BERITA_QUERY_KEYS.list(),
    queryFn: findAllBerita,
  });

  const beritaDetailQuery = useQuery({
    queryKey: BERITA_QUERY_KEYS.detail(id ?? 0),
    queryFn: () => findBeritaById(id!),
    enabled: id !== undefined,
  });

  const relatedBeritaQuery = useQuery({
    queryKey: BERITA_QUERY_KEYS.related(id ?? 0),
    queryFn: () => findRelatedBerita(id!),
    enabled: id !== undefined,
  });

  return {
    beritaList: latestBeritaQuery.data ?? [],
    isLoadingLatest: latestBeritaQuery.isLoading,
    errorLatest: latestBeritaQuery.error,
    refetchLatestBerita: latestBeritaQuery.refetch,

    allBerita: allBeritaQuery.data ?? [],
    isLoadingAll: allBeritaQuery.isLoading,
    errorAll: allBeritaQuery.error,
    refetchAllBerita: allBeritaQuery.refetch,

    berita: beritaDetailQuery.data ?? null,
    relatedBerita: relatedBeritaQuery.data ?? [],

    isLoadingDetail:
      beritaDetailQuery.isLoading || relatedBeritaQuery.isLoading,

    errorDetail: beritaDetailQuery.error || relatedBeritaQuery.error,

    refetchBeritaDetail: beritaDetailQuery.refetch,
    refetchRelatedBerita: relatedBeritaQuery.refetch,
  };
}
