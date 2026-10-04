import Link from "next/link";

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

export default function NavbarDesktopMenu() {
  return (
    <ul className="hidden items-center gap-2 font-mono text-sm text-black sm:flex sm:gap-4">
      {navItems.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="block rounded border border-border bg-surface px-3 py-1.5 transition-colors hover:bg-accent-soft"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}