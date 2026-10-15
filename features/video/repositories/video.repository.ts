import {
  getAllVideos,
  getLatestVideos,
  getRelatedVideos,
  getVideoBySlug,
} from "../models/video.service";
import { PaginatedVideos, Video, VideoDetail } from "../models/video.types";

export async function findLatestVideos(): Promise<Video[]> {
  return getLatestVideos();
}

export async function findAllVideos(
  page = 1,
  limit = 9,
): Promise<PaginatedVideos> {
  return getAllVideos(page, limit);
}

export async function findVideoBySlug(
  slug: string,
): Promise<VideoDetail | null> {
  return getVideoBySlug(slug);
}

export async function findRelatedVideos(slug: string): Promise<Video[]> {
  return getRelatedVideos(slug);
}