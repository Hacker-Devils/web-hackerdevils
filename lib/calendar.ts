import { links } from "./content";

/**
 * Weekly meeting: Wednesdays 6–7 PM in Arizona.
 * Arizona stays on MST (UTC-7) all year, so that is always Thursday 01:00–02:00 UTC.
 */
export const MEETING_UTC_DAY = 4;
export const MEETING_UTC_HOUR = 1;
export const MEETING_MS = 60 * 60 * 1000;
const DAY_MS = 864e5;

/** Start of the next weekly meeting after `now` (epoch ms). */
export function nextMeeting(now: number) {
  const n = new Date(now);
  let t = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), MEETING_UTC_HOUR, 0, 0);
  while (new Date(t).getUTCDay() !== MEETING_UTC_DAY || t <= now) t += DAY_MS;
  return t;
}

/** 20261022T010000Z */
const stamp = (ms: number) => new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/**
 * Google Calendar "create event" link for the weekly meeting, repeating every Wednesday.
 * `ctz` pins the event to Arizona time so it never drifts with daylight saving elsewhere.
 */
export function googleCalendarUrl(start: number) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Hacker Devils · Weekly Meeting",
    dates: `${stamp(start)}/${stamp(start + MEETING_MS)}`,
    ctz: "America/Phoenix",
    recur: "RRULE:FREQ=WEEKLY;BYDAY=WE",
    location: "ASU Tempe campus",
    details: `Weekly LeetCode practice in Easy and Medium groups, with a solution review. Free pizza. Bring a laptop.\n\nRoom details and announcements: ${links.discord}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

const ymd = (iso: string, addDays = 0) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + addDays);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
};

/** Google Calendar link for an all-day event spanning `start`–`end` (inclusive, YYYY-MM-DD). */
export function allDayCalendarUrl({ title, start, end, details }: { title: string; start: string; end: string; details: string }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    // Google treats the end date of an all-day range as exclusive.
    dates: `${ymd(start)}/${ymd(end, 1)}`,
    ctz: "America/Phoenix",
    location: "ASU Tempe campus",
    details: `${details}\n\nDetails and registration: ${links.discord}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
