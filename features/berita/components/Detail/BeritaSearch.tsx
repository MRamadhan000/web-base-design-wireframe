"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/input/Input";

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
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Ketik kata kunci..."
        />

        <Button
          type="button"
          onClick={handleSearch}
          variant="primary"
          className="rounded-md p-2"
          aria-label="Cari"
          icon={<FaSearch className="h-3 w-3" />}
        />
      </div>
    </div>
  );
}