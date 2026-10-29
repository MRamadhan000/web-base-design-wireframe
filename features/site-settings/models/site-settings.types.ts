export interface SiteSettings {
  siteName: string;
  siteSubtitle: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  instagramUrl: string | null;
  facebookUrl: string | null;
  youtubeUrl: string | null;
  tiktokUrl: string | null;
  logoUrl: string | null;
}

export interface SiteSettingsRaw {
  siteName: string;
  siteSubtitle: string;
  description: string | null;
  addresss: string | null;
  phone: string | null;
  email: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  youtubeUrl: string | null;
  tiktokUrl: string | null;
  logoUrl: { url: string } | null;
}

/** Response dari endpoint list (filter by organization documentId) */
export type SiteSettingsListResponse = {
  data: SiteSettingsRaw[];
};

/** @deprecated Gunakan SiteSettingsListResponse */
export type SiteSettingsApiResponse = {
  data: SiteSettingsRaw;
};
