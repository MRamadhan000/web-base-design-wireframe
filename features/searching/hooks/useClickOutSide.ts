"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

/** Panggil `handler` saat user menekan mouse di luar elemen `ref`. */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
) {
  // Simpan handler terbaru di ref agar listener tidak perlu dipasang ulang
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handlerRef.current();
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [ref]);
}