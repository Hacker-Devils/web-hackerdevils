import { links } from "./site";

/** All-day range for "Add to calendar" (YYYY-MM-DD, inclusive). */
export type CalendarRange = { title: string; start: string; end: string; details: string };

export type EventItem = {
  date: string;
  title: string;
  detail: string;
  /** Real status shown as text, e.g. "Registration opens soon". */
  status?: string;
  /** "weekly" adds the recurring Wednesday meeting; a range adds an all-day event. */
  calendar?: "weekly" | CalendarRange;
  link?: { href: string; label: string };
};

export const upcomingEvents: EventItem[] = [
  { date: "Wednesdays", title: "LeetCode practice", detail: "Easy, Medium, sometimes Hard. 6 to 7 PM, free pizza.", calendar: "weekly" },
  { date: "Biweekly", title: "System design", detail: "Every other week, room on Discord.", link: { href: links.discord, label: "Find the room" } },
  { date: "Soon", title: "GPU programming", detail: "CUDA sessions.", status: "Coming soon", link: { href: links.discord, label: "Get notified" } },
  {
    date: "Nov 1 to 7",
    title: "Mock Interview Week",
    detail: "With partner organizations.",
    status: "Details on Discord",
    calendar: { title: "Hacker Devils · Mock Interview Week", start: "2026-11-01", end: "2026-11-07", details: "Mock interview week." },
  },
  {
    date: "Nov 15 to 21",
    title: "Code-A-Thon",
    detail: "Week before Thanksgiving, exact date to be announced.",
    status: "Registration opens soon",
    calendar: {
      title: "Hacker Devils · Code-A-Thon (date TBA)",
      start: "2026-11-15",
      end: "2026-11-21",
      details: "Code-A-Thon, the week before Thanksgiving. Exact date announced on Discord. Registration opens soon.",
    },
  },
  { date: "TBA", title: "Collab workshops", detail: "Backend engineering and inference, with partner orgs.", link: { href: links.discord, label: "Join Discord for dates" } },
];

export const pastEvents: EventItem[] = [
  { date: "Apr 15, 2026", title: "WiCS × Hacker Devils Mock OA", detail: "With Women in Computer Science." },
  { date: "Apr 11, 2026", title: "Hacker Devils Code-A-Thon", detail: "Timed contest." },
  { date: "Oct 25, 2025", title: "Code-A-Thon", detail: "Saturday, 11 AM to 2 PM." },
  { date: "Feb 2025", title: "Mock Interviews", detail: "With the Software Developers Association." },
];
