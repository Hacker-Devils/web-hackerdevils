# Claude Design prompt: Hacker Devils website (Arena + Bento)

Paste everything below the line into Claude Design. For best results, also attach `arena.html` and `bento.html` from this folder as reference prototypes. If the output gets cut off, run it twice: once with "Build ONLY Concept B · Arena" and once with "Build ONLY Concept C · Bento".

---

Design a complete, multi-page, clickable website prototype for **Hacker Devils (HKD)**, the competitive coding and interview-prep club at Arizona State University. Build it in **two separate visual concepts, Arena and Bento**. Both use the same content, the same seven pages and the same design tokens; they differ only in layout and personality. Every page must work in **both a dark and a light theme**, with a sun/moon toggle in the nav.

The site is **informational first**: who we are, what we run, events, team and how to join. The Resources section is a lightweight archive of meeting slides and notes that links out. It is not a tutorial app.

## Design tokens (use exactly)

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| bg | #0b0a0c | #faf8f5 | page background |
| surface | #141216 | #ffffff | cards, panels |
| surface-2 | #1d1a20 | #f1ede8 | nested surfaces, chips |
| line | #2e2a33 | #e0dad2 | hairline dividers |
| line-strong | #5a5361 | #8f877f | control borders |
| ink | #f4f1ec | #17141a | primary text |
| ink-muted | #a59fab | #5d5763 | secondary text |
| maroon | #8c1d40 | #8c1d40 | ASU maroon: brand blocks, primary buttons |
| devil | #ff5c8a | #8c1d40 | maroon as text or links (contrast-safe) |
| gold | #ffc627 | #ffc627 | ASU gold: accent fills, countdown, badges |
| gold-ink | #ffc627 | #7a5300 | gold as text (contrast-safe) |
| ink-on-maroon | #ffffff | #ffffff | text on maroon |
| ink-on-gold | #17141a | #17141a | text on gold |
| accepted | #4ade80 | #15803d | success or "live" dots only |

**Type:** Geist (all UI text) and Geist Mono (dates, times, numbers, small nav labels), both from Google Fonts. Headlines are **thin**: weight 200 for hero and page titles, 300 for section headings, with tight negative letter-spacing (-0.04em to -0.06em). Body text is 400 and buttons 500. Nothing is heavier than 500.

**Rules:**
- No decorative label clutter: no `// comment` captions, no eyebrow tags above every heading, no source credits, no tickers. A section is a heading plus its content.
- No blue or purple, no gradients on text, no emoji.
- Maroon and gold are used with purpose: one or two gold accents per screen.
- Text contrast is at least 4.5:1 in both themes, with visible focus rings.
- The logo is set in type (no image yet).

## Content (real; use verbatim where possible)

- **Tagline:** "The premier competitive coding organization at Arizona State University." We prepare Sun Devils for the online assessments and technical interviews that decide internships and jobs.
- **Who we are:** "Classes teach you how to program. Interviews test whether you can solve an unseen problem in 45 minutes with someone watching." Hacker Devils closes that gap. It's a Fulton Schools club open to every ASU student, built around weekly practice, timed contests, mock interviews and technical workshops.
- **Stats:** 932 members · 46 events hosted · 5 learning tracks · 1 hr every Wednesday.
- **Weekly meeting:** Wednesdays 6–7 PM, Tempe campus. Open to all majors, no experience required. Show a live countdown to the next Wednesday at 6 PM (Arizona time).
- **How Wednesdays work:** 18:00 Problem drop → 18:05 Pick a level (Easy or Medium) → 18:10 Solve together → 18:40 Review.
- **Programs (6):**
  1. Weekly practice (every Wednesday): interview problems in Easy and Medium groups with a solution review.
  2. Code-A-Thons (each semester): timed contests that recreate online-assessment pressure, with a live leaderboard.
  3. Mock interviews (ongoing): AI-assisted on demand, plus live peer and officer interviews.
  4. System design (workshop series): design real systems end to end.
  5. GPU programming (workshop series): CUDA from first principles.
  6. Inference & Backend (**coming soon**): serving models in production, and building backend services.
  Each program has a longer description and four "What you'll practice" bullets.
- **Mock interviews:**
  - **AI-assisted** (on demand): an AI interviewer asks follow-ups, keeps time and gives written feedback. Steps: pick a track and difficulty, talk through your approach, get a scored write-up.
  - **Peer & officer** (live): 45-minute interviews and a debrief, held with WiCS and SDA. Steps: request a slot, get matched, interview and debrief.
- **Events:**
  - Upcoming: Weekly Meeting (every Wed, RSVP), Fall Code-A-Thon (TBA), System Design Workshop (TBA), Mock Interview Night (TBA).
  - Past: Apr 15 2026 WiCS × Hacker Devils Mock OA; Apr 11 2026 Hacker Devils Code-A-Thon; Oct 25 2025 Code-A-Thon (Sat 11 AM–2 PM); Feb 2025 Mock Interviews with SDA.
- **Our story:** Day one, founded by Shreeshiv Patel and fellow students → months later, 200+ members with faculty support from Steven Osburn → 2025, a shift to a career focus → 2026, 932 members and 46 events.
- **Team:**
  - Officers: Saanvi Kakde, Harsh Davda, Sriharsha Silasagaram.
  - Advisor: Adil Ali.
  - Team: Shashwat Raj, Brayden Sutherland, Dean Richardson, Sohum Sheth, Andrew Laymon, Ashley Cyril, Mark Bestwina, David Fisher.
  - Use initials avatars: officers on maroon, advisor on gold.
