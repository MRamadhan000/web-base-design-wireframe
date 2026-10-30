import type {
  SiteSettings,
  SiteSettingsRaw,
} from "../models/site-settings.types";

import type { QueryParams } from "@/shared/models/pagination";

import { toSiteSettings } from "../models/site-settings.mapper";
import { buildStrapiQuery } from "@/shared/models/lib/build-strapi-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL belum diatur.");
}

const ENDPOINT = `${BASE_URL}/site-settings`;

type SiteSettingsListResponse = {
  data: SiteSettingsRaw[];
};

async function request(
  errorMessage: string,
): Promise<SiteSettingsListResponse> {
  const params: QueryParams = {
    limit: 1,
    populateFields: {
      logoUrl: ["url"],
    },
  };

  const query = buildStrapiQuery(params);

  const response = await fetch(`${ENDPOINT}?${query}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const { data } = await request("Gagal mengambil pengaturan situs");

  const item = data[0];

  if (!item) {
    throw new Error("Data site settings tidak ditemukan");
  }

  return toSiteSettings(item);
}
