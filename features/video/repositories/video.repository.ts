import {
  getAllVideos,
  getLatestVideos,
  getRelatedVideos,
  getVideoById,
} from "../models/video.service";
import { Video, VideoDetail, VideoRelated } from "../models/video.types";

export async function findLatestVideos(): Promise<Video[]> {
  const response = await getLatestVideos();
  return response.data;
}

export async function findAllVideos(): Promise<Video[]> {
  const response = await getAllVideos();
  return response.data;
}

export async function findVideoById(id: number): Promise<VideoDetail | null> {
  const response = await getVideoById(id);
  return response.data;
}

export async function findRelatedVideos(id: number): Promise<VideoRelated[]> {
  const response = await getRelatedVideos(id);
  return response.data;
}