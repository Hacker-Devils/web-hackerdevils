"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="main-nav" aria-label="Main">
      {nav.map((item) => (
        <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
