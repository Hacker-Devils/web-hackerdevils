"use client";

import { useEffect, useState } from "react";

/**
 * Weekly meeting: Wednesdays 6–7 PM in Arizona.
 * Arizona stays on MST (UTC-7) all year, so that is always Thursday 01:00–02:00 UTC.
 */
const MEETING_UTC_DAY = 4;
const MEETING_UTC_HOUR = 1;
const MEETING_MS = 60 * 60 * 1000;
const DAY_MS = 864e5;
const WEEK_MS = 7 * DAY_MS;

function nextMeeting(now: number) {
  const n = new Date(now);
  let t = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), MEETING_UTC_HOUR, 0, 0);
  while (new Date(t).getUTCDay() !== MEETING_UTC_DAY || t <= now) t += DAY_MS;
  return t;
}

const pad = (x: number) => String(x).padStart(2, "0");

export default function Countdown() {
  // null until mounted, so the server render and first client render match.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  let parts = { d: "–", h: "––", m: "––", s: "––" };
  let live = false;
  if (now !== null) {
    const next = nextMeeting(now);
    live = now < next - WEEK_MS + MEETING_MS;
    const sec = Math.max(0, Math.floor((next - now) / 1000));
    parts = {
      d: String(Math.floor(sec / 86400)),
      h: pad(Math.floor((sec % 86400) / 3600)),
      m: pad(Math.floor((sec % 3600) / 60)),
      s: pad(sec % 60),
    };
  }

  return (
    <div className={`t next${live ? " live" : ""}`}>
      <div>
        <div className="lab">{live ? "Happening now" : "Next weekly meeting"}</div>
        <h2>Wednesday, 6 PM</h2>
      </div>
      <div className="cd" aria-hidden="true">
        <div>
          <b>{parts.d}</b>
          <span>days</span>
        </div>
        <div>
          <b>{parts.h}</b>
          <span>hrs</span>
        </div>
        <div>
          <b>{parts.m}</b>
          <span>min</span>
        </div>
        <div>
          <b>{parts.s}</b>
          <span>sec</span>
        </div>
      </div>
    </div>
  );
}
