# web-hackerdevils

Official website of **Hacker Devils (HKD)**, the competitive coding and interview-prep club at Arizona State University.

Built with Next.js (App Router), React and TypeScript. There's no UI framework: the styling is one hand-written stylesheet based on the Hacker Devils design tokens, laid out as a technical "spec sheet" (hairline rules, a 12-column paper grid, numbered sections). It uses Sora and IBM Plex Mono through `next/font` and Lucide icons.

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
  events/             Programs (tabs + grid), upcoming/past events, countdown, host-with-us
  resources/          Meeting archive by track
  join/               Three steps, FAQ, contact form
  icon.svg            Favicon
components/           Header, nav, theme toggle, session demo, program tabs + visuals, countdown, FAQ, forms…
lib/content.ts        ALL site copy: programs, events, team, tracks, FAQ, links
lib/demo.ts           Problems played by the home page session demo
```

**To change copy, edit `lib/content.ts`.** For example:

- **New event:** add it to `events.upcoming` (or move it to `events.past`).
- **New team member:** add a row to `team`. The role (`Officer`, `Advisor` or `Team`) sets the avatar colour.
- **Meeting materials:** give a `materials` entry an `href` and its chip becomes a link:
  ```ts
  { label: "Slides", href: "https://docs.google.com/presentation/d/…" }
  ```
- **Launching a "coming soon" track:** remove `soon: true` and add its `sessions`.
- **This week's demo problem:** edit `lib/demo.ts`. Keep `code` under about 14 lines so it fits the panel.

## Behaviour

- **Theme:** dark by default, or follows the OS if no choice is saved. The toggle is saved in `localStorage` (`hkd-theme`) and applied before first paint, so there's no flash.
- **Countdown:** counts down to the next Wednesday 6 PM Arizona time (Arizona doesn't observe DST, so this is Thursday 01:00 UTC). It shows "Happening now" during the meeting hour.
- **Deep links:** `/events#codeathon` and `/resources#gpu` open that tab. The home page program links use these. The old `/programs` and `/interviews` URLs redirect permanently to `/events` (see `next.config.ts`).
- **Contact form:** with no endpoint set, it just shows the "Thanks, we'll be in touch" state. To actually collect submissions, point it at a form backend that accepts `POST` with `FormData` (Formspree, Getform, etc.), in `.env.local` or your host's env settings:
  ```
  NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
  ```
- **Accessibility:** WAI-ARIA tabs with arrow-key support, a FAQ accordion with `aria-expanded`, visible focus rings, a skip link, and `prefers-reduced-motion` support. Text meets 4.5:1 contrast in both themes.

## Deploy

**Vercel (simplest):** import the repo at vercel.com/new and keep the defaults.

**GitHub Pages / any static host:** add `output: "export"` to `next.config.ts` and run `npm run build`. The site is written to `out/`, ready to upload. Static export does not run the `redirects()` in `next.config.ts`, so set up `/programs` and `/interviews` → `/events` redirects on the host instead.

## Design rules

- Headlines are thin (Sora 300) with tight tracking. The last phrase of a headline can take the accent colour (`<span className="accent">`).
- Labels, indexes, dates and metadata are IBM Plex Mono, 11px, uppercase. Each section opens with a `§ 0N / NAME` index rule (`SectionIndex`).
- Structure comes from 1px hairlines (`--line`, `--rule`), not filled cards. Panels that look like tools (demo, countdown, forms) use the terminal frame.
- Use maroon and gold with purpose: maroon for primary buttons and the accent, gold for one or two small signals per screen. When maroon or gold is used as text, use the `--devil` and `--gold-ink` tokens instead.
- No blue or purple, no gradients on text, no emoji.
