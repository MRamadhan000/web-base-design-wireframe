import { getAllGaleri, getPreviewGaleri } from "../models/galeri.service";
import { GaleriItem } from "../models/galeri.types";

export async function findAllGaleri(): Promise<GaleriItem[]> {
  const response = await getAllGaleri();
  return response.data;
}

export async function findPreviewGaleri(): Promise<GaleriItem[]> {
  const response = await getPreviewGaleri();
  return response.data;
}