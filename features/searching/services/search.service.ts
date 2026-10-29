import type { StrapiListResponse } from "@/shared/models/pagination";
import type {
  SearchBeritaItem,
  SearchBeritaRaw,
  SearchGaleriItem,
  SearchGaleriRaw,
  SearchParams,
  SearchVideoItem,
  SearchVideoRaw,
} from "../types/search.types";
import {
  toSearchBeritaItem,
  toSearchGaleriItem,
  toSearchVideoItem,
} from "../types/search.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ORG_ID = () => {
  const id = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  if (!id) throw new Error("NEXT_PUBLIC_ORGANIZATION_ID belum diatur di .env");
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
    "filters[organization][id][$eq]": ORG_ID(),
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
): Promise<{ data: SearchBeritaItem[]; pagination: StrapiListResponse<SearchBeritaRaw>["meta"]["pagination"] }> {
  const { keyword, page = 1, pageSize = 10 } = params;
  const qs = buildSearchQuery(keyword, ["title", "content", "author"], page, pageSize);

  const res = await fetch(`${BASE_URL}/beritas?${qs}`);
  if (!res.ok) throw new Error("Gagal mencari berita");

  const json: StrapiListResponse<SearchBeritaRaw> = await res.json();
  return {
    data: json.data.map(toSearchBeritaItem),
    pagination: json.meta.pagination,
  };
}

// ─── Video ───────────────────────────────────────────────────────────────────

export async function searchVideo(
  params: SearchParams,
): Promise<{ data: SearchVideoItem[]; pagination: StrapiListResponse<SearchVideoRaw>["meta"]["pagination"] }> {
  const { keyword, page = 1, pageSize = 10 } = params;
  const qs = buildSearchQuery(keyword, ["title", "description"], page, pageSize);

  const res = await fetch(`${BASE_URL}/videos?${qs}`);
  if (!res.ok) throw new Error("Gagal mencari video");

  const json: StrapiListResponse<SearchVideoRaw> = await res.json();
  return {
    data: json.data.map(toSearchVideoItem),
    pagination: json.meta.pagination,
  };
}

// ─── Galeri ──────────────────────────────────────────────────────────────────

export async function searchGaleri(
  params: SearchParams,
): Promise<{ data: SearchGaleriItem[]; pagination: StrapiListResponse<SearchGaleriRaw>["meta"]["pagination"] }> {
  const { keyword, page = 1, pageSize = 10 } = params;
  // Note: API uses "descrption" (typo) per schema
  const qs = buildSearchQuery(keyword, ["title", "descrption"], page, pageSize);

  const res = await fetch(`${BASE_URL}/galleries?${qs}`);
  if (!res.ok) throw new Error("Gagal mencari galeri");

  const json: StrapiListResponse<SearchGaleriRaw> = await res.json();
  return {
    data: json.data.map(toSearchGaleriItem),
    pagination: json.meta.pagination,
  };
}
