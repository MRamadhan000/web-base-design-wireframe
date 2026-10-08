import { redirect } from "next/navigation";

import { BeritaPageView } from "@/features/berita/views/BeritaPageView";

type BeritaSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

function getPositiveInteger(
  value: string | string[] | undefined,
  fallback: number,
): number {
  const parsed = Number(Array.isArray(value) ? value[0] : value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export default async function BeritaPage({
  searchParams,
}: {
  searchParams: BeritaSearchParams;
}) {
  const params = await searchParams;
  const page = getPositiveInteger(params.page, 1);
  const limit = getPositiveInteger(params.limit, 10);

  if (params.page !== String(page) || params.limit !== String(limit)) {
    const query = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (key !== "page" && key !== "limit" && value !== undefined) {
        (Array.isArray(value) ? value : [value]).forEach((item) => {
          query.append(key, item);
        });
      }
    });

    query.set("page", String(page));
    query.set("limit", String(limit));
    redirect(`/berita?${query.toString()}`);
  }

  return <BeritaPageView page={page} limit={limit} />;
}
