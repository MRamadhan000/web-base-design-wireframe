import {
  PaginatedVideos,
  Video,
  VideoApi,
  VideoApiResponse,
  VideoDetail,
  VideoListParams,
  VideoListResponse,
} from "./video.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getApiUrl(path: string): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  return `${API_BASE_URL.replace(/\/$/, "")}${path}`;
}

function getYoutubeId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1) || null;
    }

    if (parsedUrl.hostname.endsWith("youtube.com")) {
      return (
        parsedUrl.searchParams.get("v") ??
        parsedUrl.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1] ??
        null
      );
    }
  } catch {
    return null;
  }

  return null;
}

function toEmbedUrl(url: string): string {
  const youtubeId = getYoutubeId(url);
  return youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : url;
}

function toVideo(item: VideoApi): Video {
  const youtubeId = getYoutubeId(item.url);

  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    date: item.date,
    slug: item.slug,
    url: item.url,
    thumbnail: youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
      : "",
  };
}

function toVideoDetail(item: VideoApi): VideoDetail {
  return {
    ...toVideo(item),
    videoUrl: toEmbedUrl(item.url),
    description: item.description?.split(/\r?\n/).filter(Boolean) ?? [],
  };
}

async function fetchVideoList(
  params: VideoListParams = {},
): Promise<VideoListResponse> {
  const { page = 1, limit = 9 } = params;
  const requestUrl = new URL(getApiUrl("/videos/"));
  requestUrl.searchParams.set("pagination[page]", String(page));
  requestUrl.searchParams.set("pagination[pageSize]", String(limit));

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar video");
  }

  return response.json();
}

export async function getLatestVideos(): Promise<Video[]> {
  const response = await fetchVideoList({ page: 1, limit: 3 });
  return response.data.map(toVideo);
}

export async function getAllVideos(
  page = 1,
  limit = 9,
): Promise<PaginatedVideos> {
  const response = await fetchVideoList({ page, limit });

  return {
    data: response.data.map(toVideo),
    pagination: response.meta.pagination,
  };
}

export async function getVideoBySlug(
  slug: string,
): Promise<VideoDetail | null> {
  const query = new URLSearchParams({ "filters[slug][$eq]": slug });
  const response = await fetch(getApiUrl(`/videos?${query.toString()}`));

  if (!response.ok) {
    throw new Error("Gagal mengambil detail video");
  }

  const result: VideoApiResponse<VideoApi[]> = await response.json();
  const video = result.data?.[0];

  return video ? toVideoDetail(video) : null;
}

export async function getRelatedVideos(slug: string): Promise<Video[]> {
  const response = await fetchVideoList({ page: 1, limit: 9 });

  return response.data
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map(toVideo);
}