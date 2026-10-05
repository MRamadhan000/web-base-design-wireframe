import { useQuery } from "@tanstack/react-query";

import { findAllBerita } from "../repositories/berita.repository";
import { BERITA_QUERY_KEYS } from "../constants/berita.query-keys";

export function useAllBeritaViewModel() {
  const query = useQuery({
    queryKey: BERITA_QUERY_KEYS.list(),
    queryFn: findAllBerita,
  });

  return {
    allBerita: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}