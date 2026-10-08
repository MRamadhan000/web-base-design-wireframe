import { FaCalendarAlt } from "react-icons/fa";

import { BeritaDetail as BeritaDetailType } from "../../models/berita.types";
import { BeritaShare } from "./BeritaShare";

interface BeritaDetailProps {
  berita: BeritaDetailType;
}

export function BeritaDetail({ berita }: BeritaDetailProps) {
  return (
    <article className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8 lg:col-span-2">
      <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
        {berita.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-primary" />
          <span>{berita.date}</span>
        </div>

        <BeritaShare />
      </div>

      <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-xl bg-accent-soft sm:h-[380px]">
        <img
          src={berita.image}
          alt={berita.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-black sm:text-base">
        {berita.content.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "font-medium text-black"
                : ""
            }
          >
            {paragraph}
          </p>
        ))}

        {/* <blockquote className="my-6 rounded-r-lg border-l-4 border-primary bg-accent/50 p-4 text-sm italic text-black">
          "Inovasi digital ini bukan sekadar mengikuti tren, tetapi
          merupakan bentuk komitmen nyata Pemkot Batu dalam
          menghadirkan pelayanan publik yang responsif, cepat, dan
          transparan bagi seluruh warga."
        </blockquote> */}
      </div>

    </article>
  );
}