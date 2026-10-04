"use client";

import { Container } from "@/components/ui/layout/Container";
import { useQuickActionsViewModel } from "../hooks/useQuickActionsViewModel";
import { QuickActionCard } from "../components/QuickActionCard";

export default function QuickActionSection() {
  const { actions, handleActionClick } = useQuickActionsViewModel();

  return (
    <section className="w-full border-b border-slate-200 bg-slate-50 py-16 font-sans antialiased">
      <Container>
        {/* HEADER SECTION */}
        <div className="mb-12 text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Layanan Utama Kota Batu
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Pilih layanan untuk menuju portal resmi
          </p>
        </div>

        {/* GRID 8 QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4">
          {actions.map((action) => (
            <QuickActionCard
              key={action.id}
              action={action}
              onClick={handleActionClick}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}