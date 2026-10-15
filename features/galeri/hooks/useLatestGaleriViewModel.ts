"use client";

import { useQuery } from "@tanstack/react-query";

import { GALERI_QUERY_KEYS } from "../constants/galeri.query-keys";
import { findLatestGaleri } from "../repositories/galeri.repository";

export function useLatestGaleriViewModel() {
  const query = useQuery({
    queryKey: GALERI_QUERY_KEYS.latest,
    queryFn: findLatestGaleri,
  });

  return {
    previewGaleri: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}