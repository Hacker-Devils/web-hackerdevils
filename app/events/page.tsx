import type { Metadata } from "next";
import { HostSection, PastEventsSection, UpcomingEventsSection } from "@/components/sections/EventsSections";
import { JoinSection } from "@/components/sections/JoinSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PageHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events",
  description: "Technical interview prep at Hacker Devils: LeetCode every Wednesday and system design every other week, with GPU programming coming soon.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeading title="Events" lead="Weekly meetings and a few bigger events each semester. Dates go out on Discord first." />
      <UpcomingEventsSection />
      <ProgramsSection detailed />
      <PastEventsSection />
      <HostSection />
      <JoinSection />
    </>
  );
}
