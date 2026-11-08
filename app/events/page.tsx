import type { Metadata } from "next";
import { CodeAThonFeature } from "@/components/sections/CodeAThonFeature";
import { HostSection, RecapsSection, UpcomingEventsSection } from "@/components/sections/EventsSections";
import { JoinSection } from "@/components/sections/JoinSection";
import { PageHeading } from "@/components/ui";
import meetingCrowd from "@/public/photos/meeting-crowd.jpg";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Hacker Devils meetings you can add to your calendar, plus recaps of past events with their slides.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeading title="Events" lead="What’s coming up, and what we’ve already covered. Dates go out on Discord first."
        photo={{ src: meetingCrowd, alt: "A full lecture hall of students listening during a Hacker Devils event" }}
      />
      <CodeAThonFeature />
      <UpcomingEventsSection />
      <RecapsSection />
      <HostSection />
      <JoinSection />
    </>
  );
}
