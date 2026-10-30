import { GaleriDetailView } from "@/features/galeri/views/GaleriDetailView";

interface GaleriDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GaleriDetailPage({
  params,
}: GaleriDetailPageProps) {
  const { slug } = await params;

  return <GaleriDetailView slug={slug} />;
}

