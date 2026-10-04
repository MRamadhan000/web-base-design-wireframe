export interface NavbarViewModel {
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;

  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}