import type { KeyboardEvent } from "react";

/** Arrow / Home / End handling for an ARIA tablist. Returns the next index, or null to ignore the key. */
export function nextTabIndex(e: KeyboardEvent, index: number, count: number): number | null {
  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
      return (index + 1) % count;
    case "ArrowLeft":
    case "ArrowUp":
      return (index - 1 + count) % count;
    case "Home":
      return 0;
    case "End":
      return count - 1;
    default:
      return null;
  }
}
