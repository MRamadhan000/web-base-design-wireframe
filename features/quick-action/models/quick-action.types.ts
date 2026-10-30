export interface QuickAction {
  id: number;
  documentId: string;
  title: string;
  description: string;
  iconUrl: string | null;
  link: string;
}

export interface QuickActionRaw {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  link: string;
  ikon: {
    url: string;
  };
}

export interface QuickActionApiResponse {
  data: QuickActionRaw[];
}
