import Link from "next/link";

/** Type-set mark until the club has an official logo file. */
export default function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="lg" aria-hidden="true">
        <i />
      </span>
      Hacker Devils
    </Link>
  );
}
