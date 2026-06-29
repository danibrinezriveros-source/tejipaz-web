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
        className="flex h-10 w-10 items-center justify-center md:hidden"
        aria-label="Abrir menú"
      >
        <span className="text-4xl leading-none text-stone-900">
  {open ? "✕" : "☰"}
</span>
      </button>

      {open && (
  <div className="fixed inset-0 z-[998] bg-white">
    <nav className="flex h-full flex-col justify-center px-10">
  {navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      className="border-b border-stone-200 py-6 text-3xl font-light tracking-wide text-stone-900 transition-opacity hover:opacity-60"
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