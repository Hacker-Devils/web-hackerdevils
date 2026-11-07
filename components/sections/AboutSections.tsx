import { Section, SectionHeading } from "@/components/ui";
import { leaders, members, partners } from "@/content/people";

export function MissionSection() {
  return (
    <Section labelledBy="mission-title">
      <div className="mission">
        <h2 id="mission-title">
          Classes teach you how to program. Technical interviews test whether you can solve an unseen problem in 45 minutes with someone watching.
        </h2>
        <div>
          <p>
            Hacker Devils closes that gap. Every Wednesday, officers bring a problem set modeled on real online assessments, split into Easy and Medium
            groups, and finish with a full solution review.
          </p>
          <p>
            Alongside Wednesdays we run system design every other week, with GPU programming coming soon, plus a few events each semester with partner
            organizations. There’s free pizza at every meeting.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function LeadershipSection() {
  return (
    <Section tone="soft" labelledBy="leadership-title">
      <SectionHeading id="leadership-title" title="Who’s leading." lead="The students and faculty running Hacker Devils this year." />
      <ul className="leaders">
        {leaders.map((person) => (
          <li key={person.name}>
            <h3>{person.name}</h3>
            <p>{person.title}</p>
          </li>
        ))}
      </ul>
      <ul className="members">
        {members.map((person) => (
          <li key={person.name}>
            {person.name}
            <span>{person.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function PartnersSection() {
  return (
    <Section labelledBy="partners-title">
      <SectionHeading id="partners-title" title="Who we work with." />
      <ul className="partners">
        {partners.map((partner) => (
          <li key={partner.short}>
            <strong>{partner.short}</strong>
            <span>{partner.name}</span>
            <span>{partner.role}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
