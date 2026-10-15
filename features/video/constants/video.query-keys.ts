export const VIDEO_QUERY_KEYS = {
  latest: ["videos", "latest"] as const,
  list: (page: number, limit: number) => ["videos", "list", page, limit] as const,
  detail: (slug: string) => ["videos", "detail", slug] as const,
  related: (slug: string) => ["videos", "related", slug] as const,
};