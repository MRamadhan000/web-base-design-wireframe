import Link from "next/link";
import { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function ActionButton({
  href,
  children,
  icon,
  className = "",
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-white py-2 text-center text-xs font-semibold tracking-wider text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white ${className}`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}