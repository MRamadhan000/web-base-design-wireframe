import NavbarMobileButton from "./NavbarMobileButton";

interface NavbarActionsProps {
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
  onToggleDarkMode: () => void;
  onToggleMobileMenu: () => void;
}

export default function NavbarActions({
  isDarkMode,
  isMobileMenuOpen,
  onToggleDarkMode,
  onToggleMobileMenu,
}: NavbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onToggleDarkMode}
        className="flex items-center gap-2 rounded border-2 border-dashed border-border bg-surface px-2.5 py-1.5 font-mono text-xs text-black transition-colors hover:bg-accent-soft sm:px-3"
      >
        {isDarkMode ? (
          <>
            <span>☀</span>
            <span className="hidden sm:inline">
              [Light]
            </span>
          </>
        ) : (
          <>
            <span>☾</span>
            <span className="hidden sm:inline">
              [Dark]
            </span>
          </>
        )}
      </button>

      <NavbarMobileButton
        isOpen={isMobileMenuOpen}
        onClick={onToggleMobileMenu}
      />
    </div>
  );
}