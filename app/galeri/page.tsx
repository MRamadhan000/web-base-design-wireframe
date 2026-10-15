import { GaleriPageView } from "@/features/galeri/views/GaleriPageView";

type GaleriSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

function getPositiveInteger(
  value: string | string[] | undefined,
  fallback: number,
): number {
  const parsed = Number(Array.isArray(value) ? value[0] : value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export default async function PageAllGaleri({
  searchParams,
}: {
  searchParams: GaleriSearchParams;
}) {
  const params = await searchParams;
  const page = getPositiveInteger(params.page, 1);
  const limit = getPositiveInteger(params.limit, 9);

  return <GaleriPageView page={page} limit={limit} />;
}