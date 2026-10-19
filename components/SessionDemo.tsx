"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import { CalendarPlus } from "lucide-react";
import { googleCalendarUrl, nextMeeting } from "@/lib/calendar";
import { scenarios } from "@/lib/demo";
import { BrandMark } from "./Logo";

const LINE_MS = 120;
/** Fixed start for the server-rendered link (first Wednesday of Fall 2026), so server and client markup match. */
const CALENDAR_ANCHOR = Date.UTC(2026, 7, 19);
const TEST_MS = 420;

/** Tiny Python highlighter: comments, strings, keywords, numbers and call names. */
const TOKEN = /(#.*$)|("[^"]*"|'[^']*')|\b(def|for|in|if|return|and|or|not|while|else|elif|range|len|max|enumerate)\b|\b(\d+)\b|\b([a-z_]+)(?=\()/g;
const KIND = ["tok-c", "tok-s", "tok-k", "tok-n", "tok-f"];

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of line.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(line.slice(last, at));
    const group = m.slice(1).findIndex((g) => g !== undefined);
    out.push(
      <span key={at} className={KIND[group]}>
        {m[0]}
      </span>,
    );
    last = at + m[0].length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

/** Hero demo: pick a problem and watch a Wednesday session play out, from first line to accepted. */
export default function SessionDemo() {
  const [active, setActive] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0); // bumps on replay so the effect restarts
  // Build-time link until mounted, then one that starts at the visitor's next Wednesday.
  const [calendarHref, setCalendarHref] = useState(() => googleCalendarUrl(nextMeeting(CALENDAR_ANCHOR)));

  useEffect(() => {
    setCalendarHref(googleCalendarUrl(nextMeeting(Date.now())));
  }, []);

  const s = active === null ? null : scenarios[active];
  const total = s ? s.code.length + s.tests.length + 1 : 0;

  useEffect(() => {
    if (!s) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(total);
      return;
    }
    let i = 0;
    let id = 0;
    const tick = () => {
      i += 1;
      setStep(i);
      if (i < total) id = window.setTimeout(tick, i < s.code.length ? LINE_MS : TEST_MS);
    };
    id = window.setTimeout(tick, 350);
    return () => window.clearTimeout(id);
  }, [s, total, run]);

  function replay() {
    setStep(0);
    setRun((r) => r + 1);
  }

  function choose(i: number) {
    setActive(i);
    replay();
  }

  const lines = s ? Math.min(step, s.code.length) : 0;
  const tests = s ? Math.max(0, Math.min(step - s.code.length, s.tests.length)) : 0;
  const done = s !== null && step >= total;
  const status = !s ? "Ready when you are" : done ? "Accepted" : lines < s.code.length ? `Writing ${s.file}` : "Running tests";

  return (
    <div id="demo" className="demo" aria-label="Interactive Hacker Devils session demo">
      <div className="demo-toolbar mono">
        <span className="traffic" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>hkd — wednesday.session</span>
        <span aria-hidden="true">{s ? s.file : "~/"}</span>
      </div>

      <div className="demo-layout">
        <div className="demo-workspace" role="region" aria-label="Problem, code and test output">
          <div className="demo-heading">
            <span>
              <BrandMark className="brand-mark" />
              <span>
                Hacker<span className="accent">Devils</span>
              </span>
            </span>
            <span className="mono" aria-live="polite">
              <span className={`status-dot${done ? " live" : ""}`} aria-hidden="true" />
              {status}
            </span>
          </div>

          {s ? (
            <div className="demo-body" key={`${active}-${run}`}>
              <div className="problem">
                <h4>{s.problem.name}</h4>
                <p>{s.problem.statement}</p>
              </div>
              <div className="editor" aria-label={`${s.file} source`}>
                <div className="gutter" aria-hidden="true">
                  {s.code.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <pre>
                  {s.code.slice(0, lines).map((l, i) => (
                    <span key={i} className="line">
                      {highlight(l)}
                      {i === lines - 1 && !done ? <span className="caret" aria-hidden="true" /> : null}
                      {"\n"}
                    </span>
                  ))}
                  {lines === 0 ? <span className="caret" aria-hidden="true" /> : null}
                </pre>
              </div>
              <div className="run" aria-live="polite">
                {tests === 0 ? <div className="run-line">$ python -m pytest {s.file}</div> : null}
                {s.tests.slice(0, tests).map((t) => (
                  <div key={t} className="run-line">
                    <b>✓</b>
                    {t}
                  </div>
                ))}
                {done ? <div className="run-line verdict">{s.verdict}</div> : null}
              </div>
            </div>
          ) : (
            <div className="demo-welcome">
              <div className="orb" aria-hidden="true">
                <BrandMark />
              </div>
              <h3>
                What are we solving
                <br /> this Wednesday?
              </h3>
              <p>
                Pick a problem. Watch it go from blank file
                <br /> to accepted, the way it does at every meeting.
              </p>
            </div>
          )}
        </div>

        <aside className="demo-choices" aria-label="Demo problems">
          <h3>
            You code.
            <br /> We review.
          </h3>
          <p>Choose a problem to play it through.</p>
          <div className="choices" role="group" aria-label="Example problem">
            {scenarios.map((sc, i) => (
              <button key={sc.title} type="button" className="choice" aria-pressed={active === i} onClick={() => choose(i)}>
                <strong>{sc.title}</strong>
                <small>
                  {sc.blurb.split("\n").map((part, j) => (
                    <Fragment key={j}>
                      {j > 0 ? <br /> : null}
                      {part}
                    </Fragment>
                  ))}
                </small>
                <span className="choice-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>
          <div className="demo-controls">
            <button type="button" disabled={!s} onClick={replay}>
              ▷ Replay
            </button>
            <button type="button" onClick={() => choose(active === null ? 0 : (active + 1) % scenarios.length)}>
              Next problem <span aria-hidden="true">↗</span>
            </button>
          </div>
          <a className="calendar-cta" href={calendarHref} target="_blank" rel="noreferrer">
            <span className="calendar-icon">
              <CalendarPlus size={18} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="calendar-text">
              <strong>Add to Google Calendar</strong>
              <small>Every Wednesday, 6–7 PM</small>
            </span>
            <span className="calendar-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </aside>
      </div>
    </div>
  );
}
