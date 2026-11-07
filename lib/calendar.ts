import { upcomingEvents, type UpcomingEvent } from "@/content/events";
import { links } from "@/content/site";

/** Meetings run 6 to 7 PM in Arizona, which stays on UTC-7 all year. */
export const MEETING_MS = 60 * 60 * 1000;
export const meetingStart = (date: string) => Date.parse(`${date}T18:00:00-07:00`);

export type NextMeeting = { date: string; start: number; sessions: UpcomingEvent[] };

/** The earliest meeting that hasn't finished by `now`, with everything running at that hour. */
export function nextMeeting(now: number): NextMeeting | null {
  const dates = upcomingEvents.flatMap((event) => event.dates ?? []).sort();
  const date = dates.find((d) => meetingStart(d) + MEETING_MS > now);
  if (!date) return null;
  return { date, start: meetingStart(date), sessions: upcomingEvents.filter((event) => event.dates?.includes(date)) };
}

/** Whether an event has anything left to attend. Events with no date stay listed until they get one. */
export function isUpcoming(event: UpcomingEvent, now: number) {
  if (event.dates) return event.dates.some((d) => meetingStart(d) + MEETING_MS > now);
  if (event.session) return Date.parse(`${event.session.date}T${event.session.end}:00-07:00`) > now;
  return true;
}

export const hasCalendar = (event: UpcomingEvent) => Boolean(event.dates?.length || event.session);

/** First occurrence of an event, in epoch ms. */
function firstSpan(event: UpcomingEvent) {
  if (event.session) {
    const { date, start, end } = event.session;
    return { start: Date.parse(`${date}T${start}:00-07:00`), end: Date.parse(`${date}T${end}:00-07:00`) };
  }
  if (!event.dates?.length) return null;
  const start = meetingStart(event.dates[0]);
  return { start, end: start + MEETING_MS };
}

/** 20261119T010000Z */
const stamp = (ms: number) => new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const summary = (event: UpcomingEvent) => `Hacker Devils · ${event.title}`;
const place = (event: UpcomingEvent) => (event.room ? `${event.room}, ASU Tempe campus` : "ASU Tempe campus");
const description = (event: UpcomingEvent) =>
  `${event.detail}${event.dates ? " Free pizza. Bring a laptop." : ""}\n\nAnnouncements: ${links.discord}`;

/** Times stay in UTC, so the repeat rule can't name a weekday: 6 PM Wednesday is already Thursday in UTC. */
const repeatRule = (event: UpcomingEvent) =>
  event.dates && event.dates.length > 1 ? `RRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=${event.dates.length}` : null;

export function googleCalendarUrl(event: UpcomingEvent) {
  const params = new URLSearchParams({ action: "TEMPLATE", text: summary(event), ctz: "America/Phoenix", location: place(event), details: description(event) });
  const span = firstSpan(event);
  if (span) {
    params.set("dates", `${stamp(span.start)}/${stamp(span.end)}`);
    const rule = repeatRule(event);
    if (rule) params.set("recur", rule);
  }
  return `https://calendar.google.com/calendar/render?${params}`;
}

export const icsPath = (event: UpcomingEvent) => `/calendar/${event.id}.ics`;

const icsText = (text: string) => text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

/** iCalendar wraps long lines at 75 characters, marking each continuation with a leading space. */
const fold = (line: string) => line.match(/.{1,73}/g)?.join("\r\n ") ?? line;

/** An iCalendar file for Apple Calendar, Outlook and anything else that opens one. */
export function icsFile(event: UpcomingEvent) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Hacker Devils//Events//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `UID:${event.id}@hackerdevils`];
  const span = firstSpan(event);
  if (span) {
    lines.push(`DTSTAMP:${stamp(span.start)}`, `DTSTART:${stamp(span.start)}`, `DTEND:${stamp(span.end)}`);
    const rule = repeatRule(event);
    if (rule) lines.push(rule);
  }
  lines.push(`SUMMARY:${icsText(summary(event))}`, `LOCATION:${icsText(place(event))}`, `DESCRIPTION:${icsText(description(event))}`, "END:VEVENT", "END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
