import type { Metadata } from "next";
import { JoinBand, PageHeader, SectionHead, StatCluster } from "@/components/Bands";
import { partners, quote, team, timeline, wednesday } from "@/lib/content";

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
    <div className="grid">
      <PageHeader title="About" lead="Who we are, how we got here, and the people who run it." />

      <section className="t about s7" aria-labelledby="who">
        <h2 id="who">Who we are</h2>
        <p className="big">
          Classes teach you how to program. Interviews test whether you can solve an unseen problem in 45 minutes with someone watching.
        </p>
        <p>
          Hacker Devils closes that gap. We are a Fulton Schools club open to every ASU student, built around weekly practice, timed
          contests, mock interviews and technical workshops.
        </p>
      </section>
      <StatCluster />

      <SectionHead title="Our story" />
      {timeline.map((step, i) => (
        <article key={step.title} className={`t tlt s3${i === timeline.length - 1 ? " gold" : ""}`}>
          <span className="y">{step.when}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}

      <section className="t wed s12" aria-labelledby="wed-title">
        <div className="intro">
          <h2 id="wed-title">How Wednesdays work</h2>
          <div className="lab">One hour on the Tempe campus. Bring a laptop.</div>
        </div>
        {wednesday.map((w) => (
          <div key={w.time} className="st">
            <b>{w.time}</b>
            <h4>{w.title}</h4>
            <p>{w.body}</p>
          </div>
        ))}
      </section>

      <section className="t s8" aria-labelledby="team-title">
        <h2 id="team-title">The team</h2>
        <div className="lab">Run by students, for students.</div>
        <ul className="people">
          {team.map((m) => (
            <li key={m.name} className={`pp ${m.role.toLowerCase()}`}>
              <i aria-hidden="true">{initials(m.name)}</i>
              <b>{m.name}</b>
              {m.role}
            </li>
          ))}
        </ul>
      </section>

      <div className="col s4">
        <section className="t partners" aria-labelledby="partners-title">
          <h2 id="partners-title">Partners</h2>
          {partners.map((p) => (
            <div key={p.short} className="pr">
              <i aria-hidden="true">{p.short}</i>
              <div>
                <b>{p.name}</b>
                <span>{p.role}</span>
              </div>
            </div>
          ))}
        </section>
        <figure className="t quote">
          <blockquote>“{quote.text}”</blockquote>
          <figcaption>{quote.by}</figcaption>
        </figure>
      </div>

      <JoinBand />
    </div>
  );
}
