import {
  type QueryParams,
  type StrapiListResponse,
} from "@/shared/models/pagination";

import type {
  Video,
  VideoDetail,
  VideoRaw,
  VideoRelated,
  PaginatedVideos,
} from "../models/video.types";
import { toVideo, toVideoDetail, toVideoRelated } from "../models/video.mapper";
import { buildStrapiQuery } from "@/shared/models/lib/build-strapi-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ENDPOINT = `${BASE_URL}/videos`;

/**
 * Mengambil data video dari Strapi berdasarkan query params.
 *
 * @param params - Parameter filter, pagination, atau limit untuk query Strapi.
 * @param errorMessage - Pesan error jika request gagal.
 * @returns Response Strapi yang berisi data video dan metadata pagination.
 */
async function request(
  params: QueryParams,
  errorMessage: string,
): Promise<StrapiListResponse<VideoRaw>> {
  const response = await fetch(`${ENDPOINT}?${buildStrapiQuery(params)}`);
  if (!response.ok) throw new Error(errorMessage);
  return response.json();
}

export async function getLatestVideos(): Promise<Video[]> {
  const { data } = await request(
    { limit: 3 },
    "Gagal mengambil video terbaru",
  );

  return data.map(toVideo);
}

export async function getAllVideos(
  params: QueryParams = {},
): Promise<PaginatedVideos> {
  const { data, meta } = await request(params, "Gagal mengambil daftar video");
  return { data: data.map(toVideo), pagination: meta.pagination };
}

export async function getVideoBySlug(
  slug: string,
): Promise<VideoDetail | null> {
  const { data } = await request(
    { "filters[slug][$eq]": slug },
    "Gagal mengambil detail video",
  );
  return data[0] ? toVideoDetail(data[0]) : null;
}

export async function getRelatedVideos(
  slug: string,
): Promise<VideoRelated[]> {
  const { data } = await request(
    { "filters[slug][$ne]": slug, limit: 2 },
    "Gagal mengambil video terkait",
  );
  return data.map(toVideoRelated);
}
