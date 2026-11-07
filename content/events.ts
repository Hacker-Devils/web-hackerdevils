import { links } from "./site";

export type UpcomingEvent = {
  id: string;
  title: string;
  detail: string;
  /** Wednesdays this runs, 6 to 7 PM Arizona time. Must be 14 days apart: the calendar repeats them biweekly. */
  dates?: readonly string[];
  /** A one-off event outside the Wednesday hour. Times are Arizona time. */
  session?: { date: string; start: string; end: string; label: string };
  /** Shown when there are no recurring dates. */
  dateLabel?: string;
  room?: string;
  link?: { href: string; label: string };
};

export const codeAThon: UpcomingEvent = {
  id: "code-a-thon",
  title: "Code-A-Thon",
  detail: "A coding competition on HackerRank, in person. Beginner and advanced tracks, with a chance to win GTA 6.",
  session: { date: "2026-11-22", start: "13:00", end: "16:00", label: "1 to 4 PM" },
  dateLabel: "Nov 22",
  room: "PSF 173",
};

export const codeAThonFacts = [
  { label: "When", value: "Sunday, November 22, 1 to 4 PM" },
  { label: "Where", value: "PSF 173, in person" },
  { label: "Format", value: "Coding competition on HackerRank" },
  { label: "Tracks", value: "Beginner and advanced" },
] as const;

export const upcomingEvents: readonly UpcomingEvent[] = [
  {
    id: "easy-section",
    title: "Easy section",
    detail: "Beginner-friendly LeetCode, solved together. Runs alongside system design.",
    dates: ["2026-11-18", "2026-12-02"],
    room: "WLSN 114",
  },
  {
    id: "system-design",
    title: "System design",
    detail: "One real system, designed end to end. Runs alongside the Easy section.",
    dates: ["2026-11-18", "2026-12-02"],
    room: "WLSN 253",
  },
  codeAThon,
  {
    id: "medium-section",
    title: "Medium section",
    detail: "Medium-level LeetCode, in the weeks between Easy and system design.",
    dates: ["2026-11-25"],
    room: "WLSN 114",
  },
  {
    id: "gpu-programming",
    title: "GPU programming",
    detail: "CUDA sessions, starting soon. Dates go out on Discord first.",
    dateLabel: "Coming soon",
    link: { href: links.discord, label: "Get notified" },
  },
];

export type Recap = {
  date: string;
  title: string;
  summary: string;
  slides?: { href: string; pages: number; size: string };
  link?: { href: string; label: string };
};

