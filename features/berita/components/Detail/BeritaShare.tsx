import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export function BeritaShare() {
  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 flex items-center gap-1.5 text-xs font-medium text-muted">
        <FaShareAlt className="text-primary" />
        Bagikan:
      </span>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-muted transition-colors hover:bg-primary hover:text-white"
        aria-label="Share Facebook"
      >
        <FaFacebookF className="h-3.5 w-3.5" />
      </button>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-muted transition-colors hover:bg-primary hover:text-white"
        aria-label="Share Twitter"
      >
        <FaTwitter className="h-3.5 w-3.5" />
      </button>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-muted transition-colors hover:bg-primary hover:text-white"
        aria-label="Share Whatsapp"
      >
        <FaWhatsapp className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}