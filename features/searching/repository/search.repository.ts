import type { SearchParams, SearchResult } from "../types/search.types";
import { searchBerita, searchGaleri, searchVideo } from "../services/search.service";

/**
 * Menjalankan ketiga pencarian secara bersamaan (Promise.all) dan
 * mengembalikan hasil gabungan berita, video, dan galeri.
 */
export async function findSearchResults(
  params: SearchParams,
): Promise<SearchResult> {
  const [beritaResult, videoResult, galeriResult] = await Promise.all([
    searchBerita(params),
    searchVideo(params),
    searchGaleri(params),
  ]);

  return {
    berita: beritaResult.data,
    video: videoResult.data,
    galeri: galeriResult.data,
    pagination: {
      berita: beritaResult.pagination,
      video: videoResult.pagination,
      galeri: galeriResult.pagination,
    },
  };
}

