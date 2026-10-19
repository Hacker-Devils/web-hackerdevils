"use client";

import { useEffect, useState } from "react";
import { MEETING_MS, nextMeeting } from "@/lib/calendar";

const WEEK_MS = 7 * 864e5;

const pad = (x: number) => String(x).padStart(2, "0");

export default function Countdown({ children }: { children?: React.ReactNode }) {
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
    <div className="clock">
      <div className="terminal-heading mono">
        <span>
          <span className={`status-dot${live ? " live" : " gold"}`} aria-hidden="true" />
          {live ? "Weekly meeting · live" : "Next meeting · T-minus"}
        </span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="clock-body">
        {live ? (
          <p className="clock-live">Happening now. Come through.</p>
        ) : (
          <div className="clock-digits" role="timer" aria-label="Time until Wednesday 6 PM Arizona time">
            {(
              [
                [parts.d, "Days"],
                [parts.h, "Hrs"],
                [parts.m, "Min"],
                [parts.s, "Sec"],
              ] as const
            ).map(([v, l]) => (
              <div key={l} aria-hidden="true">
                <b>{v}</b>
                <span className="mono">{l}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
