import Link from "next/link";
import { NAV_ITEMS } from "../types/nav.item";


export default function NavbarDesktopMenu() {
  return (
    <ul className="hidden items-center gap-2 font-mono text-sm text-black sm:flex lg:gap-3 dark:text-white">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="block rounded-full border border-white/40 bg-white/25 px-4 py-1.5 backdrop-blur-lg transition-colors hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/15 dark:focus-visible:ring-white/50"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}