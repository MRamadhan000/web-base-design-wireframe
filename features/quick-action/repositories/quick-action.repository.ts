import {
  QuickActionApiItem,
  QuickActionApiResponse,
  QuickActionItem,
} from "../models/quick-action.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getApiUrl(path: string): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  return `${API_BASE_URL.replace(/\/+$/, "")}${path}`;
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

  const baseUrl = API_BASE_URL.replace(/\/api\/?$/, "");
  const relativePath = path.replace(/^\/+/, "");

  return new URL(
    relativePath,
    baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
  ).toString();
}

function getLink(link: QuickActionApiItem["link"]): string | null {
  const value = Array.isArray(link) ? link[0] : link;
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const trimmedValue = value.trim();

  if (trimmedValue.startsWith("/") && !trimmedValue.startsWith("//")) {
    return trimmedValue;
  }

  try {
    const url = new URL(trimmedValue);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function toQuickAction(item: QuickActionApiItem): QuickActionItem {
  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description ?? "",
    iconUrl: getMediaUrl(item.ikon?.url),
    href: getLink(item.link),
  };
}


export async function findAllQuickActions(): Promise<QuickActionItem[]> {
  const requestUrl = new URL(getApiUrl("/quick-actions"));

  requestUrl.searchParams.set("populate", "*");
  requestUrl.searchParams.set(
    "filters[organization][documentId][$eq]",
    process.env.NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID ?? "",
  );
  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar layanan");
  }

  const result: QuickActionApiResponse = await response.json();
  return result.data.map(toQuickAction);
}
