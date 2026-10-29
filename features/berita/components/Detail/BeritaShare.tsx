"use client";

import { useEffect, useState } from "react";
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface BeritaShareProps {
  title: string;
  /** URL absolut artikel. Kalau kosong, pakai URL halaman saat ini. */
  url?: string;
}

const buttonClass =
  "flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-muted transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-7 sm:w-7";

const iconClass = "h-3 w-3 sm:h-2.5 sm:w-2.5";

export function BeritaShare({ title, url }: BeritaShareProps) {
  const [shareUrl, setShareUrl] = useState(url ?? "");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (!url) setShareUrl(window.location.href);
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, [url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Bagikan ke Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
    },
    {
      label: "Bagikan ke Twitter",
      href: `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}`,
      icon: FaTwitter,
    },
    {
      label: "Bagikan ke WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: FaWhatsapp,
    },
  ];

  async function handleNativeShare() {
    try {
      await navigator.share({ title, url: shareUrl });
    } catch {
      // Pengguna membatalkan share, abaikan
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
        <FaShareAlt className="h-3 w-3 text-primary" aria-hidden="true" />
        Bagikan:
      </span>

      <div className="flex flex-wrap items-center gap-2">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={buttonClass}
          >
            <Icon className={iconClass} aria-hidden="true" />
          </a>
        ))}

        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            aria-label="Bagikan lewat aplikasi lain"
            className={`${buttonClass} sm:hidden`}
          >
            <FaShareAlt className={iconClass} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}