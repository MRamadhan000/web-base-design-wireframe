import {
  Berita,
  BeritaApi,
  BeritaApiResponse,
  BeritaDetail,
  BeritaListParams,
  BeritaListResponse,
  BeritaRelated,
  PaginatedBerita,
} from "../models/berita.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getApiUrl(path: string): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi");
  }

  return `${API_BASE_URL.replace(/\/$/, "")}${path}`;
}

function getImageUrl(image: BeritaApi["image"]): string {
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

function toBerita(item: BeritaApi): Berita {
  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    date: item.date,
    image: getImageUrl(item.image),
  };
}

function toBeritaDetail(item: BeritaApi): BeritaDetail {
  return {
    ...toBerita(item),
    author: item.author,
    content: item.content?.split(/\r?\n/).filter(Boolean) ?? [],
    tags: [],
  };
}

async function fetchBeritaList(
  url = "/beritas",
  params: BeritaListParams = {},
): Promise<BeritaListResponse> {
  const { page = 1, limit = 10, ...queryParams } = params;
  const requestUrl = new URL(getApiUrl(url));
  const query = requestUrl.searchParams;

  query.set("populate", String(queryParams.populate ?? query.get("populate") ?? "*"));
  query.set("pagination[page]", String(page));
  query.set("pagination[pageSize]", String(limit));

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined) {
      query.set(key, String(value));
    }
  });

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar berita");
  }

  return response.json();
}

export async function getLatestBerita(): Promise<Berita[]> {
  const response = await fetchBeritaList("/beritas", { page: 1, limit: 3 });
  return response.data.map(toBerita);
}

export async function getAllBerita(
  url = "/beritas",
  params: BeritaListParams = {},
): Promise<PaginatedBerita> {
  const response = await fetchBeritaList(url, params);

  return {
    data: response.data.map(toBerita),
    pagination: response.meta.pagination,
  };
}

export async function getBeritaById(id: string): Promise<BeritaDetail | null> {
  const query = new URLSearchParams({ populate: "*" });
  const response = await fetch(
    getApiUrl(`/beritas/${encodeURIComponent(id)}?${query.toString()}`),
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil detail berita");
  }

  const result: BeritaApiResponse<BeritaApi> = await response.json();
  return toBeritaDetail(result.data);
}

export async function getRelatedBerita(id: string): Promise<BeritaRelated[]> {
  const response = await fetchBeritaList("/beritas", { page: 1, limit: 9 });

  return response.data
    .filter((item) => item.documentId !== id)
    .slice(0, 2)
    .map((item) => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      date: item.date,
      image: getImageUrl(item.image),
    }));
}
