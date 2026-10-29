
import { QueryParams } from "../pagination";

const organizationId = "3" 

export function buildStrapiQuery({
  page = 1,
  limit = 9,
  populate = "*",
  ...filters
}: QueryParams = {}): string {
  if (!organizationId) {
    throw new Error("VITE_ORGANIZATION_ID belum diatur di .env");
  }

  const query = new URLSearchParams({
    populate: String(populate),
    "pagination[page]": String(page),
    "pagination[pageSize]": String(limit),
    "filters[organization][id][$eq]": organizationId,
  });

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.set(key, String(value));
    }
  });

  return query.toString();
}
