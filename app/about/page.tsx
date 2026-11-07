import type { Metadata } from "next";
import { BoardSection, MissionSection, PartnersSection } from "@/components/sections/AboutSections";
import { JoinSection } from "@/components/sections/JoinSection";
import { PageHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Who Hacker Devils are, the Fall 2026 board, and the clubs we work with.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading title="Who we are" lead="A Fulton Schools club for technical interview prep. Built for tech majors, open to every ASU student." />
      <MissionSection />
      <BoardSection />
      <PartnersSection />
      <JoinSection />
    </>
  );
}
