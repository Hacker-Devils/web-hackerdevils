"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { links, programs, type ProgramId } from "@/lib/content";
import { nextTabIndex } from "@/lib/tabs";
import { DiscordIcon } from "./BrandIcons";
import ProgramIcon from "./ProgramIcon";
import ProgramVisual from "./ProgramVisual";

const ids = programs.map((p) => p.id);
const isProgramId = (x: string): x is ProgramId => (ids as string[]).includes(x);
const num = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Numbered program tabs with a copy + illustration panel.
 * With `deepLink`, the active tab syncs with the URL hash (/events#codeathon) and an index grid renders below.
 */
export default function ProgramsExplorer({ deepLink = false }: { deepLink?: boolean }) {
  const [active, setActive] = useState<ProgramId>("practice");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deepLink) return;
    const fromHash = () => {
      const key = window.location.hash.slice(1);
      if (isProgramId(key)) setActive(key);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [deepLink]);

  function select(id: ProgramId) {
    setActive(id);
    if (deepLink) window.history.replaceState(null, "", `#${id}`);
  }

  function selectAndScroll(id: ProgramId) {
    select(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panelRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    tabRefs.current[ids.indexOf(id)]?.focus({ preventScroll: true });
  }

  const i = ids.indexOf(active);
  const p = programs[i];

  return (
    <>
      <div ref={panelRef} style={{ scrollMarginTop: 100 }}>
        <div className="feature-tabs" role="tablist" aria-label="Programs">
          {programs.map((prog, j) => (
            <button
              key={prog.id}
              ref={(el) => {
                tabRefs.current[j] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${prog.id}`}
              aria-controls="program-panel"
              aria-selected={active === prog.id}
              tabIndex={active === prog.id ? 0 : -1}
              onClick={() => select(prog.id)}
              onKeyDown={(e) => {
                const k = nextTabIndex(e, j, programs.length);
                if (k === null) return;
                e.preventDefault();
                select(programs[k].id);
                tabRefs.current[k]?.focus();
              }}
            >
              <span>{num(j)}</span> {prog.name}
              {prog.soon ? <span className="soon-tag">SOON</span> : null}
            </button>
          ))}
        </div>

        <div className="feature-panel" id="program-panel" role="tabpanel" aria-labelledby={`tab-${p.id}`}>
          <div className="feature-copy">
            <h3>{p.name}</h3>
            <p>{p.long}</p>
            <ul aria-label="What you’ll practice">
              {p.learn.map((item, j) => (
                <li key={item}>
                  <span aria-hidden="true">{num(j)}</span>
                  {item}
                </li>
              ))}
            </ul>
            {p.soon ? (
              <a className="button ghost" href={links.discord}>
                <DiscordIcon className="brand-glyph" />
                Get notified on Discord <span className="arrow" aria-hidden="true">↗</span>
              </a>
            ) : deepLink ? (
              <a className="button primary" href={links.discord}>
                <DiscordIcon className="brand-glyph" />
                Join on Discord <span className="arrow" aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link className="text-link" href={`/events#${p.id}`}>
                More on {p.name.toLowerCase()} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          <ProgramVisual id={p.id} />
        </div>
      </div>

      {deepLink ? (
        <div className="cells" style={{ marginTop: 64 }}>
          {programs.map((prog, j) => (
            <button key={prog.id} type="button" className="cell" onClick={() => selectAndScroll(prog.id)}>
              <span className="cell-top mono">
                <span>{num(j)}</span>
                <span className={prog.soon ? "soon-tag" : undefined}>{prog.when}</span>
              </span>
              <ProgramIcon id={prog.id} />
              <h3>{prog.name}</h3>
              <p>{prog.short}</p>
              <span className="cell-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
