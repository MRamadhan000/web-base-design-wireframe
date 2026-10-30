import { useQuery } from "@tanstack/react-query";

import { findGaleriBySlug } from "../repositories/galeri.repository";
import { GALERI_QUERY_KEYS } from "../constants/galeri.query-keys";

export function useGaleriDetailBySlugViewModel(slug?: string) {
  const detailQuery = useQuery({
    queryKey: GALERI_QUERY_KEYS.detail(slug ?? ""),
    queryFn: () => findGaleriBySlug(slug!),
    enabled: Boolean(slug),
  });

  return {
    galeri: detailQuery.data ?? null,
    isLoading: detailQuery.isLoading,
    error: detailQuery.error,
    refetchDetail: detailQuery.refetch,
  };
}

