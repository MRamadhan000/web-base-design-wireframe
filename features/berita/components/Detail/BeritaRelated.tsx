import Link from "next/link";

import { BeritaRelated as BeritaRelatedType } from "../../models/berita.types";

interface BeritaRelatedProps {
  beritaList: BeritaRelatedType[];
}

export function BeritaRelated({
  beritaList,
}: BeritaRelatedProps) {
  return (
    <div className="rounded-xl border border-border/80 bg-surface p-5 shadow-sm">
      <h3 className="mb-4 border-b border-border pb-2 text-sm font-bold text-black">
        Berita Terkait
      </h3>

      <div className="space-y-4">
        {beritaList.map((item) => (
          <Link
            key={item.id}
            href={`/berita/${item.id}`}
            className="group flex items-start gap-3"
          >
            <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-accent-soft">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-medium text-primary">
                {item.date}
              </span>

              <h4 className="line-clamp-2 text-xs font-semibold leading-snug text-black transition-colors group-hover:text-primary">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}