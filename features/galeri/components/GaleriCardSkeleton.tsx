
export function GaleriCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="relative h-64 animate-pulse overflow-hidden rounded-xl border border-border/80 bg-surface shadow-sm"
    >
      {/* Skeleton gambar */}
      <div className="absolute inset-0 bg-border/60" />

      {/* Skeleton judul di bagian bawah */}
      <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
        <div className="h-5 w-3/4 rounded bg-border/60" />
        <div className="h-4 w-1/2 rounded bg-border/60" />
      </div>
    </div>
  );
}
