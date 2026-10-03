import WireframeNavbar from "@/components/dashboard/WireframeNavbar";
import WireframeHero from "@/components/dashboard/WireframeHero";
import WireframeTentangBatu from "@/components/dashboard/WireframeTentangBatu";
import WireframeGaleri from "@/components/dashboard/WireframeGaleri";
import WireframeQuickAction from "@/components/dashboard/WireframeQuickAction";
import WireframeFooter from "@/components/dashboard/WireframeFooter";
import WireframeVideo from "@/components/dashboard/WireframeVideo";
import { BeritaSection } from "@/features/berita/views/BeritaSection";

export default function Home() {
  return (
    <WireframeNavbar>
      <WireframeHero />
      <WireframeTentangBatu />
      <BeritaSection />
      <WireframeVideo />
      <WireframeGaleri />
      <WireframeQuickAction />
      <WireframeFooter />
    </WireframeNavbar>
  );
}
