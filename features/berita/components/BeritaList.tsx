import { Berita } from "../models/berita.types";
import { BeritaCard } from "./BeritaCard";
import { BeritaCardSkeleton } from "./BeritaCardSkeleton";

interface BeritaListProps {
  beritaList: Berita[];
  isLoading?: boolean;
  skeletonCount?: number;
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