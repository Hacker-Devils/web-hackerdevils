import type { Metadata } from "next";
import { DiscordIcon } from "@/components/BrandIcons";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "Slides, notes and problem sets from Hacker Devils sessions. Coming soon.",
};

export default function ResourcesPage() {
  return (
    <section className="page-head coming-soon wrap grid-paper" aria-labelledby="resources-title">
      <h1 id="resources-title">
        Resources, <span className="accent">coming soon.</span>
      </h1>
      <p>
        Slides, notes and problem sets from our LeetCode, system design and GPU programming sessions will live here. Until then, everything is
        shared on Discord.
      </p>
      <a className="button primary" href={links.discord}>
        <DiscordIcon className="brand-glyph" />
        Join the Discord <span className="arrow" aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
