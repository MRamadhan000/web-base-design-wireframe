"use client";

import React from "react";

import { useNavbarViewModel } from "../hooks/useNavbarViewModel";
import NavbarBrand from "../components/NavbarBrand";
import NavbarDesktopMenu from "../components/NavbarDesktopMenu";
import NavbarActions from "../components/NavbarActions";
import NavbarMobileMenu from "../components/NavbarMobileMenu";

interface NavbarViewProps {
  children?: React.ReactNode;
}

export default function NavbarView({ children }: NavbarViewProps) {
  const {
    isDarkMode,
    isMobileMenuOpen,
    toggleDarkMode,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbarViewModel();

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-full border border-white/40 bg-white/55 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl backdrop-saturate-150 transition-all sm:px-6 dark:border-white/10 dark:bg-black/40">
        <nav
          aria-label="Navigasi utama"
          className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]"
        >
          {/* Kiri */}
          <div className="flex min-w-0 justify-start">
            <NavbarBrand />
          </div>

          {/* Tengah (hanya desktop) */}
          <NavbarDesktopMenu />

          {/* Kanan */}
          <div className="flex shrink-0 items-center justify-end">
       
          </div>
        </nav>

        {isMobileMenuOpen && <NavbarMobileMenu onClose={closeMobileMenu} />}
      </header>

      <main className="relative w-full">{children}</main>
    </>
  );
}