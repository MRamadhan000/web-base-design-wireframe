import type { StrapiListResponse } from "@/shared/models/pagination";
import type {
  SearchParams,
} from "../types/search.types";

import { Berita, BeritaRaw } from "@/features/berita/models/berita.types";
import { Video, VideoRaw } from "@/features/video/models/video.types";
import { Galeri, GaleriRaw } from "@/features/galeri/models/galeri.types";
import { toVideo } from "@/features/video/models/video.mapper";
import { toGaleri } from "@/features/galeri/models/galeri.mapper";
import { toBerita } from "@/features/berita/models/berita.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ORG_ID = () => {
  const id = process.env.NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID;
  if (!id) throw new Error("NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID belum diatur di .env");
  return id;
};

/**
 * Builds a Strapi search query string with $or filters for keyword matching
 * across multiple fields and organization scoping.
 */
function buildSearchQuery(
  keyword: string,
  orFields: string[],
  page: number,
  pageSize: number,
): string {
  const params = new URLSearchParams({
    populate: "*",
    "pagination[page]": String(page),
    "pagination[pageSize]": String(pageSize),
    "filters[organization][documentId][$eq]": ORG_ID(),
  });

  orFields.forEach((field, index) => {
    params.set(
      `filters[$or][${index}][${field}][$containsi]`,
      keyword,
    );
  });

  return params.toString();
}

// ─── Berita ──────────────────────────────────────────────────────────────────

export async function searchBerita(
  params: SearchParams,
): Promise<{ data: Berita[]; pagination: StrapiListResponse<BeritaRaw>["meta"]["pagination"] }> {
  const { keyword, page = 1, pageSize = 10 } = params;
  const qs = buildSearchQuery(keyword, ["title", "content", "author"], page, pageSize);

  const res = await fetch(`${BASE_URL}/beritas?${qs}`);
  if (!res.ok) throw new Error("Gagal mencari berita");

  const json: StrapiListResponse<BeritaRaw> = await res.json();
  return {
    data: json.data.map(toBerita),
    pagination: json.meta.pagination,
  };
}

// ─── Video ───────────────────────────────────────────────────────────────────

export async function searchVideo(
  params: SearchParams,
): Promise<{ data: Video[]; pagination: StrapiListResponse<VideoRaw>["meta"]["pagination"] }> {
  const { keyword, page = 1, pageSize = 10 } = params;
  const qs = buildSearchQuery(keyword, ["title", "description"], page, pageSize);

  const res = await fetch(`${BASE_URL}/videos?${qs}`);
  if (!res.ok) throw new Error("Gagal mencari video");

  const json: StrapiListResponse<VideoRaw> = await res.json();
  return {
    data: json.data.map(toVideo),
    pagination: json.meta.pagination,
  };
}

// ─── Galeri ──────────────────────────────────────────────────────────────────

export async function searchGaleri(
  params: SearchParams,
): Promise<{ data: Galeri[]; pagination: StrapiListResponse<GaleriRaw>["meta"]["pagination"] }> {
  const { keyword, page = 1, pageSize = 10 } = params;
  // Note: API uses "descrption" (typo) per schema
  const qs = buildSearchQuery(keyword, ["title", "descrption"], page, pageSize);

  const res = await fetch(`${BASE_URL}/galleries?${qs}`);
  if (!res.ok) throw new Error("Gagal mencari galeri");

  const json: StrapiListResponse<GaleriRaw> = await res.json();
  return {
    data: json.data.map(toGaleri),
    pagination: json.meta.pagination,
  };
}
