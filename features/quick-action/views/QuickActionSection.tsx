"use client";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { useQuickActionsViewModel } from "../hooks/useQuickActionsViewModel";
import { QuickActionCard } from "../components/QuickActionCard";
import { QuickActionCardSkeleton } from "../components/QuickActionCardSkeleton";

export default function QuickActionSection() {
  const { actions, isLoading, error, refetch } = useQuickActionsViewModel();

  return (
    <section id="layanan" className="w-full border-b border-border bg-background py-16 font-sans antialiased scroll-mt-28">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">
            Layanan Utama Kota Batu
          </h2>
          <p className="mt-2 text-sm text-muted">
            Pilih layanan untuk menuju portal resmi
          </p>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4"
            aria-busy="true"
            aria-label="Memuat daftar layanan"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <QuickActionCardSkeleton key={index} />
            ))}
          </div>
        ) : error ? (
          <ErrorState
            message="Gagal mengambil daftar layanan."
            onRetry={() => refetch()}
          />
        ) : actions.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4">
            {actions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted">
            Belum ada layanan tersedia.
          </p>
        )}
      </Container>
    </section>
  );
}