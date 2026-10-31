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

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL belum diatur.");
}

const ENDPOINT = `${BASE_URL}/beritas`;

async function request(
  params: QueryParams,
  errorMessage: string,
): Promise<StrapiListResponse<BeritaRaw>> {
  const query = buildStrapiQuery({
    "sort[0]": "date:desc",
    ...params,
    populateFields: {
      image: ["url"],
      ...params.populateFields,
    },
  });

  const response = await fetch(`${ENDPOINT}?${query}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function getLatestBerita(): Promise<Berita[]> {
  const { data } = await request(
    {
      limit: 3,
    },
    "Gagal mengambil berita terbaru",
  );

  return data.map(toBerita);
}

export async function getAllBerita(
  params: QueryParams = {},
): Promise<PaginatedBerita> {
  const { data, meta } = await request(params, "Gagal mengambil daftar berita");

  return {
    data: data.map(toBerita),
    pagination: meta.pagination,
  };
}

export async function getBeritaBySlug(slug: string): Promise<Berita | null> {
  const { data } = await request(
    {
      "filters[slug][$eq]": slug,
      limit: 1,
    },
    "Gagal mengambil detail berita",
  );

  return data[0] ? toBerita(data[0]) : null;
}
