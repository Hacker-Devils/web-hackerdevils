import Link from "next/link";

/**
 * The official Hacker Devils mark: maroon chevrons around a gold slash, i.e. `</>`.
 * Vector trace of public/brand/hkd-logo.png. Chevron colour comes from --logo-maroon so it stays visible in dark mode.
 */
export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="50 100 395 262" aria-hidden="true">
      <g fill="none" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round">
        <path d="M172 175L70 230L172 285M323 175L425 230L323 285" style={{ stroke: "var(--logo-maroon)" }} />
        <path d="M283 118L211 344" stroke="#fbc529" />
      </g>
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Hacker Devils home">
      <BrandMark />
      <span>
        Hacker<span className="accent">Devils</span>
      </span>
    </Link>
  );
}
