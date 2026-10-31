
"use client";

import React from "react";
import { Menu, X } from "lucide-react";

import { useNavbarViewModel } from "../hooks/useNavbarViewModel";
import NavbarBrand from "../components/NavbarBrand";
import NavbarDesktopMenu from "../components/NavbarDesktopMenu";
import NavbarMobileMenu from "../components/NavbarMobileMenu";

interface NavbarViewProps {
  children?: React.ReactNode;
}

export default function NavbarView({ children }: NavbarViewProps) {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbarViewModel();

  return (
    <>
      <header
        className={`
          fixed left-1/2 top-4 z-50
          w-[92%] max-w-7xl
          -translate-x-1/2
          border border-white/40
          bg-white/55
          px-4 py-3 sm:px-6
          shadow-lg shadow-black/10
          backdrop-blur-2xl backdrop-saturate-150
          dark:border-white/10 dark:bg-black/40
          ${
            isMobileMenuOpen
              ? "rounded-2xl"
              : "rounded-full"
          }
          lg:rounded-full
        `}
      >
        <nav
          aria-label="Navigasi utama"
          className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]"
        >
          {/* Kiri - Brand */}
          <div className="flex min-w-0 justify-start">
            <NavbarBrand />
          </div>

          {/* Tengah - Desktop Menu */}
          <div className="hidden lg:block">
            <NavbarDesktopMenu />
          </div>

          {/* Kanan - Mobile Hamburger */}
          <div className="flex shrink-0 items-center justify-end lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={
                isMobileMenuOpen
                  ? "Tutup menu navigasi"
                  : "Buka menu navigasi"
              }
              aria-expanded={isMobileMenuOpen}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-border
                bg-surface
                text-foreground
                transition-all duration-200
                hover:bg-accent-soft
                active:scale-95
              "
            >
              {isMobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <NavbarMobileMenu onClose={closeMobileMenu} />
        )}
      </header>

      {/* Main Content */}
      <main className="relative w-full">
        {children}
      </main>
    </>
  );
}
