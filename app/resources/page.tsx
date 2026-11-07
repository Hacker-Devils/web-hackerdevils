import type { Metadata } from "next";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, PageHeading } from "@/components/ui";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Slides, notes and problem sets from Hacker Devils sessions. Coming soon.",
};

export default function ResourcesPage() {
  return (
    <PageHeading title="Resources are coming soon" lead="Slides, notes and problem sets from our sessions will live here. Until then, we share everything on Discord.">
      <Button href={links.discord} icon={<DiscordIcon />}>
        Join the Discord
      </Button>
    </PageHeading>
  );
}
