export function BeritaDetailSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8"
    >
      <div className="h-8 w-full max-w-xl animate-pulse rounded bg-border/60" />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3">
        <div className="h-4 w-32 animate-pulse rounded bg-border/60" />
        <div className="h-10 w-28 animate-pulse rounded-lg bg-border/60" />
      </div>

      <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-xl bg-border/60 sm:h-[380px] animate-pulse" />

      <div className="mt-8 space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-border/60" />
        <div className="h-4 w-full animate-pulse rounded bg-border/60" />
        <div className="h-4 w-11/12 animate-pulse rounded bg-border/60" />
        <div className="h-4 w-full animate-pulse rounded bg-border/60" />
        <div className="h-4 w-10/12 animate-pulse rounded bg-border/60" />
      </div>
    </article>
  );
}
