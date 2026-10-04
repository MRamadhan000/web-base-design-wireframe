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
      ? "bg-primary text-white hover:bg-primary"
      : "border border-primary bg-surface text-primary hover:bg-primary hover:text-white";

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