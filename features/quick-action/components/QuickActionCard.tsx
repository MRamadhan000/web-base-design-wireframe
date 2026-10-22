import Link from "next/link";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { QuickActionItem } from "../models/quick-action.types";

interface QuickActionCardProps {
  action: QuickActionItem;
}

export function QuickActionCard({ action }: QuickActionCardProps) {
  const className =
    "group relative flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-border bg-surface px-6 py-10 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-light hover:bg-accent/20 hover:shadow-xl hover:shadow-primary-light/10";
  const isExternal = /^https?:\/\//i.test(action.href ?? "");

  const content = (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/70 text-primary shadow-xs ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:ring-primary group-hover:shadow-md group-hover:shadow-primary/30">
          {action.iconUrl ? (
            <Image
              src={action.iconUrl}
              alt=""
              width={48}
              height={48}
              unoptimized
              className="h-12 w-12 object-contain"
            />
          ) : (
            <FaBuilding className="h-7 w-7" aria-hidden="true" />
          )}
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
    </>
  );

  if (!action.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link
      href={action.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </Link>
  );
}
