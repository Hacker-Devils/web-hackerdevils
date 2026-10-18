import type { Metadata } from "next";
import Faq from "@/components/Faq";
import ThanksForm from "@/components/ThanksForm";
import { PageHeader } from "@/components/Bands";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description: "Join Hacker Devils in three steps: Discord, Sun Devil Central, then show up Wednesday. No experience required.",
};

export default function JoinPage() {
  return (
    <div className="grid">
      <PageHeader title="Join" lead="Three steps, and you’re in. No experience required." />

      <a href={links.discord} className="t js s4">
        <b aria-hidden="true">1</b>
        <h3>Join the Discord</h3>
        <p>Announcements, weekly problems and room details.</p>
        <span className="go">Open Discord →</span>
      </a>
      <a href={links.sunDevilCentral} className="t js s4">
        <b aria-hidden="true">2</b>
        <h3>Register on Sun Devil Central</h3>
        <p>Become an official member of the org.</p>
        <span className="go">Open Sun Devil Central →</span>
      </a>
      <div className="t js s4 gold">
        <b aria-hidden="true">3</b>
        <h3>Show up Wednesday</h3>
        <p>6–7 PM on the Tempe campus. Bring a laptop.</p>
      </div>

      <Faq />

      <section className="t contact s5" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p className="lab">Questions, partnerships or sponsorships. Or email {links.email}.</p>
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
      </section>
    </div>
  );
}
