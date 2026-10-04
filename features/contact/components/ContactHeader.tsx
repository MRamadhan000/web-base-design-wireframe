import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { Container } from "@/components/ui/layout/Container";

export default function ContactHeader() {
  return (
    <section className="border-b border-border/80 bg-surface py-12 md:py-16">
      <Container>
        <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="transition-colors hover:text-primary">
            Beranda
          </Link>

          <FaChevronRight className="h-2.5 w-2.5 text-muted-light" />

          <span className="font-semibold text-primary">Kontak</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Hubungi <span className="text-primary">Kami</span>
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Sampaikan pertanyaan, informasi, kritik, maupun saran kepada
            Pemerintah Kota Batu.
          </p>
        </div>
      </Container>
    </section>
  );
}