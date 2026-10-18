"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Flips data-theme on <html> and remembers the choice.
 * Which icon shows is pure CSS (see .theme-toggle in globals.css), so server and client markup always match.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("hkd-theme", next);
    } catch {
      /* storage blocked: the theme still applies to this page */
    }
  }

  return (
    <button type="button" className="btn o ic theme-toggle" onClick={toggle} aria-label="Toggle light and dark theme">
      <Sun className="sun" size={16} strokeWidth={1.75} aria-hidden="true" />
      <Moon className="moon" size={16} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
