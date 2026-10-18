import { links, stats } from "@/lib/content";

/** Wide surface-2 tile at the top of every inner page. */
export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="t ph s12">
      <div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </div>
  );
}

/** Section heading row that sits between tiles. */
export function SectionHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="sh s12">
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

/** 2×2 stat cluster; the member count sits on maroon. */
export function StatCluster() {
  return (
    <div className="t stats s5" role="list" aria-label="Club at a glance">
      {stats.map((s, i) => (
        <div key={s.label} className={`sc${i === 0 ? " m" : ""}`} role="listitem">
          <span className="lab">{s.label}</span>
          <b>{s.value}</b>
        </div>
      ))}
    </div>
  );
}

/** Inverted (ink) call-to-action band. */
export function JoinBand() {
  return (
    <section className="t join s12" aria-labelledby="join-band">
      <div>
        <h2 id="join-band">Show up Wednesday.</h2>
        <p>Join 900+ Sun Devils getting interview ready.</p>
      </div>
      <div className="row">
        <a className="btn g" href={links.discord}>
          Discord
        </a>
        <a className="btn o" href={links.instagram}>
          Instagram
        </a>
        <a className="btn o" href={links.linkedin}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
