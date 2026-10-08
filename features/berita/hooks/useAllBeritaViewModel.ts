import { useQuery } from "@tanstack/react-query";

import { findAllBerita } from "../repositories/berita.repository";
import { BERITA_QUERY_KEYS } from "../constants/berita.query-keys";

export function useAllBeritaViewModel(page: number, limit: number) {
  const query = useQuery({
    queryKey: BERITA_QUERY_KEYS.list(page, limit),
    queryFn: () => findAllBerita(page, limit),
  });

  return {
    allBerita: query.data?.data ?? [],
    pagination: query.data?.pagination,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}