"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  pageCount: number;
  limit: number;
  basePath: string;
}

type PageItem = number | "ellipsis";

function getPageItems(page: number, pageCount: number): PageItem[] {
  // Kalau halaman sedikit, tampilkan semuanya
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const items: PageItem[] = [1];

  const start = Math.max(2, page - 1);
  const end = Math.min(pageCount - 1, page + 1);

  if (start > 2) items.push("ellipsis");
  for (let i = start; i <= end; i++) items.push(i);
  if (end < pageCount - 1) items.push("ellipsis");

  items.push(pageCount);
  return items;
}

const baseButton =
  "inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg px-3 text-xs font-semibold transition-colors sm:px-4";

const outlineButton = `${baseButton} border border-border bg-surface text-black hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:text-muted-light disabled:hover:border-border disabled:hover:text-muted-light`;

export function Pagination({
  page,
  pageCount,
  limit,
  basePath,
}: PaginationProps) {
  const router = useRouter();

  if (pageCount <= 1) return null;

  function navigateToPage(nextPage: number) {
    const params = new URLSearchParams(window.location.search);
    params.set("page", String(nextPage));
    params.set("limit", String(limit));
    router.push(`${basePath}?${params.toString()}`, { scroll: false });
  }

  const items = getPageItems(page, pageCount);

  return (
    <nav
      aria-label="Navigasi halaman"
      className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-12"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => navigateToPage(page - 1)}
        aria-label="Halaman sebelumnya"
        className={outlineButton}
      >
        <span aria-hidden="true">←</span>
        <span className="ml-1 hidden sm:inline">Sebelumnya</span>
      </button>

      {/* Mobile: indikator ringkas */}
      <span
        className="px-2 text-xs font-semibold text-black sm:hidden"
        aria-live="polite"
      >
        Hal {page} / {pageCount}
      </span>

      {/* Tablet & desktop: nomor halaman */}
      <div className="hidden items-center gap-2 sm:flex">
        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="px-1 text-xs text-muted-light"
            >
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              aria-label={`Halaman ${item}`}
              aria-current={item === page ? "page" : undefined}
              onClick={() => navigateToPage(item)}
              className={
                item === page
                  ? `${baseButton} bg-primary text-white`
                  : outlineButton
              }
            >
              {item}
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        disabled={page >= pageCount}
        onClick={() => navigateToPage(page + 1)}
        aria-label="Halaman selanjutnya"
        className={outlineButton}
      >
        <span className="mr-1 hidden sm:inline">Selanjutnya</span>
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  );
}