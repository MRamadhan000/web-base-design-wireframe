export const SEARCH_QUERY_KEYS = {
  all: ["search"] as const,

  results: (keyword: string, page: number, pageSize: number) =>
    ["search", "results", keyword, page, pageSize] as const,
};

