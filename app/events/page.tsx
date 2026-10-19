import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import EventsTabs from "@/components/EventsTabs";
import ProgramsExplorer from "@/components/ProgramsExplorer";
import { JoinBand, PageHeader, SectionIntro, SectionRule } from "@/components/Bands";
import { links, meetingSpec } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Weekly practice, Code-A-Thons, a mock interview week each semester, and system design and GPU programming workshops at Hacker Devils.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Every week,"
        accent="every semester."
        lead="Weekly practice, Code-A-Thons, a mock interview week each semester and technical workshops. Dates are announced on Discord first."
      />

      <section className="section wrap" aria-labelledby="programs-title">
        <SectionRule />
        <SectionIntro id="programs-title" lead="Free and open to every ASU student. Select a tab or a tile.">
          What we <span className="accent">run.</span>
        </SectionIntro>
        <ProgramsExplorer deepLink />
      </section>

      <section className="section flush wrap" aria-labelledby="all-events">
        <SectionRule />
        <SectionIntro id="all-events" lead="Contests, mock OAs and interview week, often co-hosted with partner orgs.">
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
            <h3 id="host-title">Co-host a contest.</h3>
            <p>We run mock OAs with WiCS and mock interviews with SDA. Bring your members, we bring the problems and the leaderboard.</p>
            <a className="button primary" href={`mailto:${links.email}`}>
              Email the officers <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="duo-panel">
            <h3>Give a tech talk.</h3>
            <p>Reach 900+ students who practice interviews every week. Sponsor a Code-A-Thon, run a workshop or join interview week.</p>
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
