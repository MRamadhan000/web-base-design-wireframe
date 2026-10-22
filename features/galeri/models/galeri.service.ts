import {
  GaleriApi,
  GaleriListResponse,
  GaleriListParams,
  GaleriItem,
  PaginatedGaleri,
} from "./galeri.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getApiUrl(path: string): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  return `${API_BASE_URL.replace(/\/$/, "")}${path}`;
}

function getImageUrl(image: GaleriApi["image"]): string {
  if (!image) {
    return "";
  }

  const imagePath = typeof image === "string" ? image : image.url;
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  return new URL(imagePath, `${new URL(API_BASE_URL).origin}/`).toString();
}

function toGaleri(item: GaleriApi): GaleriItem {
  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    description: item.descrption ?? "",
    image: getImageUrl(item.image),
  };
}

async function fetchGaleriList(
  params: GaleriListParams = {},
): Promise<GaleriListResponse> {
  const { page = 1, limit = 9 } = params;
  console.log("Fetching galeri list with params:", { page, limit });
  const requestUrl = new URL(getApiUrl("/galleries"));
  requestUrl.searchParams.set("populate", "*");
  requestUrl.searchParams.set("pagination[page]", String(page));
  requestUrl.searchParams.set("pagination[pageSize]", String(limit));

  console.log("Fetching galeri list from:", requestUrl.toString());

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar galeri");
  }

  return response.json();
}

export async function getLatestGaleri(): Promise<GaleriItem[]> {
  const response = await fetchGaleriList({ page: 1, limit: 4 });
  return response.data.map(toGaleri);
}

export async function getAllGaleri(
  page = 1,
  limit = 9,
): Promise<PaginatedGaleri> {
  const response = await fetchGaleriList({ page, limit });

  return {
    data: response.data.map(toGaleri),
    pagination: response.meta.pagination,
  };
}