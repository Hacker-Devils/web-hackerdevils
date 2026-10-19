/**
 * All site copy lives here so officers can update it without touching layout code.
 */

export const links = {
  discord: "https://discord.com/invite/bn3ax9hcpr",
  instagram: "https://www.instagram.com/asuhackerdevils/",
  linkedin: "https://www.linkedin.com/in/hacker-devils/",
  sunDevilCentral: "https://sundevilcentral.eoss.asu.edu/hackerdevils/",
  email: "hckrdevils@gmail.com",
} as const;

/** How each social account reads on the site. */
export const handles = {
  discord: "discord.gg/bn3ax9hcpr",
  instagram: "@asuhackerdevils",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/join", label: "Join" },
] as const;

export const stats = [
  { value: "932", label: "members" },
  { value: "46", label: "events hosted" },
  { value: "3", label: "learning tracks" },
  { value: "1 hr", label: "every Wednesday" },
] as const;

export type ProgramId = "practice" | "system-design" | "gpu";

export type Program = {
  id: ProgramId;
  name: string;
  when: string;
  short: string;
  long: string;
  learn: string[];
  soon?: boolean;
};

export const programs: Program[] = [
  {
    id: "practice",
    name: "LeetCode",
    when: "Every Wednesday",
    short: "LeetCode problems in Easy and Medium groups, the occasional Hard, and a solution review every session.",
    long: "Every Wednesday, officers bring a LeetCode problem set modeled on real online assessments. Join the Easy or Medium group, take a swing at the occasional Hard, solve in small teams with officers on hand, and finish with a full walkthrough of solutions, complexity and edge cases.",
    learn: ["Arrays, strings and hashing", "Two pointers and sliding window", "Trees, graphs and BFS/DFS", "Dynamic programming patterns"],
  },
  {
    id: "system-design",
    name: "System design",
    when: "Every other week",
    short: "Design real systems end to end, from requirements to scaling trade-offs.",
    long: "Every other week we take one real system, such as a URL shortener, a chat app or a news feed, and design it end to end with a repeatable interview framework.",
    learn: ["Requirements and estimation", "APIs and data models", "Caching, queues and load balancing", "Trade-off discussions"],
  },
  {
    id: "gpu",
    name: "GPU programming",
    when: "Recurring sessions",
    short: "CUDA from first principles: threads, memory and the kernels behind ML.",
    long: "Learn to think in parallel. Sessions start with your first CUDA kernel and work up to shared-memory tiling and the optimizations that power modern machine learning.",
    learn: ["Threads, blocks and grids", "The memory hierarchy", "Coalescing and shared memory", "Profiling kernels"],
  },
];

/** All-day range for "Add to calendar" (YYYY-MM-DD, inclusive). */
export type CalendarRange = { title: string; start: string; end: string; details: string };

export type EventItem = {
  date: string;
  title: string;
  detail: string;
  /** Status pill, e.g. "Registration opens soon". */
  status?: string;
  /** "weekly" adds the recurring Wednesday meeting; a range adds an all-day event. */
  calendar?: "weekly" | CalendarRange;
  href?: string;
  action?: string;
  highlight?: boolean;
};

export const events: { upcoming: EventItem[]; past: EventItem[] } = {
  upcoming: [
    { date: "Wednesdays", title: "LeetCode practice", detail: "Easy, Medium, sometimes Hard · 6–7 PM · free pizza", calendar: "weekly", highlight: true },
    { date: "Biweekly", title: "System design", detail: "Every other week · room on Discord", href: links.discord, action: "Discord" },
    { date: "Recurring", title: "GPU programming", detail: "CUDA sessions · dates on Discord", href: links.discord, action: "Discord" },
    {
      date: "Nov 1–7",
      title: "Mock Interview Week",
      detail: "With partner organizations",
      status: "Registration opens soon",
      calendar: { title: "Hacker Devils · Mock Interview Week", start: "2026-11-01", end: "2026-11-07", details: "Mock interview week. Registration opens soon." },
    },
    {
      date: "Nov 15–21",
      title: "Code-A-Thon",
      detail: "Week before Thanksgiving · exact date TBA",
      status: "Registration opens soon",
      calendar: { title: "Hacker Devils · Code-A-Thon (date TBA)", start: "2026-11-15", end: "2026-11-21", details: "Code-A-Thon, the week before Thanksgiving. Exact date announced on Discord. Registration opens soon." },
    },
    { date: "TBA", title: "Collab workshops", detail: "Backend engineering and inference, with partner orgs", href: links.discord, action: "Join Discord" },
  ],
  past: [
    { date: "Apr 15, 2026", title: "WiCS × Hacker Devils Mock OA", detail: "With Women in Computer Science" },
    { date: "Apr 11, 2026", title: "Hacker Devils Code-A-Thon", detail: "Timed contest" },
    { date: "Oct 25, 2025", title: "Code-A-Thon", detail: "Saturday, 11 AM – 2 PM" },
    { date: "Feb 2025", title: "Mock Interviews", detail: "With the Software Developers Association" },
  ],
};

