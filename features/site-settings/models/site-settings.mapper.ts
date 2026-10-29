import { getImageUrl } from "@/shared/utils/image";
import type { SiteSettings, SiteSettingsRaw } from "./site-settings.types";

type RawData = SiteSettingsRaw;

function getExternalUrl(value: string | string[] | null): string | null {
  const url = Array.isArray(value) ? value[0] : value;
  if (!url) return null;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? parsed.toString()
      : null;
  } catch {
    return null;
  }
}

export function toSiteSettings(raw: RawData): SiteSettings {
  return {
    siteName: raw.siteName,
    siteSubtitle: raw.siteSubtitle,
    description: raw.description ?? "",
    address: raw.addresss ?? "",
    phone: raw.phone ?? "",
    email: raw.email ?? "",
    instagramUrl: getExternalUrl(raw.instagramUrl),
    facebookUrl: getExternalUrl(raw.facebookUrl),
    youtubeUrl: getExternalUrl(raw.youtubeUrl),
    tiktokUrl: getExternalUrl(raw.tiktokUrl),
    logoUrl: raw.logoUrl?.url ? getImageUrl(raw.logoUrl.url) : null,
  };
}
