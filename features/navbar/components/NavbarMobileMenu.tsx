import Link from "next/link";

interface NavbarMobileMenuProps {
  onClose: () => void;
}

const navItems = [
  {
    label: "Nav 1",
    href: "#",
  },
  {
    label: "Nav 2",
    href: "#",
  },
  {
    label: "Nav 3",
    href: "#",
  },
  {
    label: "Nav 4",
    href: "#",
  },
];

export default function NavbarMobileMenu({
  onClose,
}: NavbarMobileMenuProps) {
  return (
    <div className="mt-3 border-t-2 border-dashed border-border pt-3 sm:hidden">
      <ul className="flex flex-col gap-2 font-mono text-sm text-black">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onClose}
              className="block w-full rounded border border-border bg-surface px-4 py-2 text-center transition-colors hover:bg-accent-soft"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}