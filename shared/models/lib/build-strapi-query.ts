import { QueryParams } from "../pagination";

export function buildStrapiQuery({
  page = 1,
  limit = 9,
  populate = "*",
  ...filters
}: QueryParams = {}): string {
  const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;

  if (!organizationId) {
    throw new Error("NEXT_PUBLIC_ORGANIZATION_ID belum diatur di .env / .env.local");
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