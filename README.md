# web-hackerdevils

Official website of **Hacker Devils (HKD)**, the competitive coding and technical interview prep club at Arizona State University.

Built with Next.js (App Router), React and TypeScript. Every page is prerendered as static HTML.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck
```

Requires Node 20.9 or newer.

## How the code is organized

```
app/                 Routes. Pages only compose sections.
  globals.css        The only stylesheet on the site.
components/
  ui/                Generic building blocks: Button, Section, headings, CodeBlock, FactList, Disclosure.
  layout/            Site header, footer, navigation, theme toggle.
  brand/             Logo, social icons, pizza drawing.
  sections/          Page sections built from ui/ and content/.
content/             All copy and data, one file per topic.
lib/calendar.ts      Next-meeting logic, Google Calendar links and .ics files.
public/brand/        Original logo file.
public/slides/       Meeting slides linked from event recaps.
```

Each layer only depends on the ones below it:

```
page → section → ui component → class in globals.css
                → content/ data
```

Three rules keep it that way:

1. **Pages have no styling.** A file in `app/` never uses `className` or `style`. It imports sections and puts them in order.
2. **All styles live in `app/globals.css`.** Components only apply class names, and there are no inline styles. Colours are tokens at the top of that file.
3. **All copy lives in `content/`** unless it is a section's own heading.

### Adding things

- **A page:** create `app/<name>/page.tsx` that composes existing sections, then add it to `nav` in `content/site.ts`.
- **A section:** add a component in `components/sections/`, built from `Section`, `SectionHeading` and the other UI pieces.
- **A colour band:** pass `tone` to `Section` (`plain`, `soft`, `maroon` or `gold`). A tone redefines the colour tokens, so everything inside adapts without extra CSS.

### Editing content

| To change | Edit |
|---|---|
| Upcoming and past events | `content/events.ts` |
| Advisor, officers and team | `content/people.ts` |
| LeetCode problems on the site | `content/problems.ts` |
| Program descriptions | `content/programs.ts` |
| Meeting details and agenda | `content/meeting.ts` |
| FAQ | `content/faq.ts` |
| Links and handles | `content/site.ts` |

An event with a `calendar` range gets an "Add to calendar" button, and `status` shows text such as "Registration opens soon":

```ts
{
  date: "Nov 1 to 7",
  title: "Mock Interview Week",
  detail: "With partner organizations.",
  status: "Details on Discord",
  calendar: { title: "Hacker Devils · Mock Interview Week", start: "2026-11-01", end: "2026-11-07", details: "Mock interview week." },
}
```

Run any new problem's code before adding it. The examples shown on the site should be real results.

## Behaviour

- **Theme:** follows the OS until a visitor uses the toggle, then the choice is saved in `localStorage` (`hkd-theme`). It is applied before first paint, so there is no flash.
- **Countdown and weekly calendar link:** Wednesday 6 PM Arizona time. Arizona has no daylight saving, so that is always Thursday 01:00 UTC.
- **Redirects:** `/programs` and `/interviews` redirect permanently to `/events` (see `next.config.ts`).
- **Accessibility:** native controls, visible focus, a skip link, 44px touch targets, and AA contrast in both themes. Motion stops under `prefers-reduced-motion`.

## Design rules

- Colour is ASU maroon and gold from the logo, plus neutrals.
- The gold slash from the logo's `</>` is the site's motif.
- Sora for type. IBM Plex Mono only for code and for digits that must align.
- Flat surfaces with hierarchy from size and colour bands, not shadows or background grids.
- Only show numbers and claims with a real source.

## Deploy

**Vercel:** import the repo and keep the defaults. The `main` branch is what deploys.

**Static hosts:** add `output: "export"` to `next.config.ts` and run `npm run build`. The site is written to `out/`. Static export does not run the redirects, so set those up on the host.
