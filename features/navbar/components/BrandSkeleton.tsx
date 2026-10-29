export function BrandSkeleton() {
  return (
    <div aria-hidden="true" className="flex items-center gap-2.5 sm:gap-3">
      <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-black/10 sm:h-11 sm:w-11 dark:bg-white/10" />
      <div className="flex flex-col gap-2">
        <div className="h-3 w-24 animate-pulse rounded bg-black/10 dark:bg-white/10" />
        <div className="h-2.5 w-32 animate-pulse rounded bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  );
}