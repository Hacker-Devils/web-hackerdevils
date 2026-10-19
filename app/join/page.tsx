import type { Metadata } from "next";
import Faq from "@/components/Faq";
import ThanksForm from "@/components/ThanksForm";
import { JoinTerminal, PageHeader, SectionRule, SectionIntro } from "@/components/Bands";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description: "Join Hacker Devils in three steps: Discord, Sun Devil Central, then show up Wednesday. No experience required.",
};

export default function JoinPage() {
  return (
    <>
      <PageHeader title="Three steps," accent="you’re in." lead="No experience required. Open to every ASU student, any major, any year." />

      <section className="section wrap" aria-labelledby="steps-title">
        <SectionRule />
        <div className="meeting-grid" style={{ marginTop: 42 }}>
          <div className="meeting-copy">
            <h2 id="steps-title">
              Start this <span className="accent">Wednesday.</span>
            </h2>
            <p>Join the Discord for announcements and room details, register on Sun Devil Central to make it official, then come solve something.</p>
          </div>
          <JoinTerminal />
        </div>
      </section>

      <section className="section flush wrap" aria-labelledby="faq-title">
        <SectionRule />
        <SectionIntro id="faq-title" lead={`Something else? Email ${links.email}.`}>
          Questions, <span className="accent">answered.</span>
        </SectionIntro>
        <Faq />
      </section>

      <section className="section flush wrap" aria-labelledby="contact-title">
        <SectionRule />
        <div className="meeting-grid" style={{ marginTop: 42 }}>
          <div className="meeting-copy">
            <h2 id="contact-title">
              Say <span className="accent">hello.</span>
            </h2>
            <p>Questions, partnerships or sponsorships. An officer will reply by email.</p>
          </div>
          <div className="terminal">
            <div className="terminal-heading mono">
              <span>
                <span className="status-dot" aria-hidden="true" /> Hacker Devils — contact
              </span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-command">
                <span aria-hidden="true">$</span>hkd message --to officers
              </p>
              <ThanksForm
                endpoint={process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT}
                submitLabel="Send message"
                thanksTag="Message sent"
                thanksTitle="Thanks, we’ll be in touch."
                thanksBody="An officer will reply by email, usually within a few days."
              >
                <label>
                  Name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} required />
                </label>
              </ThanksForm>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
