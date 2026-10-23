"use client";

import React from "react";
import Image from "next/image";

import { useNavbarViewModel } from "../hooks/useNavbarViewModel";
import NavbarDesktopMenu from "../components/NavbarDesktopMenu";
import NavbarActions from "../components/NavbarActions";
import NavbarMobileMenu from "../components/NavbarMobileMenu";
import { useSiteSettingsViewModel } from "@/features/site-settings/hooks/useSiteSettingsViewModel";

interface NavbarViewProps {
  children?: React.ReactNode;
}

export default function NavbarView({
  children,
}: NavbarViewProps) {
  const {
    isDarkMode,
    isMobileMenuOpen,
    toggleDarkMode,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbarViewModel();
  const { settings, isLoading, error } = useSiteSettingsViewModel();

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-full border border-white/40 bg-white/55 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl backdrop-saturate-150 transition-all sm:px-6 [&_ul_a]:rounded-full [&_ul_a]:border-white/40 [&_ul_a]:bg-white/25 [&_ul_a]:backdrop-blur-lg [&_ul_a:hover]:bg-white/55">
        <nav className="flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            {isLoading ? (
              <>
                <div
                  aria-hidden="true"
                  className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-black/10 sm:h-11 sm:w-11"
                />
                <div
                  aria-hidden="true"
                  className="flex flex-col gap-2"
                >
                  <div className="h-3 w-24 animate-pulse rounded bg-black/10" />
                  <div className="h-2.5 w-32 animate-pulse rounded bg-black/10" />
                </div>
              </>
            ) : settings ? (
              <>
                {settings.logoUrl && (
                  <Image
                    src={settings.logoUrl}
                    width={44}
                    height={44}
                    alt={`Logo ${settings.siteName}`}
                    unoptimized
                    className="h-10 w-10 shrink-0 rounded-full bg-white/90 object-contain p-1 shadow-sm sm:h-11 sm:w-11"
                  />
                )}

                <div className="flex min-w-0 flex-col">
                  {settings.siteName && (
                    <span className="truncate font-mono text-sm font-bold uppercase tracking-wide text-black sm:text-base">
                      {settings.siteName}
                    </span>
                  )}
                  {settings.siteSubtitle && (
                    <span className="truncate font-mono text-[9px] text-muted sm:text-[10px]">
                      {settings.siteSubtitle}
                    </span>
                  )}
                </div>
              </>
            ) : error ? (
              <span className="text-xs text-muted" role="status">
                Pengaturan situs gagal dimuat.
              </span>
            ) : null}
          </div>

          <NavbarDesktopMenu />

          <NavbarActions
            isDarkMode={isDarkMode}
            isMobileMenuOpen={isMobileMenuOpen}
            onToggleDarkMode={toggleDarkMode}
            onToggleMobileMenu={toggleMobileMenu}
          />
        </nav>

        {isMobileMenuOpen && (
          <NavbarMobileMenu
            onClose={closeMobileMenu}
          />
        )}
      </header>

      <main className="relative w-full">
        {children}
      </main>
    </>
  );
}