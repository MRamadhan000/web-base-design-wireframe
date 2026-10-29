"use client";

import Image from "next/image";
import Link from "next/link";

import { useSiteSettingsViewModel } from "@/features/site-settings/hooks/useSiteSettingsViewModel";

function BrandSkeleton() {
  return (
    <div aria-hidden="true" className="flex items-center gap-2.5 sm:gap-3">
      <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-black/10 sm:h-11 sm:w-11 dark:bg-white/10" />
      <div className="flex flex-col gap-2">
        <div className="h-3 w-24 animate-pulse rounded bg-black/10 dark:bg-white/10" />
        <div className="h-2.5 w-32 animate-pulse rounded bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  );
}

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