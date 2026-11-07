import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

/** Every call to action on the site. Internal paths use next/link; web links open in a new tab. */
export function Button({ href, variant = "primary", size = "default", icon, className = "", children }: Props) {
  const classes = `button button--${variant} button--${size} ${className}`.trim();
  const body = (
    <>
      {icon}
      {children}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href}>
        {body}
      </Link>
    );
  }
  const external = href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a className={classes} href={href} {...external}>
      {body}
    </a>
  );
}
