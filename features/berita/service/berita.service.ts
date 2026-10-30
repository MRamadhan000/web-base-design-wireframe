import {
  type QueryParams,
  type StrapiListResponse,
} from "@/shared/models/pagination";

import type {
  Berita,
  BeritaRaw,
  PaginatedBerita,
} from "../models/berita.types";
import { toBerita } from "../models/berita.mapper";
import { buildStrapiQuery } from "@/shared/models/lib/build-strapi-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ENDPOINT = `${BASE_URL}/beritas`;

/**
 * Mengambil data berita dari Strapi berdasarkan query params.
 *
 * @param params - Parameter filter, pagination, atau limit untuk query Strapi.
 * @param errorMessage - Pesan error jika request gagal.
 * @returns Response Strapi yang berisi data berita dan metadata pagination.
 */

async function request(
  params: QueryParams,
  errorMessage: string,
): Promise<StrapiListResponse<BeritaRaw>> {
  const response = await fetch(`${ENDPOINT}?${buildStrapiQuery(params)}`);
  if (!response.ok) throw new Error(errorMessage);
  return response.json();
}

export async function getLatestBerita(): Promise<Berita[]> {
  const { data } = await request(
    { limit: 3 },
    "Gagal mengambil berita terbaru",
  );
  return data.map(toBerita);
}

export async function getAllBerita(
  params: QueryParams = {},
): Promise<PaginatedBerita> {
  const { data, meta } = await request(params, "Gagal mengambil daftar berita");
  return { data: data.map(toBerita), pagination: meta.pagination };
}

export async function getBeritaBySlug(slug: string): Promise<Berita | null> {
  const { data } = await request(
    { "filters[slug][$eq]": slug },
    "Gagal mengambil detail berita",
  );

  return data[0] ? toBerita(data[0]) : null;
}