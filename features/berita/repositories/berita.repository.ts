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
} from "../models/berita.types";

export async function findLatestBerita(): Promise<Berita[]> {
  const response = await getLatestBerita();
  return response.data;
}

export async function findAllBerita(): Promise<Berita[]> {
  const response = await getAllBerita();
  return response.data;
}

export async function findBeritaById(
  id: number
): Promise<BeritaDetail | null> {
  const response = await getBeritaById(id);
  return response.data;
}

export async function findRelatedBerita(
  id: number
): Promise<BeritaRelated[]> {
  const response = await getRelatedBerita(id);
  return response.data;
}