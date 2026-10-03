import {
  getAllVideos,
  getLatestVideos,
  getRelatedVideos,
  getVideoById,
} from "../models/video.service";
import { Video, VideoDetail, VideoRelated } from "../models/video.types";

export async function findLatestVideos(): Promise<Video[]> {
  return getLatestVideos();
}

export async function findAllVideos(): Promise<Video[]> {
  return getAllVideos();
}

export async function findVideoById(id: number): Promise<VideoDetail | null> {
  const video = await getVideoById(id);
  return video ?? null;
}

export async function findRelatedVideos(id: number): Promise<VideoRelated[]> {
  return getRelatedVideos(id);
}