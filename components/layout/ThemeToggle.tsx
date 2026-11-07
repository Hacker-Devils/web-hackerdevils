"use client";

/** Flips data-theme on <html> and remembers the choice. The icon is the same half-filled disc in both themes. */
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
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 1.75a7.25 7.25 0 0 1 0 14.5z" fill="currentColor" />
      </svg>
    </button>
  );
}