export const wednesday = [
  { time: "18:00", title: "Problem drop", body: "Grab a slice. Officers introduce the week’s problem or design prompt." },
  { time: "18:05", title: "Pick a level", body: "Easy or Medium, with a Hard now and then." },
  { time: "18:10", title: "Solve together", body: "Work in small groups, with help when you’re stuck." },
  { time: "18:40", title: "Review", body: "Walk through solutions, complexity and edge cases." },
] as const;

/** Order here is display order. `tier` sets the avatar colour. */
export type Tier = "advisor" | "lead" | "team";
export const team: { name: string; title: string; tier: Tier }[] = [
  { name: "Adil Ali", title: "Faculty Advisor", tier: "advisor" },
  { name: "Saanvi Kakde", title: "President", tier: "lead" },
  { name: "Shashwat Raj", title: "Vice President", tier: "lead" },
  { name: "Harsh Davda", title: "Officer", tier: "team" },
  { name: "Sriharsha Silasagaram", title: "Officer", tier: "team" },
  { name: "Brayden Sutherland", title: "Team", tier: "team" },
  { name: "Dean Richardson", title: "Team", tier: "team" },
  { name: "Sohum Sheth", title: "Team", tier: "team" },
  { name: "Andrew Laymon", title: "Team", tier: "team" },
  { name: "Ashley Cyril", title: "Team", tier: "team" },
  { name: "Mark Bestwina", title: "Team", tier: "team" },
  { name: "David Fisher", title: "Team", tier: "team" },
];

export const partners = [
  { short: "WiCS", name: "Women in Computer Science", role: "Mock online assessments" },
  { short: "SoDA", name: "Software Developers Association", role: "Mock interviews" },
  { short: "FSE", name: "Ira A. Fulton Schools of Engineering", role: "Faculty support" },
] as const;

export const faq = [
  { q: "Do I need competitive programming experience?", a: "No. The Easy group is built for people who have never done an interview problem. Move up to Medium when you’re ready." },
  { q: "I’m not a CS major. Can I join?", a: "Yes. Hacker Devils is open to every ASU student regardless of major or year." },
  { q: "How do I become a member?", a: "Join our Discord and register on Sun Devil Central. Then show up on Wednesday." },
  { q: "What should I bring to a meeting?", a: "A laptop with any language you’re comfortable in. Python, Java and C++ are the most common." },
  { q: "Is there food?", a: "Yes. There’s free pizza at every meeting." },
  { q: "Can my organization collaborate with Hacker Devils?", a: "Yes. Email hckrdevils@gmail.com with your idea. We regularly co-host with WiCS and SoDA." },
] as const;

/** Label + value strip under the home page demo. */
export const heroSpec = [
  { label: "When", value: "Wednesdays, 6–7 PM" },
  { label: "Where", value: "Tempe campus, ASU" },
  { label: "Levels", value: "Easy, Medium, sometimes Hard" },
  { label: "Cost", value: "Free, pizza included" },
] as const;

export const meetingSpec = [
  { label: "Day", value: "Every Wednesday" },
  { label: "Time", value: "6–7 PM Arizona time" },
  { label: "Place", value: "Tempe campus · room posted on Discord" },
  { label: "Bring", value: "A laptop and any language you like" },
  { label: "Food", value: "Free pizza, every meeting" },
] as const;
