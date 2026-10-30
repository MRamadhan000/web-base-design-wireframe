import { getImageUrl } from "@/shared/utils/image";
import type { SiteSettings, SiteSettingsRaw } from "./site-settings.types";

export function toSiteSettings(raw: SiteSettingsRaw): SiteSettings {
  return {
    siteName: raw.siteName,
    siteSubtitle: raw.siteSubtitle,
    description: raw.description ?? "",
    address: raw.address ?? "",
    phone: raw.phone ?? "",
    email: raw.email ?? "",
    instagramUrl: raw.instagramUrl ?? "",
    facebookUrl: raw.facebookUrl ?? "",
    youtubeUrl: raw.youtubeUrl ?? "",
    tiktokUrl: raw.tiktokUrl ?? "",
    logoUrl: raw.logoUrl?.url ? getImageUrl(raw.logoUrl.url) : null,
  };
}