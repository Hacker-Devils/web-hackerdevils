import Link from "next/link";
import Countdown from "@/components/Countdown";
import EventsTabs from "@/components/EventsTabs";
import ProgramsExplorer from "@/components/ProgramsExplorer";
import SessionDemo from "@/components/SessionDemo";
import { DiscordIcon } from "@/components/BrandIcons";
import { JoinBand, Metrics, SectionRule, SectionIntro } from "@/components/Bands";
import { heroSpec, links, meetingSpec, wednesday } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero wrap grid-paper" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            Competitive and Collaborative
            <br /> <span className="accent">Programming Club.</span>
          </h1>
          <p>
            Hacker Devils is a Fulton Schools student organization that prepares Sun Devils for coding interviews and online assessments,
            while teaching the programming fundamentals that matter in industry.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={links.discord}>
              <DiscordIcon className="brand-glyph" />
              Join the Discord <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#demo">
              See a Wednesday <span className="arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <SessionDemo />

        <dl className="system-spec">
          {heroSpec.map((s) => (
            <div key={s.label}>
              <dt className="mono">{s.label}</dt>
              <dd>
                <strong>{s.value}</strong>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section wrap" aria-labelledby="programs-title">
        <SectionRule />
        <SectionIntro
          id="programs-title"
          lead={
            <>
              From weekly sets to semester contests.
              <br /> Pick what you need, use all of it.
            </>
          }
        >
          Everything we run,
          <br /> <span className="accent">in one place.</span>
        </SectionIntro>
        <ProgramsExplorer />
      </section>

      <section className="section flush wrap" aria-labelledby="meeting-title">
        <SectionRule />
        <div className="meeting-grid" style={{ marginTop: 42 }}>
          <div className="meeting-copy">
            <h2 id="meeting-title">
              One hour.
              <br /> <span className="accent">Every week.</span>
            </h2>
            <p>
              Classes teach you how to program. Interviews test whether you can solve an unseen problem in 45 minutes with someone watching.
              Wednesdays close that gap.
            </p>
            <dl className="spec-list">
              {meetingSpec.map((s) => (
                <div key={s.label}>
                  <dt>{s.label.toUpperCase()}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Countdown>
            <ol className="agenda" aria-label="Meeting agenda">
              {wednesday.map((w) => (
                <li key={w.time}>
                  <span className="mono">{w.time}</span>
                  <strong style={{ fontWeight: 400 }}>{w.title}</strong>
                  <p>{w.body}</p>
                </li>
              ))}
            </ol>
          </Countdown>
        </div>
      </section>

      <section className="section flush wrap" aria-labelledby="events-title">
        <SectionRule />
        <SectionIntro
          id="events-title"
          lead={
            <>
              Code-A-Thons, mock OAs and interview nights,
              <br /> often with WiCS and SDA.
            </>
          }
        >
          On the <span className="accent">calendar.</span>
        </SectionIntro>
        <EventsTabs />
        <div style={{ marginTop: 22 }}>
          <Link className="text-link" href="/events">
            All events <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <div style={{ marginTop: 64 }}>
          <Metrics />
        </div>
      </section>


      <JoinBand />
    </>
  );
}
