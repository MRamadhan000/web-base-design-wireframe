export function GaleriDetailSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8"
    >
      {/* Badge */}
      <div className="h-6 w-20 animate-pulse rounded-full bg-border/60" />

      {/* Title */}
      <div className="mt-4 h-8 w-full max-w-xl animate-pulse rounded bg-border/60" />

      {/* Meta row */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3">
        <div className="h-4 w-24 animate-pulse rounded bg-border/60" />
        <div className="h-10 w-28 animate-pulse rounded-lg bg-border/60" />
      </div>

      {/* Hero image */}
      <div className="relative mt-6 h-[260px] w-full animate-pulse overflow-hidden rounded-xl bg-border/60 sm:h-[420px]" />

      {/* Description lines */}
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-border/60" />
        <div className="h-4 w-full animate-pulse rounded bg-border/60" />
        <div className="h-4 w-10/12 animate-pulse rounded bg-border/60" />
      </div>
    </article>
  );
}

