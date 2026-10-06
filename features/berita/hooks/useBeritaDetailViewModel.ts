import { useQuery } from "@tanstack/react-query";

import {
  findBeritaById,
  findRelatedBerita,
} from "../repositories/berita.repository";

import { BERITA_QUERY_KEYS } from "../constants/berita.query-keys";

export function useBeritaDetailViewModel(id?: string) {
  const detailQuery = useQuery({
    queryKey: BERITA_QUERY_KEYS.detail(id ?? ""),
    queryFn: () => findBeritaById(id!),
    enabled: Boolean(id),
  });

  const relatedQuery = useQuery({
    queryKey: BERITA_QUERY_KEYS.related(id ?? ""),
    queryFn: () => findRelatedBerita(id!),
    enabled: Boolean(id),
  });

  return {
    berita: detailQuery.data ?? null,
    relatedBerita: relatedQuery.data ?? [],

    isLoading:
      detailQuery.isLoading || relatedQuery.isLoading,

    error:
      detailQuery.error || relatedQuery.error,

    refetchDetail: detailQuery.refetch,
    refetchRelated: relatedQuery.refetch,
  };
}