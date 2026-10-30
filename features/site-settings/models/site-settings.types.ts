export interface SiteSettings<TLogo = string | null> {
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
  logoUrl: TLogo;
}

export type SiteSettingsRaw = SiteSettings<{ url: string } | null>;

export type SiteSettingsListResponse = {
  data: SiteSettingsRaw[];
};

export type SiteSettingsApiResponse = {
  data: SiteSettingsRaw;
};