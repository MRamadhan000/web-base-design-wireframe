import type {
  SiteSettings,
  SiteSettingsApiResponse,
} from "../models/site-settings.types";
import { toSiteSettings } from "../models/site-settings.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const ENDPOINT = `${BASE_URL}/site-setting?populate=logoUrl`;

/**
 * Mengambil data pengaturan situs dari Strapi (single type).
 *
 * @returns Data site settings yang sudah dimapping.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(ENDPOINT);

  if (!response.ok) {
    throw new Error("Gagal mengambil pengaturan situs");
  }

  const { data }: SiteSettingsApiResponse = await response.json();
  return toSiteSettings(data);
}
