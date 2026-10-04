import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";

import { Button } from "@/components/ui/button/Button";
import { Berita } from "../models/berita.types";

interface BeritaCardProps {
  berita: Berita;
}

export function BeritaCard({ berita }: BeritaCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-border/80 bg-surface p-4 shadow-sm transition-all hover:border-primary-light hover:shadow-md">
      <div>
        {/* Gambar Berita */}
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-accent-soft">
          <img
            src={berita.image}
            alt={berita.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Date Publish */}
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-muted">
          <FaCalendarAlt className="h-3.5 w-3.5 text-muted-light" />
          <span>{berita.date}</span>
        </div>

        {/* Judul Berita */}
        <h3 className="mt-2 line-clamp-3 text-base font-bold leading-snug text-black">
          {berita.title}
        </h3>
      </div>

      {/* Button Baca Selengkapnya */}
      <div className="mt-6 border-t border-border pt-4">
        <Button
          href={`/berita/detail`}
          variant="outline"
          icon={<FaBookOpen className="h-3.5 w-3.5" />}
          className="w-full"
        >
          Baca Berita
        </Button>
      </div>
    </article>
  );
}