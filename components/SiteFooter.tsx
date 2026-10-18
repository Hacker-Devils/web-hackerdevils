import Link from "next/link";
import Logo from "./Logo";
import { links } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="wrap">
      <div className="site-footer">
        <div>
          <Logo />
          <p>The competitive coding and interview prep club at Arizona State University.</p>
        </div>
        <nav aria-label="Club">
          <h2>Club</h2>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/join">Join</Link>
        </nav>
        <nav aria-label="Practice">
          <h2>Practice</h2>
          <Link href="/programs">Programs</Link>
          <Link href="/interviews">Mock interviews</Link>
          <Link href="/resources">Resources</Link>
        </nav>
        <nav aria-label="Connect">
          <h2>Connect</h2>
          <a href={links.discord}>Discord</a>
          <a href={links.instagram}>Instagram</a>
          <a href={links.linkedin}>LinkedIn</a>
          <a href={links.sunDevilCentral}>Sun Devil Central</a>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </nav>
        <div className="copy">© {new Date().getFullYear()} Hacker Devils · Arizona State University</div>
      </div>
    </footer>
  );
}
