"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Line drawing of a pizza with one slice pulled out, drawn on like a plotter when it scrolls into view.
 * Every drawn stroke has pathLength="1", so one dash animation draws circles, arcs and lines at the same pace.
 * Groups marked .pz-ink are drawn; .pz-guide (the construction layer) fades in instead.
 */

const C = 240;
const R = 188; // outer crust
const RI = 168; // inner crust line
const SLICE = 45;
const A1 = -112.5; // pulled slice spans A1..A2 (top of the pizza)
const A2 = -67.5;
const PULL = 30;

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number, dy = 0) => [C + r * Math.cos(rad(deg)), C + r * Math.sin(rad(deg)) + dy] as const;
const f = (n: number) => n.toFixed(1);
const P = (r: number, deg: number, dy = 0) => pt(r, deg, dy).map(f).join(" ");

/** Arc from a → b clockwise at radius r. */
const arc = (r: number, a: number, b: number, dy = 0) => `M${P(r, a, dy)}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${P(r, b, dy)}`;

const centers = Array.from({ length: 7 }, (_, k) => A2 + SLICE / 2 + SLICE * k);
const cuts = Array.from({ length: 8 }, (_, k) => A2 + SLICE * k); // includes both edges of the gap

function Toppings({ angle, dy = 0, flip = false }: { angle: number; dy?: number; flip?: boolean }) {
  const [px, py] = pt(118, angle + (flip ? 6 : -4), dy);
  const [ox, oy] = pt(64, angle + (flip ? -10 : 12), dy);
  const [sx, sy] = pt(146, angle + (flip ? -13 : 13), dy);
  return (
    <>
      <circle className="pz-pep" cx={f(px)} cy={f(py)} r="17" pathLength={1} />
      <circle className="pz-pep" cx={f(px - 4)} cy={f(py - 3)} r="2.4" pathLength={1} />
      <circle className="pz-pep" cx={f(px + 5)} cy={f(py + 4)} r="1.8" pathLength={1} />
      <circle className="pz-olive" cx={f(ox)} cy={f(oy)} r="7" pathLength={1} />
      <circle className="pz-olive" cx={f(ox)} cy={f(oy)} r="2.6" pathLength={1} />
      <path className="pz-cheese" d={`M${f(sx - 9)} ${f(sy)}q9 -7 18 0`} pathLength={1} />
    </>
  );
}

export default function Pizza() {
  const ref = useRef<SVGSVGElement>(null);
  const [state, setState] = useState<"static" | "armed" | "drawn">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    setState("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("drawn");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg ref={ref} className="pizza" data-state={state} viewBox="0 0 480 480" role="img" aria-label="Line drawing of a pizza with one slice pulled out">
      {/* construction layer: protractor ticks, guide circle, centre mark */}
      <g className="pz-guide">
        <circle cx={C} cy={C} r="214" />
        {Array.from({ length: 72 }, (_, i) => {
          const len = i % 6 === 0 ? 12 : 6;
          return <path key={i} d={`M${P(222, i * 5)}L${P(222 + len, i * 5)}`} />;
        })}
        <path d={`M${C - 10} ${C}h20M${C} ${C - 10}v20`} />
      </g>

      {/* the pizza, minus the pulled slice */}
      <g className="pz-ink pz-crust">
        <path d={arc(R, A2, A1 + 360)} pathLength={1} />
        <path d={arc(RI, A2, A1 + 360)} pathLength={1} />
        <path d={`M${P(R, A1)}L${P(0, 0)}L${P(R, A2)}`} pathLength={1} />
      </g>
      <g className="pz-ink pz-cuts">
        {cuts.slice(1, 7).map((a) => (
          <path key={a} d={`M${P(RI, a)}L${P(10, a)}`} pathLength={1} />
        ))}
      </g>
      <g className="pz-ink pz-top">
        {centers.map((a, k) => (
          <Toppings key={a} angle={a} flip={k % 2 === 1} />
        ))}
      </g>

      {/* the pulled slice and the cheese still holding on */}
      <g className="pz-ink pz-slice">
        <path d={`M${P(0, 0, -PULL)}L${P(R, A1, -PULL)}A${R} ${R} 0 0 1 ${P(R, A2, -PULL)}Z`} pathLength={1} />
        <path d={arc(RI, A1, A2, -PULL)} pathLength={1} />
        <Toppings angle={-90} dy={-PULL} />
      </g>
      <g className="pz-ink pz-strings">
        {[60, 96, 132].map((r, i) => {
          const [x1, y1] = pt(r, A2);
          const [x2, y2] = pt(r, A2, -PULL);
          const sag = 5 + i * 2;
          return <path key={r} d={`M${f(x1)} ${f(y1)}C${f(x1 + sag)} ${f(y1 - 10)} ${f(x2 + sag)} ${f(y2 + 10)} ${f(x2)} ${f(y2)}`} pathLength={1} />;
        })}
        {[78, 120].map((r) => {
          const [x1, y1] = pt(r, A1);
          const [x2, y2] = pt(r, A1, -PULL);
          return <path key={r} d={`M${f(x1)} ${f(y1)}C${f(x1 - 6)} ${f(y1 - 10)} ${f(x2 - 6)} ${f(y2 + 10)} ${f(x2)} ${f(y2)}`} pathLength={1} />;
        })}
      </g>
    </svg>
  );
}
