export interface Berita {
  id: number;
  documentId: string;
  title: string;
  date: string;
  image: string;
}

export type BeritaApi = Omit<Berita, "image"> & {
  image: { url: string } | string | null;
  author: string | null;
  content: string | null;
};

export type BeritaApiResponse<T> = { data: T };

export type BeritaListParams = {
  page?: number;
  limit?: number;
  [key: string]: string | number | undefined;
};

export type BeritaListResponse = BeritaApiResponse<BeritaApi[]> & {
  meta: { pagination: BeritaPagination };
};

export interface BeritaDetail extends Berita {
  author: string | null;
  content: string[];
  tags: string[];
}

export interface BeritaRelated {
  id: number;
  documentId: string;
  title: string;
  date: string;
  image: string;
}

export interface BeritaPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PaginatedBerita {
  data: Berita[];
  pagination: BeritaPagination;
}