import Link from "next/link";

export default function WireframeTentangBatu() {
  return (
    <section className="w-full bg-background py-16 border-b border-border font-sans antialiased">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* SISI KIRI: Gambar Visual */}
          <div className="relative">
            {/* Box Utama Gambar */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-border/80 bg-accent-soft shadow-md sm:h-[450px]">
              <img
                src="/images/hero1.png"
                alt="Tentang Kota Batu"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* SISI KANAN: Teks Berstruktur */}
          <div className="flex flex-col justify-center">
            {/* Kategori Badge */}
            <div className="mb-3 inline-flex items-center gap-2">
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl leading-tight">
              Kota Wisata Berdaya, <br />
              <span className="text-primary underline decoration-accent decoration-2 underline-offset-8">
                Sejuk & Inovatif
              </span>
            </h2>

            {/* Paragraf Pembuka / Lead Text */}
            <p className="mt-6 text-base font-medium leading-relaxed text-black">
              Kota Batu adalah salah satu destinasi utama di Jawa Timur yang
              terkenal dengan keindahan panorama alam, keasrian udara
              pegunungan, serta ragam potensi agrowisata dan kebudayaan lokal.
            </p>

            {/* Blockquote Highlights */}
            <blockquote className="my-6 rounded-r-xl border-l-4 border-primary bg-accent/50 p-4 text-sm italic leading-relaxed text-black shadow-2xs">
              "Menjadi pusat pelayanan publik yang transparan, modern, serta
              mendukung pertumbuhan ekonomi kreatif dan pariwisata
              berkelanjutan."
            </blockquote>

            {/* Action Button */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs font-semibold tracking-wide text-white transition-all hover:bg-primary shadow-sm"
              >
                Selengkapnya &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}