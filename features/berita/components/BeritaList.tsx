import { Berita } from "../models/berita.types";
import { BeritaCard } from "./BeritaCard";

interface BeritaListProps {
  beritaList: Berita[];
  isLoading?: boolean;
  skeletonCount?: number;
}

function BeritaCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse rounded-xl border border-border/80 bg-surface p-4 shadow-sm"
    >
      <div className="h-48 w-full rounded-lg bg-border/60" />
      <div className="mt-4 h-3 w-24 rounded bg-border/60" />
      <div className="mt-3 space-y-2">
        <div className="h-4 w-full rounded bg-border/60" />
        <div className="h-4 w-3/4 rounded bg-border/60" />
      </div>
      <div className="mt-6 border-t border-border pt-4">
        <div className="h-9 w-full rounded-lg bg-border/60" />
      </div>
    </div>
  );
}

export function BeritaList({
  beritaList,
  isLoading = false,
  skeletonCount = 9,
}: BeritaListProps) {
  return (
    <div
      className="grid grid-cols-1 gap-8 md:grid-cols-3"
      aria-busy={isLoading}
      aria-label={isLoading ? "Memuat berita" : undefined}
    >
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => (
            <BeritaCardSkeleton key={index} />
          ))
        : beritaList.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
    </div>
  );
}