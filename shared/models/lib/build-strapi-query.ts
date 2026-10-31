
import type { QueryParams } from "../pagination";

export function buildStrapiQuery({
  page = 1,
  limit = 9,
  keyword,
  orFields = [],
  fields,
  populateFields,
  ...filters
}: QueryParams = {}): string {
  const organizationDocumentId =
    process.env.NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID;

  if (!organizationDocumentId) {
    throw new Error(
      "NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID belum diatur di .env / .env.local",
    );
  }

  const query = new URLSearchParams();

  // Pagination
  query.set("pagination[page]", String(page));
  query.set("pagination[pageSize]", String(limit));

  // Main fields
  fields?.forEach((field, index) => {
    query.set(`fields[${index}]`, field);
  });

  // Populate relation dengan selected fields
  if (populateFields) {
    Object.entries(populateFields).forEach(
      ([relation, selectedFields]) => {
        query.set(`populate[${relation}][fields][0]`, selectedFields[0]);

        selectedFields.slice(1).forEach((field, index) => {
          query.set(
            `populate[${relation}][fields][${index + 1}]`,
            field,
          );
        });
      },
    );
  }

  // Dynamic filters
  Object.entries(filters).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      typeof value !== "object"
    ) {
      query.set(key, String(value));
    }
  });

  // Search OR
  if (keyword?.trim() && orFields.length > 0) {
    orFields.forEach((field, index) => {
      query.set(
        `filters[$or][${index}][${field}][$containsi]`,
        keyword.trim(),
      );
    });
  }

  // Organization wajib
  query.set(
    "filters[organization][documentId][$eq]",
    organizationDocumentId,
  );

  return query.toString();
}
