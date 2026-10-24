export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiListResponse<T> = {
  data: T[];
  meta: { pagination: Pagination };
};

export type QueryParams = {
  page?: number;
  limit?: number;
  [key: string]: string | number | undefined;
};

