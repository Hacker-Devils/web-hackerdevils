import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head wrap grid-paper">
      <div className="lost" style={{ paddingTop: 64 }}>
        <div className="terminal">
          <div className="terminal-heading mono">
            <span>
              <span className="status-dot" aria-hidden="true" /> judge — verdict
            </span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-command">
              <span aria-hidden="true">$</span>hkd open {"<this page>"}
            </p>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", margin: "0 0 14px" }}>
              Wrong <span className="accent">answer.</span>
            </h1>
            <p className="muted" style={{ marginBottom: 24, fontSize: 14 }}>
              That page doesn’t exist. Try the home page, or this week’s problems on Discord.
            </p>
            <Link className="button primary" href="/">
              Back home <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
