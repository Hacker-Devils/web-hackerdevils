import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { DiscordIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/brand/SocialIcons";
import { Container } from "@/components/ui";
import { links, nav } from "@/content/site";

const socials = [
  { label: "Discord", href: links.discord, Icon: DiscordIcon },
  { label: "Instagram", href: links.instagram, Icon: InstagramIcon },
  { label: "X (Twitter)", href: links.x, Icon: XIcon },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-row">
          <div className="site-footer-about">
            <Logo />
            <p>The competitive coding and technical interview prep club at Arizona State University.</p>
            <a className="text-link" href={`mailto:${links.email}`}>
              {links.email}
            </a>
          </div>
          <nav className="site-footer-links" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={links.sunDevilCentral}>Sun Devil Central</a>
          </nav>
          <nav className="site-footer-links" aria-label="Social">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href}>
                <Icon />
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="site-footer-legal">© {new Date().getFullYear()} Hacker Devils, Tempe, Arizona</p>
      </Container>
    </footer>
  );
}
