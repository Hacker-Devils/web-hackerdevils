"use client";

import { useEffect, useRef, useState } from "react";
import { links, tracks } from "@/lib/content";
import { nextTabIndex } from "@/lib/tabs";
import { DiscordIcon } from "./BrandIcons";

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
    <section aria-label="Resource library">
      <div className="feature-tabs" role="tablist" aria-label="Tracks">
        {tracks.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
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
            <span>{String(i + 1).padStart(2, "0")}</span> {t.name}
            {t.soon ? <span className="soon-tag">SOON</span> : null}
          </button>
        ))}
      </div>

      {tracks.map((t) => (
        <div key={t.id} id={`panel-${t.id}`} role="tabpanel" aria-labelledby={`tab-${t.id}`} hidden={active !== t.id}>
          <p className="track-blurb">{t.blurb}</p>
          {t.soon ? (
            <div className="empty">
              <span className="mono">Status · in the works</span>
              <h4>{t.name} workshops are on the way.</h4>
              <p>Slides, recordings and starter code will appear here after the first session.</p>
              <a className="button ghost" href={links.discord}>
                <DiscordIcon className="brand-glyph" />
                Get notified on Discord <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          ) : (
            <ul className="files">
              {t.sessions.map((s, j) => (
                <li key={s.title} className="file-row">
                  <span className="mono">S.{String(j + 1).padStart(2, "0")}</span>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <div className="chips">
                    {s.materials.map((m) =>
                      m.href ? (
                        <a key={m.label} className="tag" href={m.href} target="_blank" rel="noreferrer">
                          {m.label} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span key={m.label} className="tag">
                          {m.label}
                        </span>
                      ),
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
