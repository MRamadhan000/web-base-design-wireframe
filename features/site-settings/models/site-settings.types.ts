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

export interface SiteSettingsApiResponse {
  data: {
    siteName: string;
    siteSubtitle: string;
    description: string | null;
    addresss: string | null;
    phone: string | null;
    email: string | null;
    instagramUrl: string | string[] | null;
    facebookUrl: string | string[] | null;
    youtubeUrl: string | string[] | null;
    tiktokUrl: string | string[] | null;
    logo: {
      url: string;
    } | null;
  };
}
