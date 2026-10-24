import { QueryParams } from "../pagination";

export function buildStrapiQuery({
  page = 1,
  limit = 9,
  populate = "*",
  ...filters
}: QueryParams = {}): string {
  const query = new URLSearchParams({
    populate: String(populate),
    "pagination[page]": String(page),
    "pagination[pageSize]": String(limit),
  });

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) query.set(key, String(value));
  });

  return query.toString();
}