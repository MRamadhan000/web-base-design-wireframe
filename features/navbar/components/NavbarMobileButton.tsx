interface NavbarMobileButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function NavbarMobileButton({
  isOpen,
  onClick,
}: NavbarMobileButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded border-2 border-dashed border-border bg-surface text-black transition-colors hover:bg-accent-soft sm:hidden"
      aria-label="Toggle Mobile Menu"
    >
      {isOpen ? (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}