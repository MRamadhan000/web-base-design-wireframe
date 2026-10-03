import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export function BeritaShare() {
  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <FaShareAlt className="text-emerald-600" />
        Bagikan:
      </span>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
        aria-label="Share Facebook"
      >
        <FaFacebookF className="h-3.5 w-3.5" />
      </button>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
        aria-label="Share Twitter"
      >
        <FaTwitter className="h-3.5 w-3.5" />
      </button>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
        aria-label="Share Whatsapp"
      >
        <FaWhatsapp className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}