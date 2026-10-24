import type { Galeri, PaginatedGaleri } from "../models/galeri.types";
import { getAllGaleri, getLatestGaleri } from "../service/galeri.service";

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