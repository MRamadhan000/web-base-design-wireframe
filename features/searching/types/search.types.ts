import type { Pagination } from "@/shared/models/pagination";

// ─── Search Item (Berita) ────────────────────────────────────────────────────
export interface SearchBeritaRaw {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  author?: string | null;
  image: { url: string } | null;
}

export interface SearchBeritaItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  image: string;
}

// ─── Search Item (Video) ─────────────────────────────────────────────────────
export interface SearchVideoRaw {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  description: string | null;
}

export interface SearchVideoItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
}

// ─── Search Item (Galeri) ────────────────────────────────────────────────────
export interface SearchGaleriRaw {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  image: { url: string } | null;
}

export interface SearchGaleriItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  image: string;
}

// ─── Aggregated Search Result ────────────────────────────────────────────────
export interface SearchResult {
  berita: SearchBeritaItem[];
  video: SearchVideoItem[];
  galeri: SearchGaleriItem[];
  pagination: {
    berita: Pagination;
    video: Pagination;
    galeri: Pagination;
  };
}

export interface SearchParams {
  keyword: string;
  page?: number;
  pageSize?: number;
}

