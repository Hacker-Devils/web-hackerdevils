import { Button } from "@/components/ui";
import type { EventItem } from "@/content/events";
import { allDayCalendarUrl } from "@/lib/calendar";
import { WeeklyCalendarButton } from "./WeeklyCalendarButton";

function EventActions({ event }: { event: EventItem }) {
  const { calendar, link, status } = event;
  if (!calendar && !link && !status) return null;
  return (
    <div className="event-actions">
      {status ? <span className="event-status">{status}</span> : null}
      {calendar === "weekly" ? <WeeklyCalendarButton size="small" label="Add to calendar" /> : null}
      {calendar && calendar !== "weekly" ? (
        <Button href={allDayCalendarUrl(calendar)} variant="secondary" size="small">
          Add to calendar
        </Button>
      ) : null}
      {link ? (
        <Button href={link.href} variant="secondary" size="small">
          {link.label}
        </Button>
      ) : null}
    </div>
  );
}

export function EventList({ events }: { events: readonly EventItem[] }) {
  return (
    <ul className="event-list">
      {events.map((event) => (
        <li key={event.title + event.date}>
          <p className="event-date">{event.date}</p>
          <div>
            <h3>{event.title}</h3>
            <p>{event.detail}</p>
          </div>
          <EventActions event={event} />
        </li>
      ))}
    </ul>
  );
}
