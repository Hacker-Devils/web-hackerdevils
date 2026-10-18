import Link from "next/link";
import Countdown from "@/components/Countdown";
import EventsTabs from "@/components/EventsTabs";
import ProgramTile from "@/components/ProgramTile";
import { JoinBand, SectionHead, StatCluster } from "@/components/Bands";
import { interviewFormats, links, programs, tracks } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="grid">
      <section className="t hero s8" aria-labelledby="hero-title">
        <h1 id="hero-title">
          Get interview
          <br />
          ready, together.
        </h1>
        <p>
          Hacker Devils is the premier competitive coding organization at Arizona State University. We prepare Sun Devils for the online
          assessments and technical interviews that decide internships and jobs.
        </p>
        <div className="row">
          <a className="btn g" href={links.discord}>
            Join the Discord
          </a>
          <Link className="btn w" href="/programs">
            What we do
          </Link>
        </div>
      </section>

      <div className="col s4">
        <Countdown />
        <Link href="/join" className="t open">
          <span className="dot">
            <i aria-hidden="true" />
            Tempe campus
          </span>
          <h2>Open to every ASU student</h2>
          <span className="lab">Any major, any year, no experience required.</span>
        </Link>
      </div>

      <section className="t about s7" aria-labelledby="who">
        <h2 id="who">Who we are</h2>
        <p className="big">
          Classes teach you how to program. Interviews test whether you can solve an unseen problem in 45 minutes with someone watching.
        </p>
        <p>Hacker Devils closes that gap with weekly practice, Code-A-Thons, mock interviews and technical workshops.</p>
        <Link className="more" href="/about">
          More about us →
        </Link>
      </section>
      <StatCluster />

      <SectionHead title="Programs" lead="Everything we run, from weekly practice to semester contests and workshops." />
      {programs.map((p) => (
        <ProgramTile key={p.id} p={p} />
      ))}

      <EventsTabs className="s7" />

      <section className="t iv s5" aria-labelledby="iv-title">
        <h2 id="iv-title">Mock interviews</h2>
        <div className="lab">Two formats. Use both.</div>
        <div className="ivc">
          <span className="k">{interviewFormats.ai.name}</span>
          <h4>Practice any time</h4>
          <p>{interviewFormats.ai.desc}</p>
        </div>
        <div className="ivc b">
          <span className="k">{interviewFormats.peer.name}</span>
          <h4>The real thing, rehearsed</h4>
          <p>Live 45-minute interviews with members and officers, followed by an honest debrief.</p>
        </div>
        <Link className="btn p" href="/interviews">
          Request a mock interview
        </Link>
      </section>

      <section className="t res s12" aria-labelledby="res-title">
        <div className="tx">
          <h2 id="res-title">Resources</h2>
          <div className="lab">Slides and notes from every session.</div>
        </div>
        <div className="chips">
          {tracks.map((t) => (
            <Link key={t.id} href={`/resources#${t.id}`} className={`chip${t.soon ? " s" : ""}`}>
              <i aria-hidden="true" />
              {t.name}
              {t.soon ? " · soon" : ""}
            </Link>
          ))}
        </div>
        <Link className="btn o" href="/resources">
          Open library →
        </Link>
      </section>

      <JoinBand />
    </div>
  );
}
