import { useQuery } from "@tanstack/react-query";

import {
    findBeritaBySlug,
    findRelatedBerita,
} from "../repositories/berita.repository";

import { BERITA_QUERY_KEYS } from "../constants/berita.query-keys";

export function useBeritaDetailBySlugViewModel(slug?: string) {
    const detailQuery = useQuery({
        queryKey: [...BERITA_QUERY_KEYS.detail(slug ?? ""), "slug"],
        queryFn: () => findBeritaBySlug(slug!),
        enabled: Boolean(slug),
    });

    const relatedQuery = useQuery({
        queryKey: [...BERITA_QUERY_KEYS.related(slug ?? ""), "slug"],
        queryFn: () => findRelatedBerita(slug!),
        enabled: Boolean(slug),
    });

    return {
        berita: detailQuery.data ?? null,
        relatedBerita: relatedQuery.data ?? [],

        isLoading:
            detailQuery.isLoading || relatedQuery.isLoading,

        error:
            detailQuery.error || relatedQuery.error,

        refetchDetail: detailQuery.refetch,
        refetchRelated: relatedQuery.refetch,
    };
}