export const recaps: readonly { semester: string; events: readonly Recap[] }[] = [
  {
    semester: "Fall 2026",
    events: [
      { date: "Nov 1 to 7", title: "Mock Interview Week", summary: "Officers ran technical mock interviews over Zoom." },
      {
        date: "Nov 4",
        title: "AI Inference and Post-Training Workshop",
        summary: "With the AI Society. How trained models get deployed and optimized, with a hands-on inference activity.",
      },
      {
        date: "Oct 28",
        title: "Functions and recursion",
        summary: "Medium section, meeting 3.",
        slides: { href: "/slides/fall-2026-medium-3-functions-and-recursion.pdf", pages: 55, size: "3.4 MB" },
      },
      {
        date: "Oct 21",
        title: "System Design 101, Part 2",
        summary: "Building a system one box at a time, starting from what happens when you open an app.",
        slides: { href: "/slides/fall-2026-system-design-101-part-2.pdf", pages: 29, size: "2.5 MB" },
      },
      {
        date: "Oct 21",
        title: "Sliding windows",
        summary: "Easy section, meeting 3.",
        slides: { href: "/slides/fall-2026-easy-3-sliding-windows.pdf", pages: 20, size: "3.1 MB" },
      },
      {
        date: "Oct 14",
        title: "Time complexity and Big-O",
        summary: "Medium section, meeting 2.",
        slides: { href: "/slides/fall-2026-medium-2-time-complexity.pdf", pages: 78, size: "8.0 MB" },
      },
      { date: "Oct 7", title: "System Design 101, Part 1", summary: "The basics of system design, with worked examples." },
      {
        date: "Sep 30",
        title: "Greedy algorithms",
        summary: "Medium section, meeting 1.",
        slides: { href: "/slides/fall-2026-medium-1-greedy-algorithms.pdf", pages: 66, size: "7.2 MB" },
      },
      {
        date: "Sep 25",
        title: "API Scaling Workshop",
        summary: "At the Ada Lovelace Summit hosted by WiCS and SoDA. Scale one small API toward a million requests per second.",
        link: { href: "https://github.com/darthvader58/api-scaling-workshop", label: "Workshop repo" },
      },
      { date: "Sep 23", title: "First Easy section", summary: "Beginner-friendly LeetCode problems, solved together." },
      { date: "Sep 16", title: "Fall kickoff", summary: "Our introductory meeting and a look at the semester ahead." },
    ],
  },
  {
    semester: "Spring 2026",
    events: [
      { date: "Apr 15", title: "Mock Online Assessment", summary: "With Women in Computer Science. A timed assessment with coding and multiple choice questions." },
      {
        date: "Apr 11",
        title: "Code-A-Thon",
        summary: "A timed contest with easy and medium problems. The archive is still open.",
        link: { href: "https://www.hackerrank.com/hkd-april-codathon", label: "Contest archive" },
      },
      {
        date: "Mar 25",
        title: "Intro to dynamic programming",
        summary: "Medium section, meeting 5.",
        slides: { href: "/slides/spring-2026-medium-5-dynamic-programming.pdf", pages: 62, size: "2.6 MB" },
      },
      { date: "Mar 21", title: "Mock interviews", summary: "30-minute online technical interviews." },
      {
        date: "Feb 11",
        title: "Greedy algorithms",
        summary: "Medium section, meeting 2.",
        slides: { href: "/slides/spring-2026-medium-2-greedy-algorithms.pdf", pages: 117, size: "9.0 MB" },
      },
      {
        date: "Jan 28",
        title: "Prefix sums",
        summary: "Medium section, meeting 1.",
        slides: { href: "/slides/spring-2026-medium-1-prefix-sums.pdf", pages: 60, size: "5.2 MB" },
      },
      {
        date: "Jan 28",
        title: "Easy section",
        summary: "Easy section, meeting 2.",
        slides: { href: "/slides/spring-2026-easy-january-28.pdf", pages: 22, size: "0.9 MB" },
      },
    ],
  },
  {
    semester: "Fall 2025",
    events: [
      { date: "Nov 20", title: "Dell Technologies mixer", summary: "Meet Dell interns and learn about open roles." },
      { date: "Nov 19", title: "Hash maps", summary: "Medium section, in partnership with Mathematics Tomorrow." },
      { date: "Oct 25", title: "Code-A-Thon", summary: "A timed contest with easy and medium problems." },
      { date: "Oct 4", title: "Mock interviews", summary: "Online technical interviews with officers." },
      {
        date: "Sep 17",
        title: "Easy section",
        summary: "Easy section, meeting 2.",
        slides: { href: "/slides/fall-2025-easy-september-17.pdf", pages: 21, size: "1.4 MB" },
      },
    ],
  },
  {
    semester: "Spring 2025",
    events: [
      { date: "Mar 1", title: "SoDA Code Challenge", summary: "Co-sponsored with the Software Developers Association." },
      {
        date: "Feb 12",
        title: "Easy section",
        summary: "Easy section, meeting 2.",
        slides: { href: "/slides/spring-2025-easy-february-12.pdf", pages: 24, size: "1.5 MB" },
      },
      { date: "Feb 6", title: "ICPC info session", summary: "With ACM, on preparing for the International Collegiate Programming Contest." },
    ],
  },
];
