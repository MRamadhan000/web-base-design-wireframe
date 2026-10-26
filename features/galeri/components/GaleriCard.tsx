import Image from "next/image";

import { Galeri } from "../models/galeri.types";

interface GaleriCardProps {
  item: Galeri;
  preview?: boolean;
}

export function GaleriCard({ item, preview = false }: GaleriCardProps) {
  return (
    <div
      className="group relative h-64 overflow-hidden rounded-xl border border-border/80 bg-accent-soft shadow-sm transition-all duration-300 hover:border-primary-light hover:shadow-md"
    >
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          fill
          unoptimized
          sizes={
            preview
              ? "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          }
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/85 via-black/40 to-transparent p-5 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="mt-1.5 text-base font-bold leading-snug text-white">
          {item.title}
        </h2>
      </div>
    </div>
  );
}