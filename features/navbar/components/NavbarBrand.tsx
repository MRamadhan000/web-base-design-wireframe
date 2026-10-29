"use client";

import Image from "next/image";
import Link from "next/link";

import { useSiteSettingsViewModel } from "@/features/site-settings/hooks/useSiteSettingsViewModel";
import { BrandSkeleton } from "./BrandSkeleton";

export default function NavbarBrand() {
  const { settings, isLoading, error } = useSiteSettingsViewModel();

  if (isLoading) return <BrandSkeleton />;

  if (error || !settings) {
    return error ? (
      <span className="text-xs text-muted" role="status">
        Pengaturan situs gagal dimuat.
      </span>
    ) : null;
  }

  const { logoUrl, siteName, siteSubtitle } = settings;

  return (
    <Link
      href="/"
      aria-label={siteName ? `Beranda ${siteName}` : "Beranda"}
      className="flex min-w-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 sm:gap-3 dark:focus-visible:ring-white/50"
    >
      {logoUrl && (
        <Image
          src={logoUrl}
          width={44}
          height={44}
          alt=""
          priority
          unoptimized
          className="h-10 w-10 shrink-0 rounded-full bg-white/90 object-contain p-1 shadow-sm sm:h-11 sm:w-11"
        />
      )}

      <div className="flex min-w-0 flex-col justify-center gap-0.5">
        {siteName && (
          <span className="truncate font-mono text-sm font-bold uppercase leading-5 tracking-wide text-black sm:text-base dark:text-white">
            {siteName}
          </span>
        )}
        {siteSubtitle && (
          <span className="truncate font-mono text-[9px] leading-4 text-muted sm:text-[10px]">
            {siteSubtitle}
          </span>
        )}
      </div>
    </Link>
  );
}
