import { Video } from "../models/video.types";
import { VideoCard } from "./VideoCard";

interface VideoListProps {
  videoList: Video[];
}

export function VideoList({ videoList }: VideoListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {videoList.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}