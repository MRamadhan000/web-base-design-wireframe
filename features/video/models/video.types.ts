import type { Pagination } from "@/shared/models/pagination";

export interface Video<TDescription = string | null> {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  url: string;
  description: TDescription;
}

export type VideoRaw = Video<string | null>;

export type VideoDetail = Video<string>;

export type PaginatedVideos = {
  data: VideoRaw[];
  pagination: Pagination;
};