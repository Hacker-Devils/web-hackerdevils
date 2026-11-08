import type { Metadata } from "next";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { FactList, PageHeading, Section } from "@/components/ui";
import { codeAThonFacts } from "@/content/events";

export const metadata: Metadata = {
  title: "Code-A-Thon registration",
  description: "Register for the Hacker Devils Code-A-Thon: Sunday, November 22, 1 to 4 PM in PSF 173. Beginner and advanced tracks, with a chance to win GTA 6.",
};

export default function CodeAThonPage() {
  return (
    <>
      <PageHeading title="Register for the Code-A-Thon" lead="A coding competition on HackerRank, in person, with a chance to win GTA 6. Pick the track that fits you." />
      <Section>
        <div className="register-grid">
          <RegistrationForm />
          <aside aria-label="Event details">
            <FactList items={codeAThonFacts} />
          </aside>
        </div>
      </Section>
    </>
  );
}
