
import { Video } from "../models/video.types";
import { VideoCard } from "./VideoCard";
import { VideoCardSkeleton } from "./VideoCardSkeleton";

interface VideoListProps {
  videoList: Video[];
  isLoading: boolean;
  skeletonCount?: number;
}

export function VideoList({
  videoList,
  isLoading = false,
  skeletonCount = 9,
}: VideoListProps) {
  return (
    <div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      aria-busy={isLoading}
      aria-label={isLoading ? "Memuat video" : undefined}
    >
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => (
            <VideoCardSkeleton key={index} />
          ))
        : videoList.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
    </div>
  );
}
