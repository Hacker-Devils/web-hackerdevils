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
    <li className="ledger-row">
      <span className="date">
        {e.highlight ? <span className="status-dot live" aria-hidden="true" /> : null}
        {e.day} · {e.month}
      </span>
      <h4>{e.title}</h4>
      <p>{e.detail}</p>
      {e.href ? (
        <a className="tag" href={e.href}>
          {e.action} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="tag">{e.action}</span>
      )}
    </li>
  );
}

export default function EventsTabs({ label = "Events", note }: { label?: string; note?: string }) {
  const id = useId();
  const [active, setActive] = useState<Key>("upcoming");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <div>
      <div className="ledger-head">
        <div className="seg" role="tablist" aria-label={label}>
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
              {tab.label} · {String(events[tab.key].length).padStart(2, "0")}
            </button>
          ))}
        </div>
        {note ? <span className="mono muted">{note}</span> : null}
      </div>
      {TABS.map((tab) => (
        <div key={tab.key} id={`${id}-${tab.key}`} role="tabpanel" aria-labelledby={`${id}-${tab.key}-tab`} hidden={active !== tab.key}>
          <ul className="ledger">
            {events[tab.key].map((e) => (
              <EventRow key={e.title + e.month} e={e} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
