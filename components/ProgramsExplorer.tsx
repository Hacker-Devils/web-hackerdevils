"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { links, programs, type ProgramId } from "@/lib/content";
import { nextTabIndex } from "@/lib/tabs";
import ProgramIcon from "./ProgramIcon";
import { SectionHead } from "./Bands";
import { TileBody, toneClass } from "./ProgramTile";

const ids = programs.map((p) => p.id);
const isProgramId = (x: string): x is ProgramId => (ids as string[]).includes(x);

/** Tabbed program switcher plus the "All programs" grid. Supports deep links like /programs#codeathon. */
export default function ProgramsExplorer() {
  const [active, setActive] = useState<ProgramId>("practice");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const key = window.location.hash.slice(1);
      if (isProgramId(key)) setActive(key);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  function select(id: ProgramId) {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  function selectAndScroll(id: ProgramId) {
    select(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    detailRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    tabRefs.current[ids.indexOf(id)]?.focus({ preventScroll: true });
  }

  return (
    <>
      <div className="t s12" ref={detailRef} style={{ scrollMarginTop: 110 }}>
        <div className="chips" role="tablist" aria-label="Programs">
          {programs.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              className="chip"
              id={`tab-${p.id}`}
              aria-controls={`panel-${p.id}`}
              aria-selected={active === p.id}
              tabIndex={active === p.id ? 0 : -1}
              onClick={() => select(p.id)}
              onKeyDown={(e) => {
                const j = nextTabIndex(e, i, programs.length);
                if (j === null) return;
                e.preventDefault();
                select(programs[j].id);
                tabRefs.current[j]?.focus();
              }}
            >
              {p.name}
              {p.soon ? <span className="sn">soon</span> : null}
            </button>
          ))}
        </div>

        {programs.map((p) => (
          <div key={p.id} className="pdet" id={`panel-${p.id}`} role="tabpanel" aria-labelledby={`tab-${p.id}`} hidden={active !== p.id}>
            <div className="pmain">
              <ProgramIcon id={p.id} />
              <span className="when2">{p.when}</span>
              <h2>{p.name}</h2>
              <p>{p.long}</p>
              {p.soon ? (
                <Link className="btn o" href="/join">
                  Get notified
                </Link>
              ) : (
                <a className="btn p" href={links.discord}>
                  Join on Discord
                </a>
              )}
            </div>
            <div className="plearn">
              <div className="lab">What you’ll practice</div>
              <ol className="steps">
                {p.learn.map((item, j) => (
                  <li key={item} className="li">
                    <b aria-hidden="true">{j + 1}</b>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      <SectionHead title="All programs" lead="Select a tile to see its details above." />
      {programs.map((p) => (
        <button key={p.id} type="button" className={`t pg s4${toneClass(p)}`} onClick={() => selectAndScroll(p.id)}>
          <TileBody p={p} />
        </button>
      ))}
    </>
  );
}
