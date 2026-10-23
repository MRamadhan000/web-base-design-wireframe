import { useQuery } from "@tanstack/react-query";
import { findSiteSettings } from "../repositories/site-settings.repository";

export const SITE_SETTINGS_QUERY_KEY = ["site-settings"] as const;

export function useSiteSettingsViewModel() {
  const query = useQuery({
    queryKey: SITE_SETTINGS_QUERY_KEY,
    queryFn: findSiteSettings,
  });

  return {
    settings: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
}
