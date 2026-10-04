"use client";

import React from "react";

import { useNavbarViewModel } from "../hooks/useNavbarViewModel";
import NavbarLogo from "../components/NavbarLogo";
import NavbarDesktopMenu from "../components/NavbarDesktopMenu";
import NavbarActions from "../components/NavbarActions";
import NavbarMobileMenu from "../components/NavbarMobileMenu";

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

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-2xl border-2 border-dashed border-border bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-md transition-all sm:px-6">
        <nav className="flex items-center justify-between">
          <NavbarLogo />

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