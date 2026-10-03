import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";

import { ActionButton } from "@/components/ui/ActionButton";
import { Berita } from "../models/berita.types";

interface BeritaCardProps {
  berita: Berita;
}

export function BeritaCard({ berita }: BeritaCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md">
      <div>
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-100">
          <img
            src={berita.image}
            alt={berita.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
          <FaCalendarAlt className="h-3.5 w-3.5 text-slate-400" />
          <span>{berita.date}</span>
        </div>

        <h3 className="mt-2 line-clamp-3 text-base font-bold leading-snug text-slate-900">
          {berita.title}
        </h3>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <ActionButton
          href={`/berita/detail`}
          icon={<FaBookOpen className="h-3.5 w-3.5" />}
        >
          Baca Berita
        </ActionButton>
      </div>
    </article>
  );
}