"use client";

import { useEffect, useState } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button } from "@/components/ui";
import { upcomingEvents, type UpcomingEvent } from "@/content/events";
import { links } from "@/content/site";
import { hasCalendar, isUpcoming, meetingStart, MEETING_MS } from "@/lib/calendar";
import { AddToCalendar } from "./AddToCalendar";

const shortDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

function dateText(event: UpcomingEvent, now: number) {
  const left = event.dates?.filter((d) => meetingStart(d) + MEETING_MS > now) ?? [];
  if (!left.length) return { main: event.dateLabel ?? "", more: null };
  return { main: shortDate(left[0]), more: left.length > 1 ? `then ${left.slice(1).map(shortDate).join(", ")}` : null };
}

/** Prerenders every listed event, then the browser drops anything that has already happened. */
export function UpcomingList() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  const events = upcomingEvents.filter((event) => isUpcoming(event, now));

  if (!events.length) {
    return (
      <div className="panel-empty">
        <p>Nothing is scheduled right now. New dates go out on Discord first.</p>
        <Button href={links.discord} variant="secondary" size="small" icon={<DiscordIcon />}>
          Get the dates on Discord
        </Button>
      </div>
    );
  }

  return (
    <ul className="event-list">
      {events.map((event) => {
        const { main, more } = dateText(event, now);
        return (
          <li key={event.id}>
            <p className="event-date">
              {main}
              {more ? <span>{more}</span> : null}
            </p>
            <div className="event-body">
              <h3>{event.title}</h3>
              <p>{[event.dates ? "6 to 7 PM" : event.session?.label, event.room, event.detail].filter(Boolean).join(" · ")}</p>
            </div>
            <div className="event-actions">
              {hasCalendar(event) ? <AddToCalendar event={event} /> : null}
              {event.link ? (
                <Button href={event.link.href} variant="secondary" size="small">
                  {event.link.label}
                </Button>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
