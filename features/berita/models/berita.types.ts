import type { Pagination } from "@/shared/models/pagination";

export interface BeritaRaw {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  content: string;
  image: { url: string } | null;
}

export type Berita = Omit<BeritaRaw, "image"> & { image: string };

export type BeritaRelated = Omit<Berita, "slug" | "content">;
export type PaginatedBerita = { data: Berita[]; pagination: Pagination };