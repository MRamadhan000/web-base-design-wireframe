import { getImageUrl } from "@/shared/utils/image";
import type { Berita, BeritaRaw, BeritaRelated } from "../models/berita.types";

export function toBerita(item: BeritaRaw): Berita {
  return { ...item, image: getImageUrl(item.image?.url ?? "") };
}

export function toBeritaRelated(item: BeritaRaw): BeritaRelated {
  const { id, documentId, title, date, image } = toBerita(item);
  return { id, documentId, title, date, image };
}