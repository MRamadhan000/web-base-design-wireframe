import type {
  SiteSettings,
  SiteSettingsListResponse,
} from "../models/site-settings.types";
import { toSiteSettings } from "../models/site-settings.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ORG_DOCUMENT_ID = process.env.NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID;

function buildEndpoint(): string {
  if (!ORG_DOCUMENT_ID) {
    throw new Error(
      "NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID belum diatur di .env / .env.local",
    );
  }

  const params = new URLSearchParams({
    "filters[organization][documentId][$eq]": ORG_DOCUMENT_ID,
    populate: "logoUrl",
  });

  return `${BASE_URL}/site-settings?${params.toString()}`;
}

/**
 * Mengambil data pengaturan situs dari Strapi berdasarkan organization documentId.
 * Menggunakan filter sehingga response berbentuk list; diambil item pertama.
 *
 * @returns Data site settings yang sudah dimapping.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(buildEndpoint());

  if (!response.ok) {
    throw new Error("Gagal mengambil pengaturan situs");
  }

  const json: SiteSettingsListResponse = await response.json();
  const item = json.data[0];

  if (!item) {
    throw new Error("Data site settings tidak ditemukan");
  }

  return toSiteSettings(item);
}
