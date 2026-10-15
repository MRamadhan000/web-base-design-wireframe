"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  pageCount: number;
  limit: number;
  basePath: string;
}

export function Pagination({
  page,
  pageCount,
  limit,
  basePath,
}: PaginationProps) {
  const router = useRouter();

  function navigateToPage(nextPage: number) {
    const params = new URLSearchParams(window.location.search);
    params.set("page", String(nextPage));
    params.set("limit", String(limit));
    router.push(`${basePath}?${params.toString()}`, { scroll: false });
  }

  return (
    <nav
      aria-label="Navigasi halaman"
      className="mt-12 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => navigateToPage(page - 1)}
        className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black disabled:cursor-not-allowed disabled:text-muted-light"
      >
        ← Sebelumnya
      </button>

      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            aria-current={pageNumber === page ? "page" : undefined}
            onClick={() => navigateToPage(pageNumber)}
            className={
              pageNumber === page
                ? "rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white"
                : "rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black hover:border-primary hover:text-primary"
            }
          >
            {pageNumber}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={page >= pageCount}
        onClick={() => navigateToPage(page + 1)}
        className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:text-muted-light"
      >
        Selanjutnya →
      </button>
    </nav>
  );
}
