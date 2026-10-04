import WireframeNavbar from "@/components/dashboard/WireframeNavbar";
import WireframeHero from "@/components/dashboard/WireframeHero";
import WireframeTentangBatu from "@/components/dashboard/WireframeTentangBatu";
import WireframeGaleri from "@/components/dashboard/WireframeGaleri";
import WireframeFooter from "@/components/dashboard/WireframeFooter";
import { BeritaSection } from "@/features/berita/views/BeritaSection";
import { VideoSection } from "@/features/video/views/VideoSection";
import QuickActionSection from "@/features/quick-action/views/QuickActionSection";

export default function Home() {
  return (
    <WireframeNavbar>
      <WireframeHero />
      <WireframeTentangBatu />
      <BeritaSection />
      <VideoSection />
      <WireframeGaleri />
      <QuickActionSection />
      <WireframeFooter />
    </WireframeNavbar>
  );
}
