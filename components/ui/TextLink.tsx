import Link from "next/link";
import type { ReactNode } from "react";

/** Underlined inline or standalone link. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link className="text-link" href={href}>
        {children}
      </Link>
    );
  }
  return (
    <a className="text-link" href={href}>
      {children}
    </a>
  );
}
