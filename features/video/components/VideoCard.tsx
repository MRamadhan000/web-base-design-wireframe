import Link from "next/link";
import { FaCalendarAlt, FaPlay } from "react-icons/fa";

import { Video } from "../models/video.types";
import { VideoPlayer } from "./Detail/VideoPlayer";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const detailHref = `/video/${video.slug}`;

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-border/80 bg-surface p-4 shadow-sm transition-all hover:border-primary-light hover:shadow-md">
      <div>
        {video.url ? (
          <VideoPlayer title={video.title} videoUrl={video.url} />
        ) : (
          <div className="relative mt-6 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-black text-sm text-white/70">
            Video tidak tersedia
          </div>
        )}

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-muted">
          <FaCalendarAlt className="h-3.5 w-3.5 text-muted-light" />
          <span>{video.date}</span>
        </div>

        <h2 className="mt-2 line-clamp-3 text-base font-bold leading-snug text-black transition-colors group-hover:text-primary">
          <Link href={detailHref}>{video.title}</Link>
        </h2>
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <Link
          href={detailHref}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-surface py-2 text-center text-xs font-semibold tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <FaPlay className="h-3 w-3" />
          <span>Lihat Video</span>
        </Link>
      </div>
    </article>
  );
}
