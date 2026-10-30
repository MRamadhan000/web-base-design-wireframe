"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";

import { GaleriDetailContent } from "../components/Detail/GaleriDetailContent";
import { GaleriDetailSkeleton } from "../components/Detail/GaleriDetailSkeleton";
import { useGaleriDetailBySlugViewModel } from "../hooks/useGaleriDetailBySlugViewModel";

interface GaleriDetailViewProps {
  slug: string;
}

export function GaleriDetailView({ slug }: GaleriDetailViewProps) {
  const router = useRouter();

  const { galeri, isLoading, error, refetchDetail } =
    useGaleriDetailBySlugViewModel(slug);

  if (isLoading) {
    return (
      <section className="w-full bg-background py-8 font-sans antialiased text-black md:py-12">
        <Container>
          <div className="mb-6">
            <div className="flex items-center border-b border-border pb-4">
              <div className="h-10 w-40 animate-pulse rounded-lg bg-border/60" />
            </div>
          </div>

          <div className="w-full">
            <GaleriDetailSkeleton />
          </div>
        </Container>
      </section>
    );
  }

  if (error || !galeri) {
    return (
      <section className="w-full bg-background py-16">
        <ErrorState
          message={
            error instanceof Error
              ? error.message
              : "Galeri tidak ditemukan."
          }
          onRetry={() => refetchDetail()}
        />
      </section>
    );
  }

  return (
    <section className="w-full bg-background py-8 font-sans antialiased text-black md:py-12">
      <Container>
        {/* BACK BUTTON */}
        <div className="mb-6">
          <div className="flex items-center border-b border-border pb-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black transition-all hover:border-primary hover:text-primary hover:shadow-sm"
            >
              <FaArrowLeft className="h-3 w-3" />
              <span>Kembali</span>
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full">
          <GaleriDetailContent galeri={galeri} />
        </div>
      </Container>
    </section>
  );
}

