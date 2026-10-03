import WireframeNavbar from "@/components/dashboard/WireframeNavbar";
import WireframeHero from "@/components/dashboard/WireframeHero";
import WireframeTentangBatu from "@/components/dashboard/WireframeTentangBatu";
import WireframeGaleri from "@/components/dashboard/WireframeGaleri";
import WireframeQuickAction from "@/components/dashboard/WireframeQuickAction";
import WireframeFooter from "@/components/dashboard/WireframeFooter";
import { BeritaSection } from "@/features/berita/views/BeritaSection";
import { VideoSection } from "@/features/video/views/VideoSection";

export default function Home() {
  return (
    <WireframeNavbar>
      <WireframeHero />
      <WireframeTentangBatu />
      <BeritaSection />
      <VideoSection />
      <WireframeGaleri />
      <WireframeQuickAction />
      <WireframeFooter />
    </WireframeNavbar>
  );
}
