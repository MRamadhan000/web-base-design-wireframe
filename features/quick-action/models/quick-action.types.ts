export interface QuickActionItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  iconUrl: string | null;
  href: string | null;
}

export interface QuickActionApiItem {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  link: string | string[] | null;
  ikon: {
    url: string;
    alternativeText: string | null;
  } | null;
}

export interface QuickActionApiResponse {
  data: QuickActionApiItem[];
}
