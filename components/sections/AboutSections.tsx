import { Section, SectionHeading } from "@/components/ui";
import { partners } from "@/content/people";
import { BoardGallery } from "./BoardGallery";

export function MissionSection() {
  return (
    <Section labelledBy="mission-title">
      <div className="mission">
        <h2 id="mission-title">
          Classes teach you how to program. Technical interviews test whether you can solve an unseen problem in 45 minutes with someone watching.
        </h2>
        <div>
          <p>
            Hacker Devils closes that gap. Each Wednesday, officers bring a problem set modeled on real online assessments and finish with a full
            solution review. Easy and Medium sections take turns, with system design running alongside Easy.
          </p>
          <p>GPU programming is coming soon, and we run events each semester with other clubs on campus. There’s free pizza at every meeting.</p>
        </div>
      </div>
    </Section>
  );
}

export function BoardSection() {
  return (
    <Section tone="soft" labelledBy="board-title">
      <SectionHeading id="board-title" title="The Fall 2026 board" />
      <BoardGallery />
    </Section>
  );
}

export function PartnersSection() {
  return (
    <Section labelledBy="partners-title">
      <SectionHeading id="partners-title" title="Who we work with" lead="Clubs and organizations we’ve run events with." />
      <ul className="partners">
        {partners.map((partner) => (
          <li key={partner.name}>
            <strong>{partner.name}</strong>
            <span>{partner.work}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
