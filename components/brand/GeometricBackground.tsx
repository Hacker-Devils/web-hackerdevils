"use client";

import { useEffect, useRef } from "react";

type Shape = {
  kind: "circle" | "square" | "triangle";
  x: number;
  y: number;
  angle?: number;
  desktop?: boolean;
};

const layers: { depth: number; reverseY?: boolean; shapes: Shape[] }[] = [
  {
    depth: 0.2,
    shapes: [
      { kind: "circle", x: 6, y: 13 },
      { kind: "circle", x: 90, y: 15 },
      { kind: "circle", x: 48, y: 13, desktop: true },
    ],
  },
  {
    depth: 0.7,
    shapes: [
      { kind: "square", x: 70, y: 8, angle: 20 },
      { kind: "triangle", x: 25, y: 5, angle: 20, desktop: true },
      { kind: "square", x: 43, y: 38, angle: 25, desktop: true },
    ],
  },
  {
    depth: 0.3,
    reverseY: true,
    shapes: [
      { kind: "circle", x: 6, y: 30, desktop: true },
      { kind: "circle", x: 64, y: 75 },
      { kind: "triangle", x: 17, y: 77, angle: 80, desktop: true },
      { kind: "square", x: 3, y: 70, angle: 20 },
      { kind: "circle", x: 49, y: 60 },
      { kind: "triangle", x: 56, y: 79, angle: 20 },
    ],
  },
  {
    depth: 0.6,
    shapes: [
      { kind: "circle", x: 32, y: 16 },
      { kind: "triangle", x: 20, y: 20, angle: 20, desktop: true },
      { kind: "triangle", x: 94, y: 27, angle: 40, desktop: true },
      { kind: "square", x: 76, y: 18, angle: 20 },
      { kind: "square", x: 37, y: 88, angle: 20 },
    ],
  },
  {
    depth: 0.4,
    shapes: [
      { kind: "circle", x: 85, y: 33, desktop: true },
      { kind: "triangle", x: 13, y: 45, angle: 50 },
      { kind: "triangle", x: 92, y: 48, angle: 90, desktop: true },
      { kind: "square", x: 79, y: 72, angle: 20 },
      { kind: "circle", x: 54, y: 29, desktop: true },
      { kind: "square", x: 59, y: 52, angle: 35, desktop: true },
    ],
  },
  {
    depth: 0.6,
    shapes: [
      { kind: "circle", x: 78, y: 55 },
      { kind: "triangle", x: 26, y: 60, angle: 20 },
      { kind: "triangle", x: 92, y: 67, desktop: true },
      { kind: "triangle", x: 47, y: 73, angle: -20 },
    ],
  },
];

function Outline({ kind }: { kind: Shape["kind"] }) {
  if (kind === "circle") return <circle cx="20" cy="20" r="14" />;
  if (kind === "square") return <rect x="7" y="7" width="26" height="26" />;
  return <path d="M20 5 36 33H4Z" />;
}

export function GeometricBackground() {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const groups = Array.from(scene.current?.querySelectorAll<SVGGElement>("g[data-depth]") ?? []);
    if (!groups.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frame = 0;
    let previousTime = 0;

    const enabled = () => !reducedMotion.matches && finePointer.matches && !document.hidden;

    function paint() {
      groups.forEach((group, index) => {
        const { depth, reverseY } = layers[index];
        const x = current.x * depth;
        const y = current.y * depth * (reverseY ? -1 : 1);
        group.setAttribute("transform", `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
      });
    }

    function animate(time: number) {
      // Match a 10% easing step at 60Hz without speeding up on high-refresh displays.
      const step = 1 - Math.pow(0.9, Math.min((time - previousTime) / (1000 / 60), 3));
      previousTime = time;
      current.x += (target.x - current.x) * step;
      current.y += (target.y - current.y) * step;

      const settled = Math.abs(target.x - current.x) < 0.05 && Math.abs(target.y - current.y) < 0.05;
      if (settled) {
        current.x = target.x;
        current.y = target.y;
      }
      paint();
      frame = settled ? 0 : window.requestAnimationFrame(animate);
    }

    function schedule() {
      if (frame || !enabled()) return;
      previousTime = performance.now();
      frame = window.requestAnimationFrame(animate);
    }

    function move(event: PointerEvent) {
      if (!enabled() || event.pointerType === "touch") return;
      target.x = (1 - (event.clientX / window.innerWidth) * 2) * Math.min(window.innerWidth * 0.05, 80);
      target.y = (1 - (event.clientY / window.innerHeight) * 2) * Math.min(window.innerHeight * 0.05, 50);
      schedule();
    }

    function recenter() {
      target.x = 0;
      target.y = 0;
      schedule();
    }

    function leave(event: PointerEvent) {
      if (event.relatedTarget === null) recenter();
    }

    function reset() {
      window.cancelAnimationFrame(frame);
      frame = 0;
      current.x = current.y = target.x = target.y = 0;
      paint();
    }

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", leave, { passive: true });
    window.addEventListener("blur", recenter);
    window.addEventListener("resize", reset);
    document.addEventListener("visibilitychange", reset);
    reducedMotion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("blur", recenter);
      window.removeEventListener("resize", reset);
      document.removeEventListener("visibilitychange", reset);
      reducedMotion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
    };
  }, []);

  return (
    <div className="geometric-background" ref={scene} aria-hidden="true">
      <svg width="100%" height="100%" focusable="false" fill="none" stroke="currentColor" strokeWidth="2.2">
        {layers.map((layer, index) => (
          <g key={index} data-depth={layer.depth}>
            {layer.shapes.map((shape, shapeIndex) => (
              <svg
                key={shapeIndex}
                className={shape.desktop ? "background-shape background-shape--desktop" : "background-shape"}
                x={`${shape.x}%`}
                y={`${shape.y}%`}
                width={shape.kind === "triangle" ? 36 : 30}
                height={shape.kind === "triangle" ? 36 : 30}
                viewBox="0 0 40 40"
                focusable="false"
              >
                <g transform={`rotate(${shape.angle ?? 0} 20 20)`}>
                  <Outline kind={shape.kind} />
                </g>
              </svg>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
