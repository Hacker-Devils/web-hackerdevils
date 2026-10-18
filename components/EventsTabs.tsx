"use client";

import { useId, useRef, useState } from "react";
import { events, type EventItem } from "@/lib/content";
import { nextTabIndex } from "@/lib/tabs";

type Key = "upcoming" | "past";
const TABS: { key: Key; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

function EventRow({ e }: { e: EventItem }) {
  return (
    <li className="ei">
      <div className={`date${e.highlight ? " hl" : ""}`}>
        <b>{e.day}</b>
        <span>{e.month}</span>
      </div>
      <div>
        <h4>{e.title}</h4>
        <p>{e.detail}</p>
      </div>
      {e.href ? (
        <a className="pill" href={e.href}>
          {e.action}
        </a>
      ) : (
        <span className="pill">{e.action}</span>
      )}
    </li>
  );
}

export default function EventsTabs({
  title = "Events",
  className = "",
  note,
}: {
  title?: string;
  className?: string;
  note?: string;
}) {
  const id = useId();
  const [active, setActive] = useState<Key>("upcoming");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <section className={`t ${className}`} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="tog" role="tablist" aria-label={title}>
        {TABS.map((tab, i) => (
          <button
            key={tab.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-${tab.key}-tab`}
            aria-controls={`${id}-${tab.key}`}
            aria-selected={active === tab.key}
            tabIndex={active === tab.key ? 0 : -1}
            onClick={() => setActive(tab.key)}
            onKeyDown={(e) => {
              const j = nextTabIndex(e, i, TABS.length);
              if (j === null) return;
              e.preventDefault();
              setActive(TABS[j].key);
              refs.current[j]?.focus();
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {TABS.map((tab) => (
        <div key={tab.key} id={`${id}-${tab.key}`} role="tabpanel" aria-labelledby={`${id}-${tab.key}-tab`} hidden={active !== tab.key}>
          <ul className="events-list">
            {events[tab.key].map((e) => (
              <EventRow key={e.title + e.month} e={e} />
            ))}
          </ul>
          {tab.key === "upcoming" && note ? <p className="note">{note}</p> : null}
        </div>
      ))}
    </section>
  );
}
