export function QuickActionCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-border bg-surface px-6 py-10 text-center shadow-xs"
    >
      <div className="mb-5 h-16 w-16 animate-pulse rounded-2xl bg-border/60" />

      <div className="h-4 w-32 animate-pulse rounded bg-border/60" />
      <div className="mt-2 h-3 w-24 animate-pulse rounded bg-border/60" />
    </div>
  );
}
