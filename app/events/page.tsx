import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import EventsTabs from "@/components/EventsTabs";
import ProgramsExplorer from "@/components/ProgramsExplorer";
import { JoinBand, PageHeader, SectionIntro, SectionRule } from "@/components/Bands";
import { links, meetingSpec } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Technical interview prep at Hacker Devils: LeetCode every Wednesday and system design every other week, with GPU programming coming soon.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Every week,"
        accent="every semester."
        lead="LeetCode every Wednesday and system design every other week, with GPU programming coming soon. Dates are announced on Discord first."
      />

      <section className="section wrap" aria-labelledby="programs-title">
        <SectionRule />
        <SectionIntro id="programs-title" lead="Built for tech majors, open to every ASU student. Free pizza at every meeting.">
          What we <span className="accent">run.</span>
        </SectionIntro>
        <ProgramsExplorer deepLink />
      </section>

      <section className="section flush wrap" aria-labelledby="all-events">
        <SectionRule />
        <SectionIntro id="all-events" lead="Weekly meetings first. Events and their registration open on Discord.">
          On the <span className="accent">calendar.</span>
        </SectionIntro>
        <EventsTabs label="All events" />
      </section>

      <section className="section flush wrap" aria-labelledby="weekly">
        <SectionRule />
        <div className="meeting-grid" style={{ marginTop: 42 }}>
          <div className="meeting-copy">
            <h2 id="weekly">
              Every <span className="accent">Wednesday.</span>
            </h2>
            <p>Problem drop, pick a level, solve together, review. The countdown resets the moment the meeting ends.</p>
            <dl className="spec-list">
              {meetingSpec.map((s) => (
                <div key={s.label}>
                  <dt>{s.label.toUpperCase()}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Countdown />
        </div>
      </section>

      <section className="section flush wrap" aria-labelledby="host-title">
        <SectionRule />
        <div className="duo" style={{ marginTop: 42 }}>
          <div className="duo-panel">
            <h3 id="host-title">Co-host an event.</h3>
            <p>We co-host events with organizations like WiCS and SoDA. Bring your members, we bring the problems.</p>
            <a className="button primary" href={`mailto:${links.email}`}>
              Email the officers <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="duo-panel">
            <h3>Give a tech talk.</h3>
            <p>Reach 900+ students who practice every week. Sponsor an event or run a workshop with us.</p>
            <a className="button ghost" href={`mailto:${links.email}?subject=Sponsorship`}>
              Talk sponsorship <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
