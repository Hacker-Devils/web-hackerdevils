"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { boardFrames } from "@/content/people";

const ADVANCE_MS = 5000;
/** How long the gallery waits after someone scrolls, swipes or drags it. */
const HOLD_MS = 8000;

/**
 * A sideways gallery, one frame per group. It's a real scroller, so touch, trackpad and arrow keys work natively.
 * Auto-advance waits on hover, keyboard focus and recent interaction, and when off screen. It's off for reduced motion.
 */
export function BoardGallery() {
  const track = useRef<HTMLDivElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  /** Where a smooth scroll is heading, so a second arrow click mid-scroll counts from there. */
  const target = useRef<number | null>(null);
  const hovering = useRef(false);
  const focused = useRef(false);
  const onScreen = useRef(false);
  const holdUntil = useRef(0);
  const reducedMotion = useRef(false);
  const drag = useRef<{ x: number; left: number } | null>(null);

  /** Scroll position that centers each frame in the track. */
  function stops() {
    const el = track.current;
    if (!el) return [];
    return [...el.children].map((child) => {
      const frame = child as HTMLElement;
      return frame.offsetLeft - (el.clientWidth - frame.offsetWidth) / 2;
    });
  }

  function nearest() {
    const left = track.current?.scrollLeft ?? 0;
    return stops().reduce((best, stop, i, all) => (Math.abs(stop - left) < Math.abs(all[best] - left) ? i : best), 0);
  }

  function goTo(index: number) {
    target.current = index;
    track.current?.scrollTo({ left: stops()[index], behavior: reducedMotion.current ? "auto" : "smooth" });
  }

  const hold = () => {
    holdUntil.current = Date.now() + HOLD_MS;
  };

  /** The user took over by hand, so forget any scroll in progress and wait before moving again. */
  const takeOver = () => {
    target.current = null;
    hold();
  };

  function step(by: number) {
    hold();
    const from = target.current ?? activeRef.current;
    goTo((from + by + boardFrames.length) % boardFrames.length);
  }

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      onScreen.current = entry.isIntersecting;
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // On phones the tabs are one sideways row: keep the current one centred in it.
  // Only the row scrolls, never the page, so autoplay can't pull the reader around.
  useEffect(() => {
    const row = tabs.current;
    const tab = row?.children[active] as HTMLElement | undefined;
    if (!row || !tab || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2, behavior: reducedMotion.current ? "auto" : "smooth" });
  }, [active]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) return;
    const id = window.setInterval(() => {
      const blocked = hovering.current || focused.current || !onScreen.current || document.hidden || Date.now() < holdUntil.current;
      if (!blocked) goTo((activeRef.current + 1) % boardFrames.length);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, []);

  function onScroll() {
    const index = nearest();
    activeRef.current = index;
    setActive(index);
    if (index === target.current) target.current = null;
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    takeOver();
    if (e.pointerType !== "mouse" || e.button !== 0 || !track.current) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft };
    track.current.setPointerCapture(e.pointerId);
    track.current.classList.add("is-dragging");
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (drag.current && track.current) track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  }

  function endDrag() {
    if (!drag.current) return;
    drag.current = null;
    track.current?.classList.remove("is-dragging");
    hold();
    goTo(nearest());
  }

  return (
    <div
      className="gallery"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onFocus={(e) => (focused.current = e.target.matches(":focus-visible"))}
      onBlur={() => (focused.current = false)}
    >
      <div className="gallery-stage">
        <button className="gallery-arrow gallery-arrow-prev" type="button" aria-label="Previous group" onClick={() => step(-1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 3 5 8l5 5" />
          </svg>
        </button>

        <div
          className="gallery-track"
          ref={track}
          tabIndex={0}
          role="region"
          aria-label="Fall 2026 board, scrolls sideways"
          onScroll={onScroll}
          onWheel={takeOver}
          onTouchStart={takeOver}
          onKeyDown={takeOver}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {boardFrames.map((frame, i) => (
            <section key={frame.title} className={i === active ? "gallery-frame is-active" : "gallery-frame"} aria-label={frame.title}>
              <h3>{frame.title}</h3>
              <ul>
                {frame.people.map((person) => (
                  <li key={person.name}>
                    <Image className="portrait" src={person.photo} alt={`Portrait of ${person.name}`} width={220} height={220} sizes="220px" loading="eager" draggable={false} />
                    <h4>{person.name}</h4>
                    <p>{person.title}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <button className="gallery-arrow gallery-arrow-next" type="button" aria-label="Next group" onClick={() => step(1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </button>
      </div>

      <div className="gallery-tabs" ref={tabs}>
        {boardFrames.map((frame, i) => (
          <button
            key={frame.label}
            type="button"
            aria-current={i === active ? "true" : undefined}
            onClick={() => {
              hold();
              goTo(i);
            }}
          >
            {frame.label}
          </button>
        ))}
      </div>
    </div>
  );
}
