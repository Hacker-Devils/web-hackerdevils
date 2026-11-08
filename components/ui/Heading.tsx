import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Container } from "./Section";

/** Section title with an optional lead. */
export function SectionHeading({ id, title, lead }: { id: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </header>
  );
}

type HeadingPhoto = { src: StaticImageData; alt: string };

/** The h1 band at the top of every inner page, with an optional photo beside it. */
export function PageHeading({ title, lead, photo, children }: { title: string; lead: string; photo?: HeadingPhoto; children?: ReactNode }) {
  const text = (
    <>
      <h1>{title}</h1>
      <p>{lead}</p>
      {children}
    </>
  );
  return (
    <header className="page-heading">
      <Container>
        {photo ? (
          <div className="page-heading-split">
            <div>{text}</div>
            <Image className="page-heading-photo" src={photo.src} alt={photo.alt} sizes="(min-width: 720px) 460px, 100vw" quality={90} priority placeholder="blur" />
          </div>
        ) : (
          text
        )}
      </Container>
    </header>
  );
}
