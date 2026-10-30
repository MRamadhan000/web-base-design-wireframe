import { Berita } from "@/features/berita/models/berita.types";
import { Galeri } from "@/features/galeri/models/galeri.types";
import { Video } from "@/features/video/models/video.types";
import type { Pagination } from "@/shared/models/pagination";

export interface SearchResult {
  berita: Berita[];
  video: Video[];
  galeri: Galeri[];
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