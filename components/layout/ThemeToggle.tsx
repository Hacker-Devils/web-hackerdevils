"use client";

/** Flips data-theme on <html> and remembers the choice. Shows a moon in light mode and a sun in dark mode, swapped by CSS so the server render never mismatches. */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    // Switch every colour in the same frame instead of letting hover transitions fade at different speeds.
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", next);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
    try {
      localStorage.setItem("hkd-theme", next);
    } catch {
      /* storage blocked: the theme still applies to this page */
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Switch between light and dark theme">
      <svg className="theme-icon-moon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <svg className="theme-icon-sun" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}
