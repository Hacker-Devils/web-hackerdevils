import type { Metadata } from "next";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, PageHeading } from "@/components/ui";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Hacker Devils resources are coming soon.",
};

export default function ResourcesPage() {
  return (
    <PageHeading title="Coming soon" lead="We’re putting this page together. Until then, slides from past meetings are on the Events page.">
      <div className="page-actions">
        <Button href="/events#recaps">See event recaps</Button>
        <Button href={links.discord} variant="secondary" icon={<DiscordIcon />}>
          Join the Discord
        </Button>
      </div>
    </PageHeading>
  );
}
