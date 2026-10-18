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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/interviews", label: "Interviews" },
  { href: "/resources", label: "Resources" },
  { href: "/join", label: "Join" },
] as const;

export const stats = [
  { value: "932", label: "members" },
  { value: "46", label: "events hosted" },
  { value: "5", label: "learning tracks" },
  { value: "1 hr", label: "every Wednesday" },
] as const;

export type ProgramId = "practice" | "codeathon" | "interviews" | "system-design" | "gpu" | "inference-backend";
export type ProgramTone = "plain" | "gold" | "tint" | "soon";

export type Program = {
  id: ProgramId;
  name: string;
  when: string;
  short: string;
  long: string;
  learn: string[];
  tone: ProgramTone;
  soon?: boolean;
};

export const programs: Program[] = [
  {
    id: "practice",
    name: "Weekly practice",
    when: "Every Wednesday",
    tone: "plain",
    short: "Interview problems in Easy and Medium groups, with a solution review every session.",
    long: "Every Wednesday, officers bring a problem set modeled on real online assessments. You join the Easy or Medium group, solve in small teams with officers on hand, and finish with a full walkthrough of solutions, complexity and edge cases.",
    learn: ["Arrays, strings and hashing", "Two pointers and sliding window", "Trees, graphs and BFS/DFS", "Dynamic programming patterns"],
  },
  {
    id: "codeathon",
    name: "Code-A-Thons",
    when: "Each semester",
    tone: "gold",
    short: "Timed contests that recreate the pressure of a real online assessment.",
    long: "Our signature contests run for about three hours. Solve a ladder of problems against the clock, solo or in teams, with a live leaderboard. It is the closest thing to a real OA you can do with friends.",
    learn: ["Working under time pressure", "Choosing which problem to attempt", "Debugging fast", "Reading constraints carefully"],
  },
  {
    id: "interviews",
    name: "Mock interviews",
    when: "Ongoing",
    tone: "tint",
    short: "AI-assisted practice on demand, plus live interviews with peers and officers.",
    long: "Practice any time with an AI interviewer, then put it to the test in live 45-minute interviews with members and officers, followed by an honest debrief.",
    learn: ["Thinking out loud", "Clarifying requirements", "Behavioral storytelling", "Handling hints and follow-ups"],
  },
  {
    id: "system-design",
    name: "System design",
    when: "Workshop series",
    tone: "plain",
    short: "Design real systems end to end, from requirements to scaling trade-offs.",
    long: "Each workshop takes one real system, such as a URL shortener, a chat app or a news feed, and designs it end to end with a repeatable interview framework.",
    learn: ["Requirements and estimation", "APIs and data models", "Caching, queues and load balancing", "Trade-off discussions"],
  },
  {
    id: "gpu",
    name: "GPU programming",
    when: "Workshop series",
    tone: "plain",
    short: "CUDA from first principles: threads, memory and the kernels behind ML.",
    long: "Learn to think in parallel. We start with your first CUDA kernel and work up to shared-memory tiling and the optimizations that power modern machine learning.",
    learn: ["Threads, blocks and grids", "The memory hierarchy", "Coalescing and shared memory", "Profiling kernels"],
  },
  {
    id: "inference-backend",
    name: "Inference & Backend",
    when: "Coming soon",
    tone: "soon",
    soon: true,
    short: "Upcoming workshops on serving models and building production services.",
    long: "Two new workshop series are in the works: serving ML models in production (batching, quantization, KV caches, latency) and backend development (APIs, databases, auth, queues and deployment).",
    learn: ["Model serving and batching", "Quantization basics", "REST and gRPC APIs", "Databases and deployment"],
  },
];

export type EventItem = {
  day: string;
  month: string;
  title: string;
  detail: string;
  action: string;
  href?: string;
  highlight?: boolean;
};

