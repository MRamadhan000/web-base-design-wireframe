import type { Pagination } from "@/shared/models/pagination";

export interface GaleriRaw {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string | null;
  image: { url: string } | null;
}

export type Galeri = Omit<GaleriRaw, "image" | "description"> & {
  image: string;
  description: string;
};

export type PaginatedGaleri = { data: Galeri[]; pagination: Pagination };