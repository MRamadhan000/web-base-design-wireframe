import {
  SiteSettings,
  SiteSettingsApiResponse,
} from "../models/site-settings.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getApiUrl(): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  const url = new URL(
    `${API_BASE_URL.replace(/\/+$/, "")}/site-setting`,
  );
  url.searchParams.set("populate", "logo");
  return url.toString();
}

function getMediaUrl(path: string | null | undefined): string | null {
  if (!path) {
    return null;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  return new URL(path, `${new URL(API_BASE_URL).origin}/`).toString();
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
    logoUrl: getMediaUrl(data.logo?.url),
  };
}
