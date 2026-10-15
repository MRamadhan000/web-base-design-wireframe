export const GALERI_QUERY_KEYS = {
  latest: ["galeri", "latest"] as const,
  list: (page: number, limit: number) => ["galeri", "list", page, limit] as const,
};