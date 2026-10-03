import Link from "next/link";
import { FaCalendarAlt, FaPlay } from "react-icons/fa";

import { Video } from "../models/video.types";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const detailHref = `/video/detail?id=${video.id}`;

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md">
      <div>
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-900">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
            <FaPlay className="h-2.5 w-2.5" />
            <span>{video.duration}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
          <FaCalendarAlt className="h-3.5 w-3.5 text-slate-400" />
          <span>{video.date}</span>
        </div>

        <h2 className="mt-2 line-clamp-3 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600">
          <Link href={detailHref}>{video.title}</Link>
        </h2>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <Link
          href={detailHref}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-white py-2 text-center text-xs font-semibold tracking-wider text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
        >
          <FaPlay className="h-3 w-3" />
          <span>Lihat Video</span>
        </Link>
      </div>
    </article>
  );
}