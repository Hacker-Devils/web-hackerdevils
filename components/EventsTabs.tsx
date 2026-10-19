"use client";

import { CalendarPlus } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { allDayCalendarUrl, googleCalendarUrl, nextMeeting } from "@/lib/calendar";
import { events, type EventItem } from "@/lib/content";
import { nextTabIndex } from "@/lib/tabs";

type Key = "upcoming" | "past";
const TABS: { key: Key; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

/** Fixed start for the server-rendered weekly link (first Wednesday of Fall 2026), so server and client markup match. */
const WEEKLY_ANCHOR = Date.UTC(2026, 7, 19);

function EventRow({ e, weeklyHref }: { e: EventItem; weeklyHref: string }) {
  const calendarHref = e.calendar === "weekly" ? weeklyHref : e.calendar ? allDayCalendarUrl(e.calendar) : null;
  return (
    <li className="ledger-row">
      <span className="date">
        {e.highlight ? <span className="status-dot live" aria-hidden="true" /> : null}
        {e.date}
      </span>
      <h4>{e.title}</h4>
      <p>{e.detail}</p>
      <div className="ledger-actions">
        {e.status ? <span className="tag status">{e.status}</span> : null}
        {calendarHref ? (
          <a className="tag" href={calendarHref} target="_blank" rel="noreferrer" aria-label={`Add ${e.title} to Google Calendar`}>
            <CalendarPlus size={12} strokeWidth={1.75} aria-hidden="true" />
            Add to calendar
          </a>
        ) : null}
        {e.href ? (
          <a className="tag" href={e.href}>
            {e.action} <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </li>
  );
}

export default function EventsTabs({ label = "Events", note }: { label?: string; note?: string }) {
  const id = useId();
  const [active, setActive] = useState<Key>("upcoming");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [weeklyHref, setWeeklyHref] = useState(() => googleCalendarUrl(nextMeeting(WEEKLY_ANCHOR)));

  useEffect(() => {
    setWeeklyHref(googleCalendarUrl(nextMeeting(Date.now())));
  }, []);

  return (
    <div>
      <div className="ledger-head">
        <div className="seg" role="tablist" aria-label={label}>
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-${tab.key}-tab`}
              aria-controls={`${id}-${tab.key}`}
              aria-selected={active === tab.key}
              tabIndex={active === tab.key ? 0 : -1}
              onClick={() => setActive(tab.key)}
              onKeyDown={(e) => {
                const j = nextTabIndex(e, i, TABS.length);
                if (j === null) return;
                e.preventDefault();
                setActive(TABS[j].key);
                refs.current[j]?.focus();
              }}
            >
              {tab.label} · {String(events[tab.key].length).padStart(2, "0")}
            </button>
          ))}
        </div>
        {note ? <span className="mono muted">{note}</span> : null}
      </div>
      {TABS.map((tab) => (
        <div key={tab.key} id={`${id}-${tab.key}`} role="tabpanel" aria-labelledby={`${id}-${tab.key}-tab`} hidden={active !== tab.key}>
          <ul className="ledger">
            {events[tab.key].map((e) => (
              <EventRow key={e.title + e.date} e={e} weeklyHref={weeklyHref} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
