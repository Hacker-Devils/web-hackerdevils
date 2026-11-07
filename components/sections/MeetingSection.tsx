import { FactList, Section, SectionHeading } from "@/components/ui";
import { agenda, meetingFacts, rotation } from "@/content/meeting";

export function MeetingSection() {
  return (
    <Section tone="soft" labelledBy="meeting-title">
      <SectionHeading
        id="meeting-title"
        title="One hour, every Wednesday"
        lead="Two weeks alternate through the semester. Classes teach you how to program, and these hours are practice for the part interviews actually test."
      />
      <div className="rotation">
        {rotation.map((week) => (
          <article key={week.title}>
            <h3>{week.title}</h3>
            <ul>
              {week.sessions.map((session) => (
                <li key={session.name}>
                  <strong>{session.name}</strong>
                  <span>{session.room}</span>
                </li>
              ))}
            </ul>
            <p>{week.note}</p>
          </article>
        ))}
      </div>
      <div className="meeting-grid">
        <FactList items={meetingFacts} />
        <ol className="agenda" aria-label="Meeting agenda">
          {agenda.map((item) => (
            <li key={item.time}>
              <time>{item.time}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
