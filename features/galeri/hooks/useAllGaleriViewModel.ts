"use client";

import { useQuery } from "@tanstack/react-query";

import { GALERI_QUERY_KEYS } from "../constants/galeri.query-keys";
import { findAllGaleri } from "../repositories/galeri.repository";

export function useAllGaleriViewModel(page: number, limit: number) {
  const query = useQuery({
    queryKey: GALERI_QUERY_KEYS.list(page, limit),
    queryFn: () => findAllGaleri(page, limit),
  });

  return {
    allGaleri: query.data?.data ?? [],
    pagination: query.data?.pagination,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}