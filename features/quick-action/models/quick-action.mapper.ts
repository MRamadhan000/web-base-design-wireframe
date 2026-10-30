import { getImageUrl } from "@/shared/utils/image";
import { QuickActionRaw, QuickAction } from "./quick-action.types";

export function toQuickAction(raw: QuickActionRaw): QuickAction {
  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    description: raw.description ?? "",
    iconUrl: raw.ikon?.url ? getImageUrl(raw.ikon.url) : null,
    link: raw.link,
  };
}