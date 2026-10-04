"use client";

import { useState } from "react";

export function useNavbarViewModel() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    isDarkMode,
    isMobileMenuOpen,
    toggleDarkMode,
    toggleMobileMenu,
    closeMobileMenu,
  };
}