export const events: { upcoming: EventItem[]; past: EventItem[] } = {
  upcoming: [
    { day: "Wed", month: "Weekly", title: "Weekly Meeting", detail: "Interview practice · 6–7 PM · Tempe", action: "RSVP", href: links.discord, highlight: true },
    { day: "TBA", month: "Fall", title: "Fall Code-A-Thon", detail: "Timed contest", action: "Details soon" },
    { day: "TBA", month: "Fall", title: "System Design Workshop", detail: "Workshop series", action: "Details soon" },
    { day: "TBA", month: "Fall", title: "Mock Interview Night", detail: "With partner organizations", action: "Details soon" },
  ],
  past: [
    { day: "15", month: "Apr", title: "WiCS × Hacker Devils Mock OA", detail: "With Women in Computer Science · 2026", action: "Recap" },
    { day: "11", month: "Apr", title: "Hacker Devils Code-A-Thon", detail: "Timed contest · 2026", action: "Recap" },
    { day: "25", month: "Oct", title: "Code-A-Thon", detail: "Saturday, 11 AM – 2 PM · 2025", action: "Recap" },
    { day: "—", month: "Feb", title: "Mock Interviews", detail: "With the Software Developers Association · 2025", action: "Recap" },
  ],
};

export const wednesday = [
  { time: "18:00", title: "Problem drop", body: "Officers introduce the week’s problem or design prompt." },
  { time: "18:05", title: "Pick a level", body: "Join the Easy or Medium group." },
  { time: "18:10", title: "Solve together", body: "Work in small groups, with help when you’re stuck." },
  { time: "18:40", title: "Review", body: "Walk through solutions, complexity and edge cases." },
] as const;

export const timeline = [
  { when: "Day one", title: "Founded", body: "Started by Shreeshiv Patel and fellow students in the Fulton Schools." },
  { when: "Months later", title: "200+ members", body: "The community grows fast with faculty support from Steven Osburn." },
  { when: "2025", title: "Career focus", body: "The club shifts from hackathons to interview readiness and adds mock interviews." },
  { when: "2026", title: "932 members", body: "Code-A-Thons, a mock OA with WiCS and 46 events hosted." },
] as const;

export type Role = "Officer" | "Advisor" | "Team";
export const team: { name: string; role: Role }[] = [
  { name: "Saanvi Kakde", role: "Officer" },
  { name: "Harsh Davda", role: "Officer" },
  { name: "Sriharsha Silasagaram", role: "Officer" },
  { name: "Adil Ali", role: "Advisor" },
  { name: "Shashwat Raj", role: "Team" },
  { name: "Brayden Sutherland", role: "Team" },
  { name: "Dean Richardson", role: "Team" },
  { name: "Sohum Sheth", role: "Team" },
  { name: "Andrew Laymon", role: "Team" },
  { name: "Ashley Cyril", role: "Team" },
  { name: "Mark Bestwina", role: "Team" },
  { name: "David Fisher", role: "Team" },
];

export const partners = [
  { short: "WiCS", name: "Women in Computer Science", role: "Mock online assessments" },
  { short: "SDA", name: "Software Developers Association", role: "Mock interviews" },
  { short: "FSE", name: "Ira A. Fulton Schools of Engineering", role: "Faculty support" },
] as const;

export const quote = {
  text: "For anyone new to coding: practice, practice, practice.",
  by: "Prathyush Vasa, former president",
} as const;

export const interviewFormats = {
  ai: {
    tag: "On demand",
    name: "AI-assisted",
    desc: "An AI interviewer asks follow-up questions, keeps time and gives written feedback on your approach, code and communication.",
    points: ["Available any time", "Algorithms and system design", "Instant written feedback", "Unlimited reps"],
    steps: ["Pick a track and difficulty", "Talk through your approach as you code", "Get a scored write-up with next steps"],
  },
  peer: {
    tag: "Live",
    name: "Peer & officer",
    desc: "Live 45-minute interviews run like the real thing with members and officers, followed by an honest debrief.",
    points: ["Real-time pressure", "Behavioral and technical rounds", "Held with WiCS and SDA", "Debrief after every session"],
    steps: ["Request a slot below", "Get matched with an interviewer", "Interview, then debrief together"],
  },
} as const;

