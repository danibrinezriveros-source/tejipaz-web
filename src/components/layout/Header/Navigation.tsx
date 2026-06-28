"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navigation } from "@/src/content/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-10">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "relative pb-1 text-sm transition-colors duration-300",
                  active
                    ? "text-stone-900"
                    : "text-stone-500 hover:text-stone-900"
                )}
              >
                {item.name}

                <span
                  className={clsx(
                    "absolute bottom-0 left-0 h-[2px] bg-stone-900 transition-all duration-300",
                    active ? "w-full" : "w-0"
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}