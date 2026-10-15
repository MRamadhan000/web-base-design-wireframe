"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";
import { ErrorState } from "@/components/ui/state/ErrorState";
import { Pagination } from "@/components/ui/navigation/Pagination";

import { BeritaList } from "../components/BeritaList";
import { useAllBeritaViewModel } from "../hooks/useAllBeritaViewModel";

export function BeritaPageView({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  const { allBerita, pagination, isLoading, error, refetch } =
    useAllBeritaViewModel(page, limit);

  if (error) {
    return (
      <ErrorState
        message={
          error instanceof Error ? error.message : "Gagal mengambil berita."
        }
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-black">
      {/* HEADER */}
      <section className="border-b border-border/80 bg-surface py-12 md:py-16">
        <Container>
          <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Beranda
            </Link>

            <FaChevronRight className="h-2.5 w-2.5 text-muted-light" />

            <span className="font-semibold text-primary">
              Berita & Pengumuman
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Berita & <span className="text-primary">Informasi Publik</span>
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Akses cepat dan transparan ke seluruh rilisan berita resmi,
              pengumuman, serta dokumentasi program kerja Pemerintah Kota Batu.
            </p>
          </div>
        </Container>
      </section>

      {/* LIST */}
      <section className="py-12">
        <Container>
          <BeritaList
            beritaList={allBerita}
            isLoading={isLoading}
            skeletonCount={limit}
          />

          {pagination && (
            <Pagination
              page={page}
              pageCount={pagination.pageCount}
              limit={limit}
              basePath="/berita"
            />
          )}
        </Container>
      </section>
    </div>
  );
}
