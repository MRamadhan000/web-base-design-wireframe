import type {
  Video,
  VideoDetail,
  VideoRelated,
  PaginatedVideos,
} from "../models/video.types";
import {
  getAllVideos,
  getLatestVideos,
  getRelatedVideos,
  getVideoBySlug,
} from "../service/video.service";

const DEFAULT_PAGE_SIZE = 9;

export function findLatestVideos(): Promise<Video[]> {
  return getLatestVideos();
}

export function findAllVideos(
  page = 1,
  limit = DEFAULT_PAGE_SIZE,
): Promise<PaginatedVideos> {
  return getAllVideos({ page, limit });
}

export function findVideoBySlug(slug: string): Promise<VideoDetail | null> {
  return getVideoBySlug(slug);
}

export function findRelatedVideos(
  slug: string,
): Promise<VideoRelated[]> {
  return getRelatedVideos(slug);
}