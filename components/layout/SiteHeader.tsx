import { Logo } from "@/components/brand/Logo";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, Container } from "@/components/ui";
import { links } from "@/content/site";
import { MainNav } from "./MainNav";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header-row">
          <Logo />
          <MainNav />
          <div className="site-header-actions">
            <ThemeToggle />
            <Button href={links.discord} size="small" icon={<DiscordIcon />} className="site-header-cta">
              Join the Discord
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
