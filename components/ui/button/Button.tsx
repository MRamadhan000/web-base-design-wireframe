import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
}

export function Button({
  children,
  icon,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "border border-emerald-600 bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white";

  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-lg px-4 py-2
    text-xs font-semibold
    tracking-wider
    transition-colors
    ${variantClass}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children && <span>{children}</span>}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...props}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
}