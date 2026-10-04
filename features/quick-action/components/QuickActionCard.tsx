import Link from "next/link";
import { QuickActionItem } from "../models/quick-action.types";

interface QuickActionCardProps {
  action: QuickActionItem;
  onClick?: (action: QuickActionItem) => void;
}

export function QuickActionCard({ action, onClick }: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <Link
      href={action.href}
      onClick={() => onClick?.(action)}
      className="group relative flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-border bg-surface px-6 py-10 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-light hover:bg-accent/20 hover:shadow-xl hover:shadow-primary-light/10"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/70 text-primary shadow-xs ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:ring-primary group-hover:shadow-md group-hover:shadow-primary/30">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="text-base font-bold tracking-wide text-black transition-colors duration-200 group-hover:text-primary">
          {action.title}
        </h3>

        {action.description && (
          <p className="mt-1 text-xs text-muted transition-colors group-hover:text-primary/80">
            {action.description}
          </p>
        )}
      </div>
    </Link>
  );
}
