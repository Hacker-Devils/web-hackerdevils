"use client";

import { useEffect, useRef } from "react";
import type { UpcomingEvent } from "@/content/events";
import { googleCalendarUrl, icsPath } from "@/lib/calendar";

/** A small menu: Google Calendar opens in a new tab, everything else gets an .ics file. */
export function AddToCalendar({ event }: { event: UpcomingEvent }) {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function close(e: Event) {
      const el = menu.current;
      if (!el?.open) return;
      if (e instanceof KeyboardEvent) {
        if (e.key !== "Escape") return;
        el.open = false;
        el.querySelector("summary")?.focus();
      } else if (!el.contains(e.target as Node)) {
        el.open = false;
      }
    }
    document.addEventListener("keydown", close);
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", close);
    };
  }, []);

  return (
    <details className="calendar-menu" ref={menu}>
      <summary className="button button--secondary button--small" aria-label={`Add ${event.title} to calendar`}>
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <rect x="1.75" y="3" width="12.5" height="11.25" rx="2" />
          <path d="M1.75 6.75h12.5M5.25 1.25V4.5M10.75 1.25V4.5" strokeLinecap="round" />
        </svg>
        Add to calendar
      </summary>
      <div className="calendar-options">
        <a href={googleCalendarUrl(event)} target="_blank" rel="noreferrer">
          Google Calendar
        </a>
        <a href={icsPath(event)} download>
          Apple or Outlook (.ics)
        </a>
      </div>
    </details>
  );
}
