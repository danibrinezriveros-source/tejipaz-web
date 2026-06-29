"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/src/content/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

useEffect(() => {
  setOpen(false);
}, [pathname]);

useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
    className="flex h-10 w-10 items-center justify-center rounded-md transition hover:bg-stone-100 md:hidden"
        aria-label="Abrir menú"
      >
        <span className="text-4xl leading-none text-stone-900">
  {open ? "✕" : "☰"}
</span>
      </button>

      {open && (
  <div

  className="
    fixed
    inset-0
    z-[999]
    bg-white
    md:hidden
    flex
    flex-col
  "
>
<header className="flex h-16 items-center justify-between border-b border-stone-200 px-6">

    <span className="text-base font-semibold tracking-[0.2em] text-stone-900">
  TEJIPAZ
</span>
    <button
        onClick={() => setOpen(false)}
        className="text-2xl leading-none"
    >
        ×
    </button>

</header>
    <nav className="flex flex-1 flex-col justify-center px-6">
  {navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      className="border-b border-stone-200 py-7 text-2xl font-light tracking-wide text-stone-900 transition-opacity hover:opacity-60"
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