import { BeritaDetailView } from "@/features/berita/views/BeritaDetailView";

interface BeritaDetailPageProps {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function BeritaDetailPage({
  searchParams,
}: BeritaDetailPageProps) {
  const { id } = await searchParams;

  return <BeritaDetailView id={id ?? ""} />;
}
