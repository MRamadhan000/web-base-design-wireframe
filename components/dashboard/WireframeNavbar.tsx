"use client";

import React, { useState } from "react";
import Link from "next/link";

interface WireframeNavbarProps {
  children?: React.ReactNode;
}

export default function WireframeNavbar({ children }: WireframeNavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* FULL FLOATING NAVBAR */}
      <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-2xl border-2 border-dashed border-gray-400 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md transition-all sm:px-6">
        <nav className="flex items-center justify-between">
          
          {/* SISI KIRI: Logo Pemkot & Tulisan Kota Batu */}
          <div className="flex items-center gap-3">
            {/* Placeholder Logo Pemkot */}
            <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-dashed border-gray-500 bg-gray-200 font-mono text-xs text-gray-600">
              LOGO
            </div>

            {/* Teks Kota Batu */}
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold uppercase tracking-wide text-gray-800 sm:text-lg">
                Kota Batu
              </span>
              <span className="font-mono text-[10px] text-gray-500 sm:text-xs">
                [Sub-heading / Instansi]
              </span>
            </div>
          </div>

          {/* TENGAH: Navigasi Desktop (Hanya muncul di sm ke atas) */}
          <ul className="hidden items-center gap-2 font-mono text-sm text-gray-700 sm:flex sm:gap-4">
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

          {/* SISI KANAN: Toggle Dark Mode & Hamburger Button Mobile */}
          <div className="flex items-center gap-2">
            {/* Toggle Light / Dark Mode */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-2 rounded border-2 border-dashed border-gray-400 bg-white px-2.5 py-1.5 font-mono text-xs text-gray-700 transition-colors hover:bg-gray-200 sm:px-3"
              title="Toggle Light/Dark Mode"
            >
              {isDarkMode ? (
                <>
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
                  <span className="hidden sm:inline">[Light]</span>
                </>
              ) : (
                <>
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
                  <span className="hidden sm:inline">[Dark]</span>
                </>
              )}
            </button>

            {/* Hamburger Button (Hanya tampil di layar Mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded border-2 border-dashed border-gray-400 bg-white text-gray-700 transition-colors hover:bg-gray-200 sm:hidden"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                /* Icon Close (X) */
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Icon Hamburger */
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN (Tampil saat Hamburger di-klik) */}
        {isMobileMenuOpen && (
          <div className="mt-3 border-t-2 border-dashed border-gray-300 pt-3 sm:hidden">
            <ul className="flex flex-col gap-2 font-mono text-sm text-gray-700">
              <li>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded border border-gray-300 bg-white px-4 py-2 text-center transition-colors hover:bg-gray-200"
                >
                  Nav 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded border border-gray-300 bg-white px-4 py-2 text-center transition-colors hover:bg-gray-200"
                >
                  Nav 2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded border border-gray-300 bg-white px-4 py-2 text-center transition-colors hover:bg-gray-200"
                >
                  Nav 3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded border border-gray-300 bg-white px-4 py-2 text-center transition-colors hover:bg-gray-200"
                >
                  Nav 4
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* KONTEN UTAMA */}
      <main className="relative w-full">{children}</main>
    </>
  );
}