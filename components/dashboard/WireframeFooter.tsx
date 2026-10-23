"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useSiteSettingsViewModel } from "@/features/site-settings/hooks/useSiteSettingsViewModel";

export default function Footer() {
  const { settings, isLoading, error } = useSiteSettingsViewModel();

  const socialLinks = [
    {
      label: "Facebook",
      url: settings?.facebookUrl,
      Icon: FaFacebookF,
    },
    {
      label: "Instagram",
      url: settings?.instagramUrl,
      Icon: FaInstagram,
    },
    {
      label: "YouTube",
      url: settings?.youtubeUrl,
      Icon: FaYoutube,
    },
    {
      label: "TikTok",
      url: settings?.tiktokUrl,
      Icon: FaTiktok,
    },
  ].filter((item) => item.url);

  if (isLoading) {
    return (
      <footer
        className="w-full bg-black font-sans text-muted-light"
        aria-busy="true"
        aria-label="Memuat informasi situs"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} aria-hidden="true" className="space-y-4">
              <div className="h-5 w-36 animate-pulse rounded bg-white/15" />
              <div className="h-3 w-full animate-pulse rounded bg-white/10" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-white/10" />
              <div className="h-3 w-3/5 animate-pulse rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 bg-black/50 py-6">
          <div
            aria-hidden="true"
            className="mx-auto h-3 max-w-7xl animate-pulse rounded bg-white/10 sm:w-64"
          />
        </div>
      </footer>
    );
  }

  if (!settings) {
    return (
      <footer className="w-full bg-black px-6 py-10 font-sans text-muted-light">
        <p className="mx-auto max-w-7xl text-sm" role="status">
          {error
            ? "Gagal memuat pengaturan situs."
            : "Pengaturan situs tidak tersedia."}
        </p>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-black font-sans text-muted-light">
      {/* SECTION ATAS: 3 KOLOM */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* KOLOM 1: IDENTITAS PEMKOT */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {settings.logoUrl && (
                <Image
                  src={settings.logoUrl}
                  alt={`Logo ${settings.siteName}`}
                  width={44}
                  height={44}
                  unoptimized
                  className="h-11 w-11 rounded-lg bg-white object-contain p-1 shadow-md"
                />
              )}

              <div>
                <h3 className="text-base font-bold uppercase tracking-wide text-white">
                  {settings.siteName}
                </h3>

                <span className="block text-[11px] uppercase tracking-wider text-muted-light">
                  {settings.siteSubtitle}
                </span>
              </div>
            </div>

            {settings.description && (
              <p className="text-xs leading-relaxed text-muted-light">
                {settings.description}
              </p>
            )}
          </div>

          {/* KOLOM 2: KONTAK KAMI */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontak Kami
            </h4>

            <ul className="flex flex-col gap-3 text-xs text-muted-light">
              {settings.address && (
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary-light" />
                  <span className="leading-relaxed">{settings.address}</span>
                </li>
              )}

              {settings.phone && (
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="shrink-0 text-primary-light" />
                  <a
                    href={`tel:${settings.phone.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {settings.phone}
                  </a>
                </li>
              )}

              {settings.email && (
                <li className="flex items-center gap-3">
                  <FaEnvelope className="shrink-0 text-primary-light" />
                  <a
                    href={`mailto:${settings.email}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {settings.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* KOLOM 3: MEDIA SOSIAL */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Media Sosial
            </h4>

            {socialLinks.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map(({ label, url, Icon }) => (
                  <a
                    key={label}
                    href={url ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-muted-light transition-all hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-light">
                Informasi media sosial belum tersedia.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION BAWAH: COPYRIGHT */}
      <div className="border-t border-white/10 bg-black/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {settings.siteName}
          </p>
        </div>
      </div>
    </footer>
  );
}