export const BERITA_QUERY_KEYS = {
  all: ["berita"] as const,

  latest: () => ["berita", "latest"] as const,

  list: (page: number, limit: number) => ["berita", "list", page, limit] as const,

  detail: (id: string) => ["berita", "detail", id] as const,

  related: (id: string) => ["berita", "related", id] as const,
};
