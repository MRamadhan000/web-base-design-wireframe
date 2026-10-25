
import type {
  Video,
  VideoDetail,
  VideoRaw,
  VideoRelated,
} from "./video.types";

function toYouTubeEmbedUrl(url: string | null | undefined): string {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1).split("/")[0];
    } else if (
      hostname === "youtube.com" ||
      hostname === "m.youtube.com" ||
      hostname === "youtube-nocookie.com"
    ) {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v");
      } else {
        const match = parsedUrl.pathname.match(
          /^\/(?:embed|shorts|live)\/([^/]+)/
        );

        videoId = match?.[1] ?? null;
      }
    }

    if (!videoId || !/^[\w-]{11}$/.test(videoId)) {
      return "";
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

export function toVideo(item: VideoRaw): Video {
  return {
    ...item,
    url: toYouTubeEmbedUrl(item.url),
  };
}

export function toVideoDetail(item: VideoRaw): VideoDetail {
  return {
    ...item,
    url: toYouTubeEmbedUrl(item.url),
    description: item.description ?? "",
  };
}

export function toVideoRelated(item: VideoRaw): VideoRelated {
  const { id, documentId, title, date, slug, url } = item;

  return {
    id,
    documentId,
    title,
    date,
    slug,
    url: toYouTubeEmbedUrl(url),
  };
}
