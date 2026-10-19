import Link from "next/link";
import Logo from "./Logo";
import { GraduationCap, Mail } from "lucide-react";
import { links } from "@/lib/content";
import { DiscordIcon, InstagramIcon, LinkedInIcon } from "./BrandIcons";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p>The competitive coding and interview prep club at Arizona State University.</p>
          </div>
          <nav aria-label="Club">
            <h2>Club</h2>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/join">Join</Link>
          </nav>
          <nav aria-label="Connect">
            <h2>Connect</h2>
            <a className="with-icon" href={links.discord}>
              <DiscordIcon size={14} />
              Discord
            </a>
            <a className="with-icon" href={links.instagram}>
              <InstagramIcon size={14} />
              Instagram
            </a>
            <a className="with-icon" href={links.linkedin}>
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
            <a className="with-icon" href={links.sunDevilCentral}>
              <GraduationCap size={15} strokeWidth={1.5} aria-hidden="true" />
              Sun Devil Central
            </a>
            <a className="with-icon" href={`mailto:${links.email}`}>
              <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
              {links.email}
            </a>
          </nav>
        </div>
        <div className="footer-base">
          <span className="mono">Practice, practice, practice.</span>
          <span className="copyright">© {new Date().getFullYear()} Hacker Devils · Tempe, AZ</span>
        </div>
      </div>
    </footer>
  );
}
