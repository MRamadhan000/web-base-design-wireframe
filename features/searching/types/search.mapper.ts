import { getImageUrl } from "@/shared/utils/image";
import type {
  SearchBeritaItem,
  SearchBeritaRaw,
  SearchGaleriItem,
  SearchGaleriRaw,
  SearchVideoItem,
  SearchVideoRaw,
} from "../types/search.types";

export function toSearchBeritaItem(raw: SearchBeritaRaw): SearchBeritaItem {
  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    slug: raw.slug,
    date: raw.date,
    image: getImageUrl(raw.image?.url ?? ""),
  };
}

export function toSearchVideoItem(raw: SearchVideoRaw): SearchVideoItem {
  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    slug: raw.slug,
    date: raw.date,
  };
}

export function toSearchGaleriItem(raw: SearchGaleriRaw): SearchGaleriItem {
  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    slug: raw.slug,
    image: getImageUrl(raw.image?.url ?? ""),
  };
}

