import type { Metadata } from "next";
import { JoinSection } from "@/components/sections/JoinSection";
import { ContactSection, FaqSection } from "@/components/sections/JoinPageSections";
import { PageHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Join",
  description: "Join Hacker Devils: Discord, Sun Devil Central, then come to a Wednesday meeting. No experience required.",
};

export default function JoinPage() {
  return (
    <>
      <PageHeading title="Join Hacker Devils" lead="It takes a Discord account and a Sun Devil Central registration. Then come to a meeting." />
      <JoinSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
