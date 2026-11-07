"use client";

import { useEffect, useState } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button } from "@/components/ui";
import { links } from "@/content/site";
import { nextMeeting } from "@/lib/calendar";
import { AddToCalendar } from "./AddToCalendar";

const pad = (x: number) => String(x).padStart(2, "0");
const longDate = (date: string) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });

/** The hero's focal point. Prerenders the first listed meeting, then the browser corrects it and starts the clock. */
export function NextMeetingCard() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const meeting = nextMeeting(now ?? 0);

  if (!meeting) {
    return (
      <aside className="next-card" aria-labelledby="next-title">
        <h2 id="next-title">This semester’s meetings are done</h2>
        <p className="next-empty">Next semester’s dates go out on Discord first.</p>
        <Button href={links.discord} variant="secondary" size="small" icon={<DiscordIcon />}>
          Get the dates on Discord
        </Button>
      </aside>
    );
  }

  const left = now === null ? null : Math.max(0, Math.floor((meeting.start - now) / 1000));
  const parts: [string, string][] =
    left === null
      ? [["–", "days"], ["––", "hours"], ["––", "min"], ["––", "sec"]]
      : [
          [String(Math.floor(left / 86400)), "days"],
          [pad(Math.floor((left % 86400) / 3600)), "hours"],
          [pad(Math.floor((left % 3600) / 60)), "min"],
          [pad(left % 60), "sec"],
        ];

  return (
    <aside className="next-card" aria-labelledby="next-title">
      <h2 id="next-title">Next meeting</h2>
      <p className="next-date">{longDate(meeting.date)}</p>
      <p className="next-time">6 to 7 PM Arizona time</p>
      {left === 0 ? (
        <p className="next-live">Happening now</p>
      ) : (
        <div className="countdown" role="timer" aria-label="Time until the next meeting">
          {parts.map(([value, unit]) => (
            <div key={unit}>
              <b>{value}</b>
              {unit}
            </div>
          ))}
        </div>
      )}
      <ul className="next-sessions">
        {meeting.sessions.map((session) => (
          <li key={session.id}>
            <div>
              <strong>{session.title}</strong>
              <span>{session.room}</span>
            </div>
            <AddToCalendar event={session} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
