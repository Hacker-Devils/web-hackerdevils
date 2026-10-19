import type { ReactNode } from "react";
import { handles, links, stats } from "@/lib/content";
import { DiscordIcon, InstagramIcon } from "./BrandIcons";

/** Grid-paper band at the top of every inner page. */
export function PageHeader({ title, accent, lead }: { title: string; accent?: string; lead: string }) {
  return (
    <section className="page-head wrap grid-paper">
      <h1>
        {title}
        {accent ? (
          <>
            {" "}
            <span className="accent">{accent}</span>
          </>
        ) : null}
      </h1>
      <p>{lead}</p>
    </section>
  );
}

/** Hairline that opens a section. */
export function SectionRule() {
  return <hr className="section-rule" />;
}

/** Heading on the left, short lead on the right. */
export function SectionIntro({ id, children, lead }: { id: string; children: ReactNode; lead?: ReactNode }) {
  return (
    <div className="section-intro">
      <h2 id={id}>{children}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

/** Four-up metrics strip. */
export function Metrics() {
  return (
    <div className="metrics" role="list" aria-label="Club at a glance">
      {stats.map((s) => (
        <div key={s.label} role="listitem">
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Closing call to action: copy + a terminal with the three join steps. */
export function JoinBand() {
  return (
    <section className="join-section wrap grid-paper" aria-labelledby="join-band">
      <div className="join-copy">
        <h2 id="join-band">
          Show up Wednesday.
          <br /> <span className="accent">Leave sharper.</span>
        </h2>
        <p>Join 900+ Sun Devils getting interview ready. Free, open to every major, no experience required.</p>
        <Socials />
      </div>
      <JoinTerminal />
    </section>
  );
}

/** Discord + Instagram link cards: brand glyph, platform, handle. */
export function Socials() {
  const items = [
    { name: "Discord", handle: handles.discord, href: links.discord, Icon: DiscordIcon, primary: true },
    { name: "Instagram", handle: handles.instagram, href: links.instagram, Icon: InstagramIcon, primary: false },
  ];
  return (
    <ul className="socials">
      {items.map(({ name, handle, href, Icon, primary }) => (
        <li key={name}>
          <a className={`social${primary ? " primary" : ""}`} href={href} target="_blank" rel="noreferrer">
            <span className="social-icon">
              <Icon size={18} />
            </span>
            <span className="social-text">
              <strong>{name}</strong>
              <small>{handle}</small>
            </span>
            <span className="social-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function JoinTerminal() {
  const steps = [
    { title: "Join the Discord", body: "Announcements, weekly problems, room details.", href: links.discord },
    { title: "Register on Sun Devil Central", body: "Become an official member of the org.", href: links.sunDevilCentral },
    { title: "Show up Wednesday", body: "6–7 PM, Tempe campus. Bring a laptop. Pizza’s on us." },
  ];
  return (
    <div className="terminal">
      <div className="terminal-heading mono">
        <span>
          <span className="status-dot" aria-hidden="true" /> Hacker Devils — access
        </span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-command">
          <span aria-hidden="true">$</span>hkd join --semester current
        </p>
        <ol className="terminal-steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="mono">[{i + 1}/3]</span>
              <span>
                <strong>{s.title}</strong>
                <small>{s.body}</small>
              </span>
              {s.href ? (
                <a className="go" href={s.href} aria-label={s.title}>
                  ↗
                </a>
              ) : (
                <span className="status-dot gold" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
