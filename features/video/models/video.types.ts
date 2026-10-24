import type { Pagination } from "@/shared/models/pagination";

export interface VideoRaw {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  url: string;
  description: string | null;
}

export type Video = VideoRaw;

export type VideoDetail = Omit<Video, "description"> & {
  description: string;
};

export type VideoRelated = Omit<Video, "description">;

export type PaginatedVideos = { data: Video[]; pagination: Pagination };