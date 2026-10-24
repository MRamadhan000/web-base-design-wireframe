import type {
  Berita,
  BeritaRelated,
  PaginatedBerita,
} from "../models/berita.types";
import {
  getAllBerita,
  getBeritaBySlug,
  getLatestBerita,
  getRelatedBerita,
} from "../service/berita.service";

const DEFAULT_PAGE_SIZE = 9;

export function findLatestBerita(): Promise<Berita[]> {
  return getLatestBerita();
}

export function findAllBerita(
  page = 1,
  limit = DEFAULT_PAGE_SIZE,
): Promise<PaginatedBerita> {
  return getAllBerita({ page, limit });
}

export function findBeritaBySlug(slug: string): Promise<Berita | null> {
  return getBeritaBySlug(slug);
}

export function findRelatedBerita(
  documentId: string,
): Promise<BeritaRelated[]> {
  return getRelatedBerita(documentId);
}
