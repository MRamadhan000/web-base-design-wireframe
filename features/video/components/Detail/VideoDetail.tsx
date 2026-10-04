import { FaCalendarAlt } from "react-icons/fa";

import { VideoDetail as VideoDetailType } from "../../models/video.types";
import { VideoPlayer } from "./VideoPlayer";
import { VideoShare } from "./VideoShare";
import { VideoTags } from "./VideoTags";

interface VideoDetailProps {
  video: VideoDetailType;
}

export function VideoDetail({ video }: VideoDetailProps) {
  return (
    <article className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8 lg:col-span-2">
      <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
        {video.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-primary" />
          <span>{video.date}</span>
          <span className="px-1">|</span>
          <span>{video.author}</span>
        </div>
        <VideoShare />
      </div>

      <VideoPlayer title={video.title} videoUrl={video.videoUrl} />

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-black sm:text-base">
        {video.description.map((paragraph, index) => (
          <p
            key={`${video.id}-${index}`}
            className={index === 0 ? "font-medium text-black" : ""}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <VideoTags tags={video.tags} />
    </article>
  );
}