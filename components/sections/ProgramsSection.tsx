import type { ReactNode } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button, Section, SectionHeading, TextLink } from "@/components/ui";
import { programs, type Program } from "@/content/programs";
import { links } from "@/content/site";
import { GpuFigure, SystemDesignFigure } from "./ProgramFigures";
import { ProblemPanel } from "./ProblemPanel";

function ProgramCopy({ program, children }: { program: Program; children?: ReactNode }) {
  return (
    <div className="program-copy">
      <h3>{program.name}</h3>
      <p className={program.soon ? "program-when is-soon" : "program-when"}>{program.when}</p>
      <p>{program.description}</p>
      <ul className="program-topics" aria-label={`${program.name} topics`}>
        {program.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

/** The LeetCode sections get the most room because they run every week. */
export function ProgramsSection() {
  return (
    <Section labelledBy="programs-title">
      <SectionHeading
        id="programs-title"
        title="Learn and prepare"
        lead="Easy and Medium LeetCode sections take turns, with system design alongside Easy. GPU programming is coming soon."
      />

      <article className="program-flagship" id="practice">
        <ProgramCopy program={programs.practice}>
          <p className="program-link">
            <TextLink href="#upcoming">See the next dates</TextLink>
          </p>
        </ProgramCopy>
        <ProblemPanel />
      </article>

      <div className="program-pair">
        <article id="system-design">
          <SystemDesignFigure />
          <ProgramCopy program={programs["system-design"]} />
        </article>
        <article id="gpu">
          <GpuFigure />
          <ProgramCopy program={programs.gpu}>
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
