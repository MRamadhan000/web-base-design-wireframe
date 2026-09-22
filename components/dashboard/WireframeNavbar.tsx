"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WireframeNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="w-full border-b-2 border-dashed border-gray-400 bg-gray-50 px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* SISI KIRI: Logo Pemkot & Tulisan Kota Batu */}
        <div className="flex items-center gap-3">
          {/* Placeholder Logo Pemkot */}
          <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-dashed border-gray-500 bg-gray-200 font-mono text-xs text-gray-600">
            LOGO
          </div>
          
          {/* Teks Kota Batu */}
          <div className="flex flex-col">
            <span className="font-mono text-lg font-bold uppercase tracking-wide text-gray-800">
              Kota Batu
            </span>
            <span className="font-mono text-xs text-gray-500">
              [Sub-heading / Instansi]
            </span>
          </div>
        </div>

        {/* TENGAH: Navigasi (Nav 1 - Nav 4) */}
        <ul className="flex items-center gap-2 font-mono text-sm text-gray-700 sm:gap-4">
          <li>
            <Link 
              href="#" 
              className="block rounded border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-200"
            >
              Nav 1
            </Link>
          </li>
          <li>
            <Link 
              href="#" 
              className="block rounded border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-200"
            >
              Nav 2
            </Link>
          </li>
          <li>
            <Link 
              href="#" 
              className="block rounded border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-200"
            >
              Nav 3
            </Link>
          </li>
          <li>
            <Link 
              href="#" 
              className="block rounded border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-200"
            >
              Nav 4
            </Link>
          </li>
        </ul>

        {/* SISI KANAN: Toggle Light / Dark Mode */}
        <div className="flex items-center">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-2 rounded border-2 border-dashed border-gray-400 bg-white px-3 py-1.5 font-mono text-xs text-gray-700 transition-colors hover:bg-gray-200"
            title="Toggle Light/Dark Mode"
          >
            {isDarkMode ? (
              <>
                {/* Icon Sun (Light) */}
                <svg
                  className="h-4 w-4 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>[Light]</span>
              </>
            ) : (
              <>
                {/* Icon Moon (Dark) */}
                <svg
                  className="h-4 w-4 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span>[Dark]</span>
              </>
            )}
          </button>
        </div>

      </nav>
    </header>
  );
}