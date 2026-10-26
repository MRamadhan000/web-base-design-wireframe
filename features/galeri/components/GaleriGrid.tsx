
import { Galeri } from "../models/galeri.types";
import { GaleriCard } from "./GaleriCard";
import { GaleriCardSkeleton } from "./GaleriCardSkeleton";

interface GaleriGridProps {
  items: Galeri[];
  preview?: boolean;
  isLoading?: boolean;
  skeletonCount?: number;
}

export function GaleriGrid({
  items,
  preview = false,
  isLoading = false,
  skeletonCount = 4,
}: GaleriGridProps) {
  return (
    <div
      className={
        preview
          ? "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          : "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      }
      aria-busy={isLoading}
      aria-label={isLoading ? "Memuat galeri" : undefined}
    >
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => (
            <GaleriCardSkeleton key={index} />
          ))
        : items.map((item) => (
            <GaleriCard
              key={item.id}
              item={item}
              preview={preview}
            />
          ))}
    </div>
  );
}
