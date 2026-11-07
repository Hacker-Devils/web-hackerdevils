import Link from "next/link";

/** The official mark: maroon chevrons around a gold slash. Vector trace of public/brand/hkd-logo.png. */
export function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="50 100 395 262" aria-hidden="true">
      <g fill="none" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round">
        <path className="logo-chevrons" d="M172 175L70 230L172 285M323 175L425 230L323 285" />
        <path d="M283 118L211 344" stroke="#fbc529" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo">
      <LogoMark />
      Hacker Devils
    </Link>
  );
}
