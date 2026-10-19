"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="nav-links">
      {nav.slice(1).map((item) => (
        <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
