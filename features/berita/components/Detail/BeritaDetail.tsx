import { FaCalendarAlt } from "react-icons/fa";

import { BeritaDetail as BeritaDetailType } from "../../models/berita.types";
import { BeritaShare } from "./BeritaShare";
import { BeritaTags } from "./BeritaTags";

interface BeritaDetailProps {
  berita: BeritaDetailType;
}

export function BeritaDetail({ berita }: BeritaDetailProps) {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
      <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {berita.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-3 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-emerald-600" />
          <span>{berita.date}</span>
        </div>

        <BeritaShare />
      </div>

      <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-xl bg-slate-100 sm:h-[380px]">
        <img
          src={berita.image}
          alt={berita.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        {berita.content.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "font-medium text-slate-900"
                : ""
            }
          >
            {paragraph}
          </p>
        ))}

        <blockquote className="my-6 rounded-r-lg border-l-4 border-emerald-600 bg-emerald-50/50 p-4 text-sm italic text-slate-800">
          "Inovasi digital ini bukan sekadar mengikuti tren, tetapi
          merupakan bentuk komitmen nyata Pemkot Batu dalam
          menghadirkan pelayanan publik yang responsif, cepat, dan
          transparan bagi seluruh warga."
        </blockquote>
      </div>

      <BeritaTags tags={berita.tags} />
    </article>
  );
}