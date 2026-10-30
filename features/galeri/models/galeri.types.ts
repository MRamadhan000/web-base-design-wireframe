import type { Pagination } from "@/shared/models/pagination";

export interface Galeri<
  TImage = string,
  TDescription = string,
> {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: TDescription;
  image: TImage;
}

export type GaleriRaw = Galeri<{ url: string }>;

export type GaleriDetail = Galeri;

export type PaginatedGaleri = {
  data: Galeri[];
  pagination: Pagination;
};