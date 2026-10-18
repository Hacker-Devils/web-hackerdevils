"use client";

import { useEffect, useRef, useState } from "react";
import { links, tracks } from "@/lib/content";
import { nextTabIndex } from "@/lib/tabs";

/** Track tabs + session cards. Supports deep links like /resources#gpu. */
export default function ResourceLibrary() {
  const [active, setActive] = useState(tracks[0].id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      const key = window.location.hash.slice(1);
      if (tracks.some((t) => t.id === key)) setActive(key);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  function select(id: string) {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <section className="t s12" aria-label="Resource library">
      <div className="chips" role="tablist" aria-label="Tracks">
        {tracks.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            className={`chip${t.soon ? " s" : ""}`}
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => select(t.id)}
            onKeyDown={(e) => {
              const j = nextTabIndex(e, i, tracks.length);
              if (j === null) return;
              e.preventDefault();
              select(tracks[j].id);
              refs.current[j]?.focus();
            }}
          >
            <i aria-hidden="true" />
            {t.name}
            {t.soon ? " · soon" : ""}
          </button>
        ))}
      </div>

      {tracks.map((t) => (
        <div key={t.id} id={`panel-${t.id}`} role="tabpanel" aria-labelledby={`tab-${t.id}`} hidden={active !== t.id}>
          <p className="blurb">{t.blurb}</p>
          <div className="cards">
            {t.soon ? (
              <div className="empty">
                <h4>{t.name} workshops are on the way.</h4>
                <p className="lab">Slides, recordings and starter code will appear here after the first session.</p>
                <a className="btn o" href={links.discord}>
                  Get notified on Discord
                </a>
              </div>
            ) : (
              t.sessions.map((s, j) => (
                <article key={s.title} className="sc2">
                  <div className="tr">
                    <i aria-hidden="true" />
                    {t.name} · Session {String(j + 1).padStart(2, "0")}
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <div className="mat">
                    {s.materials.map((m) =>
                      m.href ? (
                        <a key={m.label} href={m.href} target="_blank" rel="noreferrer">
                          {m.label}
                        </a>
                      ) : (
                        <span key={m.label}>{m.label}</span>
                      ),
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
