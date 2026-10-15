import { BeritaDetailView } from "@/features/berita/views/BeritaDetailView";

interface BeritaDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BeritaDetailPage({
  params,
}: BeritaDetailPageProps) {
  const { slug } = await params;

  return <BeritaDetailView slug={slug} />;
}