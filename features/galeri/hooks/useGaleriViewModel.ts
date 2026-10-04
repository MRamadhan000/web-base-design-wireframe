"use client";

import { useQuery } from "@tanstack/react-query";

import {
  findAllGaleri,
  findPreviewGaleri,
} from "../repositories/galeri.repository";

export function useGaleriViewModel() {
  const allGaleriQuery = useQuery({
    queryKey: ["galeri", "all"],
    queryFn: findAllGaleri,
  });

  const previewGaleriQuery = useQuery({
    queryKey: ["galeri", "preview"],
    queryFn: findPreviewGaleri,
  });

  return {
    allGaleri: allGaleriQuery.data ?? [],
    isLoadingAll: allGaleriQuery.isLoading,
    errorAll: allGaleriQuery.error,
    refetchAllGaleri: allGaleriQuery.refetch,
    previewGaleri: previewGaleriQuery.data ?? [],
    isLoadingPreview: previewGaleriQuery.isLoading,
    errorPreview: previewGaleriQuery.error,
    refetchPreviewGaleri: previewGaleriQuery.refetch,
  };
}