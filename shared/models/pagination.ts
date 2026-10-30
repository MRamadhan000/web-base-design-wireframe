export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiListResponse<T> = {
  data: T[];
  meta: {
    pagination: Pagination;
  };
};

export type PopulateFields = {
  [relation: string]: string[];
};

export type QueryParams = {
  page?: number;
  limit?: number;

  // Search
  keyword?: string;
  orFields?: string[];

  // Field content type biasa
  fields?: string[];

  // Field relasi/media
  populateFields?: PopulateFields;

  // Filter dinamis
  [key: string]:
    | string
    | number
    | boolean
    | string[]
    | PopulateFields
    | undefined
    | null;
};