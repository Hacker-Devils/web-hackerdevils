import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import { links } from "@/lib/content";
import { DiscordIcon } from "./BrandIcons";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="navigation wrap" aria-label="Main">
        <Logo />
        <NavLinks />
        <div className="nav-actions">
          <ThemeToggle />
          <a className="button primary small nav-cta" href={links.discord}>
            <DiscordIcon className="brand-glyph" />
            Join the Discord
          </a>
        </div>
      </nav>
    </header>
  );
}
