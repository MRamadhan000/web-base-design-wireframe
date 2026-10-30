import type { Galeri, GaleriDetail, PaginatedGaleri } from "../models/galeri.types";
import { getAllGaleri, getGaleriBySlug, getLatestGaleri } from "../service/galeri.service";

const DEFAULT_PAGE_SIZE = 9;

export function findLatestGaleri(): Promise<Galeri[]> {
  return getLatestGaleri();
}

export function findAllGaleri(
  page = 1,
  limit = DEFAULT_PAGE_SIZE,
): Promise<PaginatedGaleri> {
  return getAllGaleri({ page, limit });
}

export function findGaleriBySlug(slug: string): Promise<GaleriDetail | null> {
  return getGaleriBySlug(slug);
}