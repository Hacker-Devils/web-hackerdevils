import type { ReactNode } from "react";
import { Container } from "./Section";

/** Section title with the logo's slash in front, plus an optional lead. */
export function SectionHeading({ id, title, lead }: { id: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </header>
  );
}

/** The h1 band at the top of every inner page. */
export function PageHeading({ title, lead, children }: { title: string; lead: string; children?: ReactNode }) {
  return (
    <header className="page-heading">
      <Container>
        <h1>{title}</h1>
        <p>{lead}</p>
        {children}
      </Container>
    </header>
  );
}
