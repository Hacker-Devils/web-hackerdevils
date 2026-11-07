import type { ReactNode } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, Section, SectionHeading, TextLink } from "@/components/ui";
import { programs, type Program } from "@/content/programs";
import { links } from "@/content/site";
import { GpuFigure, SystemDesignFigure } from "./ProgramFigures";
import { ProblemPanel } from "./ProblemPanel";
import { WeeklyCalendarButton } from "./WeeklyCalendarButton";

function ProgramCopy({ program, detailed, children }: { program: Program; detailed: boolean; children?: ReactNode }) {
  return (
    <div className="program-copy">
      <h3>{program.name}</h3>
      <p className={program.soon ? "program-when is-soon" : "program-when"}>{program.when}</p>
      <p>{program.description}</p>
      {detailed ? (
        <ul className="program-topics" aria-label={`${program.name} topics`}>
          {program.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
}

/** LeetCode gets the most room because it runs every week. `detailed` adds the topic lists on the Events page. */
export function ProgramsSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <Section labelledBy="programs-title">
      <SectionHeading
        id="programs-title"
        title="Learn and prepare."
        lead="LeetCode every Wednesday and system design every other week. GPU programming is coming soon."
      />

      <article className="program-flagship" id="practice">
        <ProgramCopy program={programs.practice} detailed={detailed}>
          <div className="program-actions">
            <WeeklyCalendarButton />
          </div>
        </ProgramCopy>
        <ProblemPanel />
      </article>

      <div className="program-pair">
        <article id="system-design">
          <SystemDesignFigure />
          <ProgramCopy program={programs["system-design"]} detailed={detailed}>
            {detailed ? null : <TextLink href="/events#system-design">What we cover in system design</TextLink>}
          </ProgramCopy>
        </article>
        <article id="gpu">
          <GpuFigure />
          <ProgramCopy program={programs.gpu} detailed={detailed}>
            <div className="program-actions">
              <Button href={links.discord} variant="secondary" size="small" icon={<DiscordIcon />}>
                Get notified on Discord
              </Button>
            </div>
          </ProgramCopy>
        </article>
      </div>
    </Section>
  );
}
