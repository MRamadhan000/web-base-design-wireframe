import { useQuery } from "@tanstack/react-query";

import { findLatestBerita } from "../repositories/berita.repository";
import { BERITA_QUERY_KEYS } from "../constants/berita.query-keys";

export function useLatestBeritaViewModel() {
  const query = useQuery({
    queryKey: BERITA_QUERY_KEYS.latest(),
    queryFn: findLatestBerita,
  });

  return {
    beritaList: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}