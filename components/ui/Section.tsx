import type { ReactNode } from "react";

export type SectionTone = "plain" | "soft" | "maroon" | "gold";

/** Centered page-width wrapper. */
export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

type SectionProps = {
  id?: string;
  labelledBy?: string;
  tone?: SectionTone;
  children: ReactNode;
};

/** Full-width page band. `tone` sets its colours, and everything inside inherits them. */
export function Section({ id, labelledBy, tone = "plain", children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={labelledBy}>
      <Container>{children}</Container>
    </section>
  );
}
