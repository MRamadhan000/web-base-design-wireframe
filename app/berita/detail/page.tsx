import { BeritaDetailView } from "@/features/berita/views/BeritaDetailView";

interface BeritaDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BeritaDetailPage({
  params,
}: BeritaDetailPageProps) {
  const { id } = await params;

  return <BeritaDetailView id={Number(1)} />;
}
