import { getImageUrl } from "@/shared/utils/image";
import type { Galeri, GaleriRaw } from "./galeri.types";

export function toGaleri(item: GaleriRaw): Galeri {
  return {
    ...item,
    image: getImageUrl(item.image?.url ?? ""),
    description: item.description ?? "",
  };
}
