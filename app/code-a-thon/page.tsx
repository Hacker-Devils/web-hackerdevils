import type { Metadata } from "next";
import Image from "next/image";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { CodeAThonAtmosphere } from "@/components/sections/CodeAThonAtmosphere";
import { FactList, Section } from "@/components/ui";
import { codeAThonFacts } from "@/content/events";
import backdrop from "@/public/prizes/gta-vi-background.png";

export const metadata: Metadata = {
  title: "Code-A-Thon registration",
  description: "Register for the Hacker Devils Code-A-Thon: Sunday, November 22, 1 to 4 PM in PSF 173. Beginner and advanced tracks, with a chance to win GTA 6.",
};

export default function CodeAThonPage() {
  return (
    <Section labelledBy="registration-title">
      <article className="feature feature--prizes registration-event">
        <header className="feature-event-head">
          <div className="feature-mobile-poster" aria-hidden="true">
            <Image src={backdrop} alt="" fill unoptimized sizes="(max-width: 639px) 100vw, 0px" />
          </div>
          <div className="feature-copy">
            <p className="feature-date">Sunday, Nov 22 · 1–4 PM · PSF 173</p>
            <h1 id="registration-title">Code-A-Thon</h1>
            <p className="feature-lead">Code. Compete. <em>Take home the prizes.</em></p>
            <p className="feature-pizza">Free pizzas included!</p>
            <FactList items={codeAThonFacts} />
          </div>
        </header>
        <CodeAThonAtmosphere preloadBackground />
        <div className="registration-form">
          <RegistrationForm />
        </div>
      </article>
    </Section>
  );
}
