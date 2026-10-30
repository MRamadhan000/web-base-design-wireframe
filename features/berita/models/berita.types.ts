import type { Pagination } from "@/shared/models/pagination";

export interface Berita<TImage = string> {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  content: string;
  image: TImage;
}

export type BeritaRaw = Berita<{ url: string } | null>;

export type BeritaRelated = Omit<Berita, "slug" | "content">;

export type PaginatedBerita = {
  data: Berita[];
  pagination: Pagination;
};