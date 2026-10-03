"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function BeritaSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search:", searchQuery);
  };

  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <h3 className="mb-3 border-b border-slate-100 pb-2 text-sm font-bold text-slate-900">
        Cari Berita
      </h3>

      <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 transition-all focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Ketik kata kunci..."
          className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-md bg-emerald-600 p-2 text-white transition-colors hover:bg-emerald-700"
          aria-label="Cari"
        >
          <FaSearch className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}