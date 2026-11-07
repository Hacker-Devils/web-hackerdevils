import { PizzaDrawing } from "@/components/brand/PizzaDrawing";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, Section } from "@/components/ui";
import { links } from "@/content/site";

export function PizzaSection() {
  return (
    <Section tone="gold" labelledBy="pizza-title">
      <div className="pizza-grid">
        <div className="pizza-copy">
          <h2 id="pizza-title">There’s free pizza every meeting</h2>
          <p>Grab a slice, then grab a problem.</p>
          <Button href={links.discord} icon={<DiscordIcon />}>
            Find this week’s room
          </Button>
        </div>
        <PizzaDrawing />
      </div>
    </Section>
  );
}
