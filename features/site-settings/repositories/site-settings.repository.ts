import type { SiteSettings } from "../models/site-settings.types";
import { getSiteSettings } from "../service/site-settings.service";

export function findSiteSettings(): Promise<SiteSettings> {
  return getSiteSettings();
}