- **Partners:** Women in Computer Science (mock online assessments), Software Developers Association (mock interviews), Ira A. Fulton Schools of Engineering (faculty support).
- **Resources tracks:**
  - Algorithms: Graphs: BFS, DFS and Number of Islands; Sliding window and two pointers; Hash maps in interview problems; Binary search beyond sorted arrays.
  - System Design: Design a URL shortener; Caching strategies and CDNs; Load balancing; The interview framework.
  - GPU Programming: Shared memory and tiled matrix multiply; The CUDA memory hierarchy; Your first kernel.
  - Inference and Backend: coming soon (empty state).
  - Each session shows material chips: Slides, Notes, Problems, Code.
- **FAQ:**
  - Do I need experience? No.
  - Not a CS major? Yes, you can join.
  - How do I become a member? Join Discord and register on Sun Devil Central.
  - What should I bring? A laptop.
  - How do mock interviews work?
  - Can my org collaborate? Email us.
- **Quote:** "For anyone new to coding: practice, practice, practice." (Prathyush Vasa, former president)
- **Links:** Discord, Instagram @asuhackerdevils, LinkedIn, Sun Devil Central, hckrdevils@gmail.com.

## Pages (build all seven in each concept, linked from the nav)

1. **Home:**
   - Hero with the countdown and "open to all" note
   - Stats
   - Programs grid (6)
   - Events with Upcoming/Past tabs
   - Mock interviews overview
   - Compact Resources strip with track chips and "Open library"
   - Join call-to-action
2. **About:**
   - Page title
   - Who we are, with stats
   - Our story timeline (4 steps)
   - How Wednesdays work (4 steps)
   - Team grid (12 people)
   - Partners
3. **Programs:**
   - Page title
   - A tabbed switcher across the 6 programs; each tab shows the long description, a call-to-action and the "What you'll practice" list
   - All-programs grid
4. **Events:** page title, Upcoming/Past tabs with full lists, and a "Host with us" panel.
5. **Mock interviews:** page title, the two formats side by side with "How it works" steps, and a request form (name, ASU email, format, focus, availability).
6. **Resources:** page title, track tabs, session cards or rows with material chips, and empty states for the coming-soon tracks.
7. **Join:** three steps (Join Discord → Register on Sun Devil Central → Show up Wednesday), an accordion FAQ, and a contact form.

Shared on every page: a nav (logo, the 7 links with the active state, the theme toggle, a Join button) and a footer (logo and one-line description; Club, Practice and Connect link columns; copyright). Every page must be fully responsive down to 390px, with no horizontal scrolling.

## Concept B · Arena (contest scoreboard)

- **Shape:** square corners everywhere, 1px ruled grids with shared borders (cells, not floating cards), and a thin ruler strip with tick marks at the very top.
- **Type:** uppercase thin display headings (Home hero "HACKER / DEVILS" at about 150px with the second line in `devil`; page titles at about 128px uppercase). Nav links are uppercase Geist Mono with a gold underline on the active link.
- **Home hero:** a two-column split. The left has the wordmark, lead text and buttons. The right is a 360px column with a big **gold countdown block** (diagonal stripe texture in one corner, mono digits), stacked above two info cells (meeting time, open to all).
- **Signature elements:**
  - A six-cell Programs grid where the Code-A-Thons cell is solid maroon.
  - An **"AI vs PEER" face-off**: two halves (maroon left, plain right) with a round gold "VS" badge on the center seam.
  - Ranked rows with large mono numbers for the resources archive.
  - Segmented tab bars where the active tab is inverted (ink background).
- **Buttons:** square, uppercase, letter-spaced. Primary is gold, secondary is an outline.
- **Bottom call-to-action:** a full-width gold band reading "YOUR MOVE." with a multi-column footer below it.

## Concept C · Bento (soft, app-like tiles)

- **Shape:** a 12-column grid of rounded tiles (28px radius) with 16px gaps. Pills and chips are fully rounded. The sticky nav is a floating pill bar with a blurred background.
- **Home hero:** a large maroon tile (8 columns) with the thin headline "Get interview ready, together.", a dot-grid circle and a rotated gold rounded square as decoration. Beside it, a gold countdown tile and an "Open to every ASU student" tile.
- **Signature elements:**
  - Tinted tiles (maroon at about 10% over surface for interview tiles, a dashed border for coming-soon items).
  - Program tiles with an icon chip in the top-left and a cadence pill in the top-right.
  - Calendar-style date badges in the event list.
  - A 2×2 stat cluster with the member count on maroon.
  - A gold quote tile, and an inverted (ink) join band at the bottom.
- **Page headers:** a wide surface-2 tile with a thin page title at about 96px.
- **Mock interviews page:** the AI tile is solid maroon with gold step numbers. The Peer tile is plain.
- **Buttons:** pill-shaped. Primary is maroon, accent is gold, secondary is an outline.

## Interactions (prototype level)

- Theme toggle (persisted).
- Nav routing between the 7 pages.
- Upcoming/Past event tabs.
- Program and resource track tabs.
- FAQ accordion.
- Live countdown.
- Forms show a "Thanks, we'll be in touch" state on submit.
- Hover lifts or tints on cards.
- Respect `prefers-reduced-motion`.
