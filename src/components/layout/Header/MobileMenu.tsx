"use client";

import { useState } from "react";

import Link from "next/link";
import { navigation } from "@/src/content/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-md md:hidden"
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-stone-200 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col">
           {navigation.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    onClick={() => setOpen(false)}
    className="border-b border-stone-100 px-6 py-4 text-sm text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
  >
    {item.name}
  </Link>
))}
        
          </nav>
        </div>
      )}
    </>
  );
}