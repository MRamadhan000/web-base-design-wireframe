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

export type SiteSettingsApiResponse = {
  data: {
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
  };
};
