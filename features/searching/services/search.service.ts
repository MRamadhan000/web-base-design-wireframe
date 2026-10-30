import type { StrapiListResponse } from "@/shared/models/pagination";
import type { SearchParams } from "../types/search.types";

import { Berita, BeritaRaw } from "@/features/berita/models/berita.types";
import { Video, VideoRaw } from "@/features/video/models/video.types";
import { Galeri, GaleriRaw } from "@/features/galeri/models/galeri.types";
import { toVideo } from "@/features/video/models/video.mapper";
import { toGaleri } from "@/features/galeri/models/galeri.mapper";
import { toBerita } from "@/features/berita/models/berita.mapper";
import { buildStrapiQuery } from "@/shared/models/lib/build-strapi-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

type SearchResult<TRaw, T> = {
  data: T[];
  pagination: StrapiListResponse<TRaw>["meta"]["pagination"];
};

/**
 * Helper generik untuk search ke endpoint Strapi dengan keyword
 * di beberapa field (OR) dan scoping organization.
 */
async function searchEndpoint<TRaw, T>(
  endpoint: string,
  orFields: string[],
  params: SearchParams,
  mapper: (raw: TRaw) => T,
  errorMessage: string,
): Promise<SearchResult<TRaw, T>> {
  const { keyword, page = 1, pageSize = 10 } = params;

  const qs = buildStrapiQuery({
    page,
    limit: pageSize,
    keyword,
    orFields,
    // Sama seperti sebelumnya: populate semua relasi
    populate: "*",
  });

  const res = await fetch(`${BASE_URL}/${endpoint}?${qs}`);
  if (!res.ok) throw new Error(errorMessage);

  const json: StrapiListResponse<TRaw> = await res.json();
  return {
    data: json.data.map(mapper),
    pagination: json.meta.pagination,
  };
}

export function searchBerita(params: SearchParams) {
  return searchEndpoint<BeritaRaw, Berita>(
    "beritas",
    ["title", "content", "author"],
    params,
    toBerita,
    "Gagal mencari berita",
  );
}

export function searchVideo(params: SearchParams) {
  return searchEndpoint<VideoRaw, Video>(
    "videos",
    ["title", "description"],
    params,
    toVideo,
    "Gagal mencari video",
  );
}

export function searchGaleri(params: SearchParams) {
  return searchEndpoint<GaleriRaw, Galeri>(
    "galleries",
    ["title", "descrption"],
    params,
    toGaleri,
    "Gagal mencari galeri",
  );
}
