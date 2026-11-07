import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, Container } from "@/components/ui";
import { links } from "@/content/site";

const facts = ["Wednesdays, 6 to 7 PM", "Tempe campus", "Free pizza"];

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <svg className="hero-slash" viewBox="0 0 100 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M78 -20L22 320" />
      </svg>
      <Container>
        <h1 id="hero-title">
          Competitive and Collaborative <em>Programming Club</em>
        </h1>
        <p className="hero-lead">
          Hacker Devils is a Fulton Schools student organization that prepares Sun Devils for technical interviews and online assessments, while
          teaching the programming fundamentals that matter in industry.
        </p>
        <div className="hero-actions">
          <Button href={links.discord} icon={<DiscordIcon />}>
            Join the Discord
          </Button>
          <Button href="#practice" variant="secondary">
            See what we practice
          </Button>
        </div>
        <ul className="hero-facts">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
