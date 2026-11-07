"use client";

import { useEffect, useState } from "react";
import { MEETING_MS, nextMeeting } from "@/lib/calendar";

const WEEK_MS = 7 * 864e5;
const pad = (x: number) => String(x).padStart(2, "0");

/** Counts down to the next Wednesday meeting. Dashes show until the browser knows the time. */
export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  let parts: [string, string][] = [
    ["–", "days"],
    ["––", "hours"],
    ["––", "min"],
    ["––", "sec"],
  ];
  let live = false;
  if (now !== null) {
    const next = nextMeeting(now);
    live = now < next - WEEK_MS + MEETING_MS;
    const sec = Math.max(0, Math.floor((next - now) / 1000));
    parts = [
      [String(Math.floor(sec / 86400)), "days"],
      [pad(Math.floor((sec % 86400) / 3600)), "hours"],
      [pad(Math.floor((sec % 3600) / 60)), "min"],
      [pad(sec % 60), "sec"],
    ];
  }

  if (live) return <p className="countdown-live">The meeting is happening now.</p>;

  return (
    <div className="countdown">
      <p>Next meeting in</p>
      <div className="countdown-digits">
        {parts.map(([value, unit]) => (
          <div key={unit}>
            <b>{value}</b> {unit}
          </div>
        ))}
      </div>
    </div>
  );
}
