import { Section, SectionHeading, TextLink } from "@/components/ui";
import { partners } from "@/content/people";
import { statePressFeature } from "@/content/press";
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
      <aside className="press-feature" aria-labelledby="press-title">
        <h2 id="press-title">Featured in {statePressFeature.publication}</h2>
        <div>
          <h3>{statePressFeature.title}</h3>
          <p className="press-feature-meta">
            By {statePressFeature.author} · <time dateTime={statePressFeature.published}>{statePressFeature.dateLabel}</time>
          </p>
          <p className="press-feature-summary">{statePressFeature.summary}</p>
          <TextLink href={statePressFeature.href}>Read the State Press article</TextLink>
        </div>
      </aside>
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
