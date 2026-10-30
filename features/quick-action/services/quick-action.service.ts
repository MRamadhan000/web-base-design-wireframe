import type { QueryParams } from "@/shared/models/pagination";
import { buildStrapiQuery } from "@/shared/models/lib/build-strapi-query";

import type {
  QuickActionApiResponse,
  QuickActionRaw,
} from "../models/quick-action.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL belum diatur.");
}

const ENDPOINT = `${BASE_URL}/quick-actions`;

export async function fetchQuickActions(): Promise<QuickActionRaw[]> {
  const params: QueryParams = {
    populateFields: {
      ikon: ["url"],
    },
  };

  const query = buildStrapiQuery(params);

  const response = await fetch(`${ENDPOINT}?${query}`);

  if (!response.ok) {
    throw new Error("Gagal mengambil quick actions");
  }

  const result: QuickActionApiResponse = await response.json();

  return result.data;
}