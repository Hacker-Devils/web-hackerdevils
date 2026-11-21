import type { Metadata } from "next";
import Image from "next/image";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
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
      <article className="registration-event">
        <header className="registration-intro">
          <p className="feature-date">Sunday, Nov 22 · 1–4 PM · PSF 173</p>
          <h1 id="registration-title">Register for the Code-A-Thon</h1>
          <p className="registration-lead">Code. Compete. <em>Take home the prizes.</em> Pick the track that fits you.</p>
          <p className="feature-pizza">Free pizzas included!</p>
          <div className="registration-facts">
            <FactList items={codeAThonFacts} />
          </div>
        </header>
        <div className="registration-poster" aria-hidden="true">
          <Image src={backdrop} alt="" fill unoptimized sizes="(max-width: 639px) 100vw, (max-width: 959px) 45vw, 480px" preload />
        </div>
        <div className="registration-form">
          <RegistrationForm />
        </div>
      </article>
    </Section>
  );
}