export type Material = { label: "Slides" | "Notes" | "Problems" | "Code"; href?: string };
export type Session = { title: string; desc: string; materials: Material[] };
export type Track = { id: string; name: string; blurb: string; soon?: boolean; sessions: Session[] };

/** Add `href` to a material to turn its chip into a link (Google Slides, Drive, GitHub, …). */
export const tracks: Track[] = [
  {
    id: "algorithms",
    name: "Algorithms",
    blurb: "Weekly LeetCode-style sets in Easy and Medium tiers.",
    sessions: [
      { title: "Graphs: BFS, DFS and Number of Islands", desc: "Traversal patterns that show up in most OAs.", materials: [{ label: "Slides" }, { label: "Notes" }, { label: "Problems" }] },
      { title: "Sliding window and two pointers", desc: "Turning O(n²) scans into a single pass.", materials: [{ label: "Slides" }, { label: "Problems" }] },
      { title: "Hash maps in interview problems", desc: "When to trade memory for time.", materials: [{ label: "Slides" }, { label: "Notes" }] },
      { title: "Binary search beyond sorted arrays", desc: "Searching on the answer.", materials: [{ label: "Slides" }, { label: "Problems" }] },
    ],
  },
  {
    id: "system-design",
    name: "System Design",
    blurb: "One real system per workshop, designed end to end.",
    sessions: [
      { title: "Design a URL shortener", desc: "Hashing, storage and read-heavy scaling.", materials: [{ label: "Slides" }, { label: "Notes" }] },
      { title: "Caching strategies and CDNs", desc: "Where to cache and how to invalidate.", materials: [{ label: "Slides" }, { label: "Notes" }] },
      { title: "Load balancing", desc: "From one server to many.", materials: [{ label: "Slides" }] },
      { title: "The interview framework", desc: "Requirements to trade-offs in 45 minutes.", materials: [{ label: "Slides" }] },
    ],
  },
  {
    id: "gpu",
    name: "GPU Programming",
    blurb: "CUDA from first principles.",
    sessions: [
      { title: "Shared memory and tiled matrix multiply", desc: "The optimization every GPU interview asks about.", materials: [{ label: "Slides" }, { label: "Code" }] },
      { title: "The CUDA memory hierarchy", desc: "Registers, shared and global memory.", materials: [{ label: "Slides" }, { label: "Notes" }] },
      { title: "Your first kernel", desc: "Threads, blocks and grids.", materials: [{ label: "Slides" }, { label: "Code" }] },
    ],
  },
  { id: "inference", name: "Inference", soon: true, blurb: "Serving models in production.", sessions: [] },
  { id: "backend", name: "Backend", soon: true, blurb: "APIs, databases and deployment.", sessions: [] },
];

export const faq = [
  { q: "Do I need competitive programming experience?", a: "No. The Easy group is built for people who have never done an interview problem. Move up to Medium when you’re ready." },
  { q: "I’m not a CS major. Can I join?", a: "Yes. Hacker Devils is open to every ASU student regardless of major or year." },
  { q: "How do I become a member?", a: "Join our Discord and register on Sun Devil Central. Then show up on Wednesday." },
  { q: "What should I bring to a meeting?", a: "A laptop with any language you’re comfortable in. Python, Java and C++ are the most common." },
  { q: "How do mock interviews work?", a: "Practice with the AI interviewer any time, or request a live 45-minute interview with a peer or officer on the Mock interviews page." },
  { q: "Can my organization collaborate with Hacker Devils?", a: "Yes. Email hckrdevils@gmail.com with your idea. We regularly co-host with WiCS and SDA." },
] as const;
