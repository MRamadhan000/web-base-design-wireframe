import {
  SiteSettings,
  SiteSettingsApiResponse,
} from "../models/site-settings.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getApiUrl(): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  const url = new URL(`${API_BASE_URL.replace(/\/+$/, "")}/site-setting`);
  url.searchParams.set("populate", "logoUrl");
  return url.toString();
}

function getMediaUrl(path: string | null | undefined): string | null {
  if (!path) {
    return null;
  }

  // Jika URL sudah lengkap, gunakan langsung.
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  const baseUrl = API_BASE_URL.replace(/\/api\/?$/, "");

  const relativePath = path.replace(/^\/+/, "");

  const mediaUrl = new URL(
    relativePath,
    baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
  ).toString();

  return mediaUrl;
}

function getExternalUrl(value: string | string[] | null): string | null {
  const url = Array.isArray(value) ? value[0] : value;

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:"
      ? parsedUrl.toString()
      : null;
  } catch {
    return null;
  }
}

export async function findSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(getApiUrl());

  if (!response.ok) {
    throw new Error("Gagal mengambil pengaturan situs");
  }

  const { data }: SiteSettingsApiResponse = await response.json();

  console.log(getMediaUrl(data.logoUrl?.url));

  return {
    siteName: data.siteName,
    siteSubtitle: data.siteSubtitle,
    description: data.description ?? "",
    address: data.addresss ?? "",
    phone: data.phone ?? "",
    email: data.email ?? "",
    instagramUrl: getExternalUrl(data.instagramUrl),
    facebookUrl: getExternalUrl(data.facebookUrl),
    youtubeUrl: getExternalUrl(data.youtubeUrl),
    tiktokUrl: getExternalUrl(data.tiktokUrl),
    logoUrl: getMediaUrl(data.logoUrl?.url),
  };
}
