import {
  type QueryParams,
  type StrapiListResponse,
} from "@/shared/models/pagination";

import type { Galeri, GaleriDetail, GaleriRaw, PaginatedGaleri } from "../models/galeri.types";
import { toGaleri } from "../models/galeri.mapper";
import { buildStrapiQuery } from "@/shared/models/lib/build-strapi-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ENDPOINT = `${BASE_URL}/galleries`;

/**
 * Mengambil data galeri dari Strapi berdasarkan query params.
 *
 * @param params - Parameter filter, pagination, atau limit untuk query Strapi.
 * @param errorMessage - Pesan error jika request gagal.
 * @returns Response Strapi yang berisi data galeri dan metadata pagination.
 */
async function request(
  params: QueryParams,
  errorMessage: string,
): Promise<StrapiListResponse<GaleriRaw>> {
  const response = await fetch(`${ENDPOINT}?${buildStrapiQuery(params)}`);
  if (!response.ok) throw new Error(errorMessage);
  return response.json();
}

export async function getLatestGaleri(): Promise<Galeri[]> {
  const { data } = await request(
    { limit: 4 },
    "Gagal mengambil galeri terbaru",
  );
  return data.map(toGaleri);
}

export async function getAllGaleri(
  params: QueryParams = {},
): Promise<PaginatedGaleri> {
  const { data, meta } = await request(params, "Gagal mengambil daftar galeri");
  return { data: data.map(toGaleri), pagination: meta.pagination };
}

export async function getGaleriBySlug(slug: string): Promise<GaleriDetail | null> {
  const { data } = await request(
    { "filters[slug][$eq]": slug },
    "Gagal mengambil detail galeri",
  );
  return data[0] ? toGaleri(data[0]) : null;
}
