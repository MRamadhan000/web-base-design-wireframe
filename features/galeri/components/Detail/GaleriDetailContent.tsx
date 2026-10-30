import { FaImages } from "react-icons/fa";

import type { GaleriDetail } from "../../models/galeri.types";
import { GaleriShare } from "./GaleriShare";

interface GaleriDetailProps {
  galeri: GaleriDetail;
}

export function GaleriDetailContent({ galeri }: GaleriDetailProps) {
  return (
    <article className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8 lg:col-span-2">
      {/* Category badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary">
          <FaImages className="h-3 w-3" aria-hidden="true" />
          Galeri
        </span>
      </div>

      <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
        {galeri.title}
      </h1>

      {/* Meta row */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <FaImages className="text-primary" />
          <span>Galeri Foto</span>
        </div>

        <GaleriShare title={galeri.title} />
      </div>

      {/* Hero image */}
      <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-xl bg-accent-soft sm:h-[420px]">
        <img
          src={galeri.image}
          alt={galeri.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Description */}
      {galeri.description && (
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-black sm:text-base">
          <p>{galeri.description}</p>
        </div>
      )}
    </article>
  );
}

