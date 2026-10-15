import { getAllGaleri, getLatestGaleri } from "../models/galeri.service";
import { GaleriItem, PaginatedGaleri } from "../models/galeri.types";

export async function findLatestGaleri(): Promise<GaleriItem[]> {
  return getLatestGaleri();
}

export async function findAllGaleri(
  page = 1,
  limit = 9,
): Promise<PaginatedGaleri> {
  return getAllGaleri(page, limit);
}