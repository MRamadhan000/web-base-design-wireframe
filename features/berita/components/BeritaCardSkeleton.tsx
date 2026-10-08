export function BeritaCardSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-border/80 bg-surface shadow-sm"
    >
      {/* Image */}
      <div className="h-48 w-full animate-pulse bg-border/60" />

      <div className="p-4">
        {/* Category / Date */}
        <div className="h-3 w-24 animate-pulse rounded bg-border/60" />

        {/* Title */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-border/60" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-border/60" />
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-border/60" />
          <div className="h-3 w-3/4 animate-pulse rounded bg-border/60" />
        </div>

        {/* Footer / Button */}
        <div className="mt-6 border-t border-border pt-4">
          <div className="h-9 w-full animate-pulse rounded-lg bg-border/60" />
        </div>
      </div>
    </article>
  );
}