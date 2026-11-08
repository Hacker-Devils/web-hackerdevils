"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button } from "@/components/ui";
import { links, nav } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

/**
 * The page links and header actions. Under 860px the links fold into a menu
 * that drops below the bar; on wider screens they sit inline and the menu button is hidden.
 */
export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  // Following a link closes the menu. Adjusting state during render avoids an extra effect pass.
  if (open && openedOn !== pathname) setOpen(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      const target = event.target as Node;
      if (!panel.current?.contains(target) && !button.current?.contains(target)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <>
      <nav ref={panel} id="site-menu" className="main-nav" aria-label="Main" data-open={open || undefined}>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Button href={links.discord} icon={<DiscordIcon />} className="main-nav-cta">
          Join the Discord
        </Button>
      </nav>
      <div className="site-header-actions">
        <ThemeToggle />
        <Button href={links.discord} size="small" icon={<DiscordIcon />} className="site-header-cta">
          Join the Discord
        </Button>
        <button
          ref={button}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => {
            setOpenedOn(pathname);
            setOpen(!open);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path className="menu-line menu-line-top" d="M2 5h14" />
            <path className="menu-line menu-line-mid" d="M2 9h14" />
            <path className="menu-line menu-line-bottom" d="M2 13h14" />
          </svg>
        </button>
      </div>
    </>
  );
}
