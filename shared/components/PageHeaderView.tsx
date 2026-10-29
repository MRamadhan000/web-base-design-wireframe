"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface PageHeaderViewProps {
  title: string;
  highlight?: string;
  description?: string;
  showBackButton?: boolean;
  backLabel?: string;
  onBack?: () => void;
}

export function PageHeaderView({
  title,
  highlight,
  description,
  showBackButton = true,
  backLabel = "Kembali",
  onBack,
}: PageHeaderViewProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    router.back();
  };

  return (
    <section className="border-b border-border/80 bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          {/* TITLE & DESCRIPTION */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              {title} {highlight}
            </h1>

            {description && (
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            )}
          </div>

          {/* BACK BUTTON */}
          {showBackButton && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
            >
              <FaArrowLeft className="h-3.5 w-3.5" />
              <span>{backLabel}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}