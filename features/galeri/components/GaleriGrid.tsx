import { GaleriItem } from "../models/galeri.types";
import { GaleriCard } from "./GaleriCard";

interface GaleriGridProps {
  items: GaleriItem[];
  preview?: boolean;
}

export function GaleriGrid({ items, preview = false }: GaleriGridProps) {
  return (
    <div
      className={
        preview
          ? "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          : "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      }
    >
      {items.map((item) => (
        <GaleriCard key={item.id} item={item} preview={preview} />
      ))}
    </div>
  );
}