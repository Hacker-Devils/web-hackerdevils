"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="pills">
      {nav.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
