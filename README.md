# web-hackerdevils

Official website of **Hacker Devils (HKD)**, the competitive coding and interview-prep club at Arizona State University.

Built with Next.js (App Router), React and TypeScript. There's no UI framework: the styling is one hand-written stylesheet based on the Hacker Devils design tokens. It uses Geist through `next/font` and Lucide icons.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (every page is prerendered as static HTML)
npm start        # serve the production build
```

Requires Node 20.9 or newer.

## Where things live

```
app/
  layout.tsx          Fonts, metadata, header/footer, no-flash theme script
  globals.css         Design tokens (dark + light) and every style on the site
  page.tsx            Home
  about/              Who we are, story, how Wednesdays work, team, partners
  programs/           Tabbed program switcher + all-programs grid
  events/             Upcoming/Past events, countdown, host-with-us
  interviews/         AI vs peer formats + request form
  resources/          Meeting archive by track
  join/               Three steps, FAQ, contact form
  icon.svg            Favicon
components/           Header, nav, theme toggle, countdown, tabs, FAQ, forms…
lib/content.ts        ALL site copy: programs, events, team, tracks, FAQ, links
```

**To change copy, edit `lib/content.ts`.** For example:

- **New event:** add it to `events.upcoming` (or move it to `events.past`).
- **New team member:** add a row to `team`. The role (`Officer`, `Advisor` or `Team`) sets the avatar colour.
- **Meeting materials:** give a `materials` entry an `href` and its chip becomes a link:
  ```ts
  { label: "Slides", href: "https://docs.google.com/presentation/d/…" }
  ```
- **Launching a "coming soon" track:** remove `soon: true` and add its `sessions`.

## Behaviour

- **Theme:** dark by default, or follows the OS if no choice is saved. The toggle is saved in `localStorage` (`hkd-theme`) and applied before first paint, so there's no flash.
- **Countdown:** counts down to the next Wednesday 6 PM Arizona time (Arizona doesn't observe DST, so this is Thursday 01:00 UTC). It shows "Happening now" during the meeting hour.
- **Deep links:** `/programs#codeathon` and `/resources#gpu` open that tab. The home page tiles and chips use these.
- **Forms:** with no endpoint set, they just show the "Thanks, we'll be in touch" state. To actually collect submissions, set either or both of these to a form backend that accepts `POST` with `FormData` (Formspree, Getform, etc.), in `.env.local` or your host's env settings:
  ```
  NEXT_PUBLIC_INTERVIEW_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
  NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/yyyyyyy
  ```
- **Accessibility:** WAI-ARIA tabs with arrow-key support, a FAQ accordion with `aria-expanded`, visible focus rings, a skip link, and `prefers-reduced-motion` support. Text meets 4.5:1 contrast in both themes.

## Deploy

**Vercel (simplest):** import the repo at vercel.com/new and keep the defaults.

**GitHub Pages / any static host:** add `output: "export"` to `next.config.ts` and run `npm run build`. The site is written to `out/`, ready to upload.

## Design rules (from the Hacker Devils design system)

- Headlines are thin: 200 for page titles, 300 for section headings. Nothing is heavier than 500.
- Use maroon and gold with purpose, one or two gold accents per screen. When maroon or gold is used as text, use the `--devil` and `--gold-ink` tokens instead.
- No blue or purple, no gradients on text, no emoji, and no eyebrow labels above headings.
