import {
  getLatestBerita,
  getAllBerita,
  getBeritaById,
  getRelatedBerita,
} from "../models/berita.service";

import {
  Berita,
  BeritaDetail,
  BeritaRelated,
} from "../models/berita.types";

export async function findLatestBerita(): Promise<Berita[]> {
  return getLatestBerita();
}

export async function findAllBerita(): Promise<Berita[]> {
  return getAllBerita();
}

export async function findBeritaById(
  id: number
): Promise<BeritaDetail | null> {
  const data = await getBeritaById(id);

  return data ?? null;
}

export async function findRelatedBerita(
  id: number
): Promise<BeritaRelated[]> {
  return getRelatedBerita(id);
}