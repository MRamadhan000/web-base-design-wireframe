import Link from "next/link";
import { FaPlay } from "react-icons/fa";

import { VideoRelated as VideoRelatedType } from "../../models/video.types";

interface VideoRelatedProps {
  videoList: VideoRelatedType[];
}

export function VideoRelated({ videoList }: VideoRelatedProps) {
  return (
    <div className="rounded-xl border border-border/80 bg-surface p-5 shadow-sm">
      <h2 className="mb-4 border-b border-border pb-2 text-sm font-bold text-black">
        Video Lainnya
      </h2>
      <div className="space-y-4">
        {videoList.map((item) => (
          <Link
            key={item.id}
            href={`/video/detail?id=${item.id}`}
            className="group flex items-start gap-3"
          >
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-black">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 text-[9px] font-medium text-white">
                {item.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-90 transition-opacity group-hover:bg-black/10">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-xs transition-transform group-hover:scale-110">
                  <FaPlay className="ml-0.5 h-2 w-2" />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-medium text-primary">
                {item.date}
              </span>
              <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-black transition-colors group-hover:text-primary">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
        {videoList.length === 0 && (
          <p className="text-xs text-muted">Video tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}