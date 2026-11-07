"use client";

import { useEffect, useState } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, FactList, Section } from "@/components/ui";
import { codeAThon, codeAThonFacts } from "@/content/events";
import { links } from "@/content/site";
import { isUpcoming } from "@/lib/calendar";
import { AddToCalendar } from "./AddToCalendar";

/** Advertises the Code-A-Thon until it ends, then removes itself from the page. */
export function CodeAThonFeature() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  if (!isUpcoming(codeAThon, now)) return null;

  return (
    <Section id="code-a-thon" labelledBy="code-a-thon-title">
      <article className="feature">
        <div>
          <h2 id="code-a-thon-title">Code-A-Thon</h2>
          <p className="feature-lead">
            A coding competition on HackerRank, in person, with <em>a chance to win GTA 6</em>.
          </p>
          <div className="feature-actions">
            <AddToCalendar event={codeAThon} />
            <Button href={links.discord} size="small" icon={<DiscordIcon />}>
              Get updates on Discord
            </Button>
          </div>
        </div>
        <FactList items={codeAThonFacts} />
      </article>
    </Section>
  );
}
