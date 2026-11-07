import { DiscordIcon, InstagramIcon } from "@/components/brand/SocialIcons";
import { Section, SectionHeading, TextLink } from "@/components/ui";
import { handles, links } from "@/content/site";

const socials = [
  { name: "Discord", handle: handles.discord, href: links.discord, Icon: DiscordIcon },
  { name: "Instagram", handle: handles.instagram, href: links.instagram, Icon: InstagramIcon },
];

/** Discord and Instagram links with their logos and handles. */
export function SocialLinks() {
  return (
    <ul className="social-links">
      {socials.map(({ name, handle, href, Icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon size={22} />
            <span>
              <strong>{name}</strong>
              {handle}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function JoinSection() {
  return (
    <Section tone="maroon" labelledBy="join-title">
      <div className="join-grid">
        <div>
          <SectionHeading id="join-title" title="Show up Wednesday." lead="Built for tech majors, open to every major. No experience required." />
          <SocialLinks />
        </div>
        <ol className="join-steps">
          <li>
            <h3>
              <TextLink href={links.discord}>Join the Discord</TextLink>
            </h3>
            <p>Announcements, weekly problems and room details.</p>
          </li>
          <li>
            <h3>
              <TextLink href={links.sunDevilCentral}>Register on Sun Devil Central</TextLink>
            </h3>
            <p>This makes you an official member of the org.</p>
          </li>
          <li>
            <h3>Come to a meeting</h3>
            <p>6 to 7 PM on the Tempe campus. Bring a laptop. The pizza is on us.</p>
          </li>
        </ol>
      </div>
    </Section>
  );
}
