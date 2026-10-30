import type {
  Berita,
  PaginatedBerita,
} from "../models/berita.types";
import {
  getAllBerita,
  getBeritaBySlug,
  getLatestBerita,
} from "../service/berita.service";

const DEFAULT_PAGE_SIZE = 9;

export function findLatestBerita(): Promise<Berita[]> {
  return getLatestBerita();
}

export function findAllBerita(
  page = 1,
  limit = DEFAULT_PAGE_SIZE,
): Promise<PaginatedBerita> {
  return getAllBerita({ page, limit },);
}

export function findBeritaBySlug(slug: string): Promise<Berita | null> {
  return getBeritaBySlug(slug);
}