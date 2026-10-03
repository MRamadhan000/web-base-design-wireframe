import Footer from "@/components/dashboard/WireframeFooter";
import { VideoDetailView } from "@/features/video/views/VideoDetailView";

interface VideoDetailPageProps {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function VideoDetailPage({
  searchParams,
}: VideoDetailPageProps) {
  const { id } = await searchParams;
  const videoId = Number(id ?? 1);

  return (
    <>
      <VideoDetailView id={Number.isInteger(videoId) ? videoId : 1} />
      <Footer />
    </>
  );
}
