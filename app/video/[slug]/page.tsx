import { VideoDetailView } from "@/features/video/views/VideoDetailView";
import Footer from "@/components/dashboard/WireframeFooter";

interface VideoDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function VideoDetailPage({
  params,
}: VideoDetailPageProps) {
  const { slug } = await params;

  return (
    <>
      <VideoDetailView slug={slug} />
      <Footer />
    </>
  );
}
