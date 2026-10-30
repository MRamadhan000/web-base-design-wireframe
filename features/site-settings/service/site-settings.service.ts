import type {
  SiteSettings,
  SiteSettingsListResponse,
} from "../models/site-settings.types";

import { toSiteSettings } from "../models/site-settings.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ORG_DOCUMENT_ID = process.env.NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID;
const ENDPOINT = `${BASE_URL}/site-settings`;

async function request(
  errorMessage: string,
): Promise<SiteSettingsListResponse> {
  if (!ORG_DOCUMENT_ID) {
    throw new Error(
      "NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID belum diatur di .env / .env.local",
    );
  }

  const params = new URLSearchParams({
    "populate[logoUrl][fields][0]": "url",
  });

  const response = await fetch(`${ENDPOINT}?${params.toString()}`);

  if (!response.ok) throw new Error(errorMessage);

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
