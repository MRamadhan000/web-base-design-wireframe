import { FaSearch } from "react-icons/fa";

interface VideoSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function VideoSearch({ value, onChange }: VideoSearchProps) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <h2 className="mb-3 border-b border-slate-100 pb-2 text-sm font-bold text-slate-900">
        Cari Video
      </h2>
      <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600">
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ketik judul video..."
          className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
        />
        <button
          type="button"
          className="rounded-md bg-emerald-600 p-2 text-white transition-colors hover:bg-emerald-700"
          aria-label="Cari video terkait"
        >
          <FaSearch className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}