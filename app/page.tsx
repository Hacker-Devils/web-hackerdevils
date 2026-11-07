import { UpcomingEventsSection } from "@/components/sections/EventsSections";
import { HomeHero } from "@/components/sections/HomeHero";
import { JoinSection } from "@/components/sections/JoinSection";
import { MeetingSection } from "@/components/sections/MeetingSection";
import { PizzaSection } from "@/components/sections/PizzaSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProgramsSection />
      <MeetingSection />
      <PizzaSection />
      <UpcomingEventsSection linkToAll />
      <JoinSection />
    </>
  );
}
