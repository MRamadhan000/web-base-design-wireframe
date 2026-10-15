export interface Video {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  url: string;
  thumbnail: string;
}

export interface VideoApi extends Omit<Video, "thumbnail"> {
  description: string | null;
}

export type VideoApiResponse<T> = { data: T };

export type VideoListParams = {
  page?: number;
  limit?: number;
};

export type VideoListResponse = VideoApiResponse<VideoApi[]> & {
  meta: { pagination: VideoPagination };
};

export interface VideoDetail extends Video {
  videoUrl: string;
  description: string[];
}

export type VideoRelated = Video;

export interface VideoPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PaginatedVideos {
  data: Video[];
  pagination: VideoPagination;
}