export interface GaleriItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface GaleriApi extends Omit<GaleriItem, "image" | "description"> {
  descrption: string | null;
  image: { url: string } | string | null;
}

export type GaleriApiResponse<T> = { data: T };

export type GaleriListParams = {
  page?: number;
  limit?: number;
};

export type GaleriListResponse = GaleriApiResponse<GaleriApi[]> & {
  meta: { pagination: GaleriPagination };
};

export interface GaleriPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PaginatedGaleri {
  data: GaleriItem[];
  pagination: GaleriPagination;
}