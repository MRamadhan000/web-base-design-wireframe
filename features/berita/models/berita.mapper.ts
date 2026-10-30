import { getImageUrl } from "@/shared/utils/image";
import type { Berita, BeritaRaw } from "../models/berita.types";

export function toBerita(item: BeritaRaw): Berita {
  return { ...item, image: getImageUrl(item.image?.url ?? "") };
}