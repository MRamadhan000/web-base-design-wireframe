"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import { SEARCH_QUERY_KEYS } from "../constants/search.query-keys";
import { findSearchResults } from "../repository/search.repository";
import type { SearchResult } from "../types/search.types";

const DEBOUNCE_MS = 400;
const MIN_KEYWORD_LENGTH = 2;
const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export interface UseSearchViewModel {
  /** Raw input value (controlled by the user). */
  inputValue: string;
  /** Debounced keyword actually used for API queries. */
  debouncedKeyword: string;
  /** Whether a search is actively loading. */
  isLoading: boolean;
  /** Whether the search query is enabled (keyword long enough). */
  isEnabled: boolean;
  /** Error from any of the three searches. */
  error: Error | null;
  /** Combined results from berita, video, galeri. */
  results: SearchResult | undefined;
  /** Total number of results across all three categories. */
  totalCount: number;
  /** Update the raw input value. */
  setInputValue: (value: string) => void;
  /** Clear input and reset state. */
  clearSearch: () => void;
}

/**
 * ViewModel for the global search feature.
 *
 * Uses a debounced keyword to fire three parallel API calls
 * (berita, video, galeri) via a single React Query entry.
 */
export function useSearchViewModel(
  page = DEFAULT_PAGE,
  pageSize = DEFAULT_PAGE_SIZE,
): UseSearchViewModel {
  const [inputValue, setInputValue] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Debounce ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const trimmed = inputValue.trim();

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setDebouncedKeyword(trimmed);
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [inputValue]);

  const isEnabled = debouncedKeyword.length >= MIN_KEYWORD_LENGTH;

  // ── React Query ─────────────────────────────────────────────────────────────
  const query = useQuery({
    queryKey: SEARCH_QUERY_KEYS.results(debouncedKeyword, page, pageSize),
    queryFn: () =>
      findSearchResults({ keyword: debouncedKeyword, page, pageSize }),
    enabled: isEnabled,
    staleTime: 1000 * 30, // 30 s
  });

  const results = query.data;

  const totalCount =
    (results?.berita.length ?? 0) +
    (results?.video.length ?? 0) +
    (results?.galeri.length ?? 0);

  function clearSearch() {
    setInputValue("");
    setDebouncedKeyword("");
  }

  return {
    inputValue,
    debouncedKeyword,
    isLoading: query.isFetching,
    isEnabled,
    error: query.error as Error | null,
    results,
    totalCount,
    setInputValue,
    clearSearch,
  };
}

