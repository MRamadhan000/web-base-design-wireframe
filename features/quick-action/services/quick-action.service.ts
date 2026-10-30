import type {
  QuickActionApiResponse,
  QuickActionRaw,
} from "../models/quick-action.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const ORGANIZATION_DOCUMENT_ID = process.env.NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID;

function buildEndpoint(): string {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured");
  }

  if (!ORGANIZATION_DOCUMENT_ID) {
    throw new Error("NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID is not configured");
  }

  const url = new URL(`${API_BASE_URL.replace(/\/+$/, "")}/quick-actions`);

  url.searchParams.set("populate[ikon][fields][0]", "url");
  url.searchParams.set(
    "filters[organization][documentId][$eq]",
    ORGANIZATION_DOCUMENT_ID,
  );
  return url.toString();
}

export async function fetchQuickActions(): Promise<QuickActionRaw[]> {
  const response = await fetch(buildEndpoint());

  if (!response.ok) {
    throw new Error("Failed to fetch quick actions");
  }

  const result: QuickActionApiResponse = await response.json();

  return result.data;
}
