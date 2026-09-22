import Image from "next/image";
import WireframeNavbar from "@/components/dashboard/WireframeNavbar";
import WireframeHero from "@/components/dashboard/WireframeHero";
import WireframeTentangBatu from "@/components/dashboard/WireframeTentangBatu";
import WireframeBerita from "@/components/dashboard/WireframeBerita";
import WireframeGaleri from "@/components/dashboard/WireframeGaleri";
import WireframeQuickAction from "@/components/dashboard/WireframeQuickAction";
import WireframeFooter from "@/components/dashboard/WireframeFooter";
import WireframeVideo from "@/components/dashboard/WireframeVideo";
export default function Home() {
  return <>
    <WireframeNavbar />
    <WireframeHero />
    <WireframeTentangBatu />
    <WireframeBerita />
    <WireframeVideo />
    <WireframeGaleri />
    <WireframeQuickAction />
    <WireframeFooter />
  </>
}
