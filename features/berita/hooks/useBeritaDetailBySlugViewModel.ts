import { useQuery } from "@tanstack/react-query";

import { findBeritaBySlug } from "../repositories/berita.repository";
import { BERITA_QUERY_KEYS } from "../constants/berita.query-keys";

export function useBeritaDetailBySlugViewModel(slug?: string) {
  const detailQuery = useQuery({
    queryKey: [...BERITA_QUERY_KEYS.detail(slug ?? ""), "slug"],
    queryFn: () => findBeritaBySlug(slug!),
    enabled: Boolean(slug),
  });

  return {
    berita: detailQuery.data ?? null,

    isLoading: detailQuery.isLoading,

    error: detailQuery.error,

    refetchDetail: detailQuery.refetch,
  };
}