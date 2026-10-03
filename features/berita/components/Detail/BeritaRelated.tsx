import Link from "next/link";

import { BeritaRelated as BeritaRelatedType } from "../../models/berita.types";

interface BeritaRelatedProps {
  beritaList: BeritaRelatedType[];
}

export function BeritaRelated({
  beritaList,
}: BeritaRelatedProps) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <h3 className="mb-4 border-b border-slate-100 pb-2 text-sm font-bold text-slate-900">
        Berita Terkait
      </h3>

      <div className="space-y-4">
        {beritaList.map((item) => (
          <Link
            key={item.id}
            href={`/berita/${item.id}`}
            className="group flex items-start gap-3"
          >
            <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-medium text-emerald-600">
                {item.date}
              </span>

              <h4 className="line-clamp-2 text-xs font-semibold leading-snug text-slate-800 transition-colors group-hover:text-emerald-600">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}