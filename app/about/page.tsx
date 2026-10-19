import type { Metadata } from "next";
import { JoinBand, Metrics, PageHeader, SectionRule, SectionIntro } from "@/components/Bands";
import { partners, team, wednesday } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Who Hacker Devils are, how the club started, how Wednesday meetings work, and the people who run it.",
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Who we" accent="are." lead="A Fulton Schools club open to every ASU student, built around weekly LeetCode practice, system design and GPU programming." />

      <section className="section wrap" aria-labelledby="who">
        <SectionRule />
        <div className="split">
          <h2 id="who" className="lede">
            Classes teach you how to program. Interviews test whether you can solve an unseen problem in 45 minutes with{" "}
            <span className="accent">someone watching.</span>
          </h2>
          <div className="body">
            <p>
              Hacker Devils closes that gap. Every Wednesday, officers bring a problem set modeled on real online assessments, split into Easy
              and Medium groups, and finish with a full solution review.
            </p>
            <p>
              Alongside Wednesdays we run system design every other week and GPU programming sessions, plus a few events each semester with partner organizations. And there’s free pizza at every meeting.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 64 }}>
          <Metrics />
        </div>
      </section>


      <section className="section flush wrap" aria-labelledby="wed-title">
        <SectionRule />
        <SectionIntro id="wed-title" lead="One hour on the Tempe campus. Bring a laptop.">
          How a meeting <span className="accent">runs.</span>
        </SectionIntro>
        <div className="clock">
          <div className="terminal-heading mono">
            <span>
              <span className="status-dot gold" aria-hidden="true" /> wednesday.agenda
            </span>
            <span aria-hidden="true">↗</span>
          </div>
          <ol className="agenda" style={{ borderTop: 0 }}>
            {wednesday.map((w) => (
              <li key={w.time}>
                <span className="mono">{w.time}</span>
                <strong style={{ fontWeight: 400 }}>{w.title}</strong>
                <p>{w.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section flush wrap" aria-labelledby="team-title">
        <SectionRule />
        <SectionIntro id="team-title" lead="The students and faculty leading Hacker Devils this year.">
          Who’s <span className="accent">leading.</span>
        </SectionIntro>
        <ul className="roster">
          {team.map((m) => (
            <li key={m.name} className={m.tier}>
              <span className="avatar" aria-hidden="true">
                {initials(m.name)}
              </span>
              <span>
                <strong>{m.name}</strong>
                <small>{m.title}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section flush wrap" aria-labelledby="partners-title">
        <SectionRule />
        <h2 id="partners-title" style={{ margin: "42px 0 32px" }}>
          Built with <span className="accent">friends.</span>
        </h2>
        <ul className="partner-list">
          {partners.map((p) => (
            <li key={p.short}>
              <span className="mono">{p.short}</span>
              <strong>{p.name}</strong>
              <small>{p.role}</small>
            </li>
          ))}
        </ul>
      </section>

      <JoinBand />
    </>
  );
}
