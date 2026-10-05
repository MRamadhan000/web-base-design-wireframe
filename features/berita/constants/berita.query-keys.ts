export const BERITA_QUERY_KEYS = {
  all: ["berita"] as const,

  latest: () => ["berita", "latest"] as const,

  list: () => ["berita", "list"] as const,

  detail: (id: number) => ["berita", "detail", id] as const,

  related: (id: number) => ["berita", "related", id] as const,
};
