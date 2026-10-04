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
      className="group relative flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500 hover:bg-emerald-50/20 hover:shadow-xl hover:shadow-emerald-500/10"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100/70 text-emerald-700 shadow-xs ring-1 ring-emerald-600/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600 group-hover:shadow-md group-hover:shadow-emerald-600/30">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="text-base font-bold tracking-wide text-slate-900 transition-colors duration-200 group-hover:text-emerald-700">
          {action.title}
        </h3>

        {action.description && (
          <p className="mt-1 text-xs text-slate-500 transition-colors group-hover:text-emerald-600/80">
            {action.description}
          </p>
        )}
      </div>
    </Link>
  );
}
