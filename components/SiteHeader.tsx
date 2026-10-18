import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="wrap">
      <nav className="nav" aria-label="Main">
        <Logo />
        <NavLinks />
        <div className="row">
          <ThemeToggle />
          <Link className="btn p" href="/join">
            Join
          </Link>
        </div>
      </nav>
    </header>
  );
}
