import {
  getLatestBerita,
  getAllBerita,
  getBeritaById,
  getRelatedBerita,
} from "../service/berita.service";

import {
  Berita,
  BeritaDetail,
  BeritaRelated,
  PaginatedBerita,
} from "../models/berita.types";

export async function findLatestBerita(): Promise<Berita[]> {
  return getLatestBerita();
}

export async function findAllBerita(page: number): Promise<PaginatedBerita> {
  return getAllBerita(page, 9);
}

export async function findBeritaById(
  id: string
): Promise<BeritaDetail | null> {
  return getBeritaById(id);
}

export async function findRelatedBerita(
  id: string
): Promise<BeritaRelated[]> {
  return getRelatedBerita(id);
}