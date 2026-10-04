import { FaSearch } from "react-icons/fa";

interface VideoSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function VideoSearch({ value, onChange }: VideoSearchProps) {
  return (
    <div className="rounded-xl border border-border/80 bg-surface p-5 shadow-sm">
      <h2 className="mb-3 border-b border-border pb-2 text-sm font-bold text-black">
        Cari Video
      </h2>
      <div className="flex items-center rounded-lg border border-border bg-background p-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ketik judul video..."
          className="w-full bg-transparent px-3 py-1.5 text-xs text-black placeholder-slate-400 focus:outline-none"
        />
        <button
          type="button"
          className="rounded-md bg-primary p-2 text-white transition-colors hover:bg-primary"
          aria-label="Cari video terkait"
        >
          <FaSearch className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}