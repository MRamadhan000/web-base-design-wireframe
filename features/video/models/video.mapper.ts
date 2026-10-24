import type { Video, VideoDetail, VideoRaw, VideoRelated } from "./video.types";

export function toVideo(item: VideoRaw): Video {
  return { ...item };
}

export function toVideoDetail(item: VideoRaw): VideoDetail {
  return {
    ...item,
    description: item.description ?? "",
  };
}

export function toVideoRelated(item: VideoRaw): VideoRelated {
  const { id, documentId, title, date, slug, url } = item;
  return { id, documentId, title, date, slug, url };
}
