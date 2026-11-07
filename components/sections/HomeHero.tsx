import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, Container } from "@/components/ui";
import { links } from "@/content/site";
import { NextMeetingCard } from "./NextMeetingCard";

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div>
            <h1 id="hero-title">
              Competitive and Collaborative <em>Programming Club</em>
            </h1>
            <p className="hero-lead">
              Hacker Devils is a Fulton Schools student organization that prepares Sun Devils for technical interviews and online assessments, while
              teaching the programming fundamentals that matter in industry. There’s free pizza at every meeting.
            </p>
            <div className="hero-actions">
              <Button href={links.discord} icon={<DiscordIcon />}>
                Join the Discord
              </Button>
              <Button href="#practice" variant="secondary">
                See what we practice
              </Button>
            </div>
          </div>
          <NextMeetingCard />
        </div>
      </Container>
    </section>
  );
}
