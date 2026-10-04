import NavbarView from "@/features/navbar/views/NavbarView";
import WireframeHero from "@/components/dashboard/WireframeHero";
import WireframeTentangBatu from "@/components/dashboard/WireframeTentangBatu";
import WireframeFooter from "@/components/dashboard/WireframeFooter";
import { BeritaSection } from "@/features/berita/views/BeritaSection";
import { VideoSection } from "@/features/video/views/VideoSection";
import QuickActionSection from "@/features/quick-action/views/QuickActionSection";
import { GaleriPreviewSection } from "@/features/galeri/views/GaleriPreviewSection";

export default function Home() {
  return (
    <NavbarView>
      <WireframeHero />
      <WireframeTentangBatu />
      <BeritaSection />
      <VideoSection />
      <GaleriPreviewSection />
      <QuickActionSection />
      <WireframeFooter />
    </NavbarView>
  );
}
