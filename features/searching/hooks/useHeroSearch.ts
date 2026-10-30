"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";

import { useSearchViewModel } from "@/features/searching/hooks/useSearchViewModel";
import { flattenResults, SEARCH_PAGE_PATH } from "../components/SearchDropdown";

export const MIN_QUERY_LENGTH = 2;

/**
 * ViewModel untuk search di hero.
 * Menggabungkan data search (useSearchViewModel) dengan state interaksi UI:
 * dropdown, fokus, navigasi keyboard, dan keputusan navigasi saat submit.
 */
export function useHeroSearch() {
  const router = useRouter();
  const base = useSearchViewModel();
  const {
    inputValue,
    debouncedKeyword,
    isLoading,
    isEnabled,
    results,
    setInputValue,
    clearSearch,
  } = base;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // ── Derived state ──────────────────────────────────────────────────────────
  const trimmed = inputValue.trim();
  const isTooShort = trimmed.length > 0 && trimmed.length < MIN_QUERY_LENGTH;

  // Daftar href untuk navigasi keyboard (urutan sama dengan render dropdown)
  const hrefs = useMemo(
    () => (results ? flattenResults(results, debouncedKeyword) : []),
    [results, debouncedKeyword],
  );

  const showDropdown =
    isDropdownOpen && isEnabled && (Boolean(results) || isLoading);

  const showTooShortHint = isFocused && isTooShort;

  // Reset sorotan keyboard saat hasil berubah
  useEffect(() => {
    setActiveIndex(-1);
  }, [results]);

  // ── Actions ────────────────────────────────────────────────────────────────
  const close = useCallback(() => {
    setIsDropdownOpen(false);
    setActiveIndex(-1);
  }, []);

  const clear = useCallback(() => {
    clearSearch();
    close();
  }, [clearSearch, close]);

  const onChange = useCallback(
    (value: string) => {
      setInputValue(value);
      setActiveIndex(-1);
      setIsDropdownOpen(value.trim().length >= MIN_QUERY_LENGTH);
    },
    [setInputValue],
  );

  const onFocus = useCallback(() => {
    setIsFocused(true);
    if (isEnabled && results) setIsDropdownOpen(true);
  }, [isEnabled, results]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  // Enter / tombol "Cari": buka opsi yang disorot, atau ke halaman hasil lengkap
  const submit = useCallback(
    (e?: FormEvent) => {
      e?.preventDefault();

      if (showDropdown && activeIndex >= 0 && hrefs[activeIndex]) {
        router.push(hrefs[activeIndex]);
        close();
        return;
      }

      if (trimmed.length >= MIN_QUERY_LENGTH) {
        router.push(`${SEARCH_PAGE_PATH}?q=${encodeURIComponent(trimmed)}`);
        close();
      }
    },
    [showDropdown, activeIndex, hrefs, trimmed, router, close],
  );

  // Navigasi keyboard: ↑ ↓ untuk menyorot opsi, Esc untuk menutup
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "ArrowDown": {
          if (!showDropdown || hrefs.length === 0) return;
          e.preventDefault();
          setActiveIndex((i) => (i + 1) % hrefs.length);
          break;
        }
        case "ArrowUp": {
          if (!showDropdown || hrefs.length === 0) return;
          e.preventDefault();
          setActiveIndex((i) => (i <= 0 ? hrefs.length - 1 : i - 1));
          break;
        }
        case "Escape": {
          if (!showDropdown) return;
          e.preventDefault();
          close();
          break;
        }
      }
    },
    [showDropdown, hrefs.length, close],
  );

  return {
    // data
    inputValue,
    debouncedKeyword,
    results,
    isLoading,

    // derived UI state
    isFocused,
    isTooShort,
    showTooShortHint,
    showDropdown,
    activeIndex,
    minQueryLength: MIN_QUERY_LENGTH,

    // handlers
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    submit,
    clear,
    close,
  };
}
