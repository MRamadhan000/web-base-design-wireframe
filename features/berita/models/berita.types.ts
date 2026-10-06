export interface Berita {
  id: number;
  documentId: string;
  title: string;
  date: string;
  image: string;
}

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