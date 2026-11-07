import { FactList, Section, SectionHeading } from "@/components/ui";
import { agenda, meetingFacts } from "@/content/meeting";
import { Countdown } from "./Countdown";

export function MeetingSection() {
  return (
    <Section tone="soft" labelledBy="meeting-title">
      <SectionHeading
        id="meeting-title"
        title="One hour, every Wednesday."
        lead="Classes teach you how to program. Technical interviews test whether you can solve an unseen problem in 45 minutes with someone watching. Wednesdays are practice for that."
      />
      <div className="meeting-grid">
        <div>
          <Countdown />
          <FactList items={meetingFacts} />
        </div>
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
