import type { Metadata } from "next";
import ThanksForm from "@/components/ThanksForm";
import { PageHeader } from "@/components/Bands";
import { interviewFormats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mock interviews",
  description: "AI-assisted practice on demand, plus live 45-minute interviews with peers and officers.",
};

type Format = (typeof interviewFormats)["ai" | "peer"];

function FormatTile({ f, variant }: { f: Format; variant: "ai" | "peer" }) {
  return (
    <section className={`t ivd ${variant} s6`} aria-labelledby={`${variant}-title`}>
      <span className="k">{f.tag}</span>
      <h2 id={`${variant}-title`}>{f.name}</h2>
      <p>{f.desc}</p>
      <ul className="pts">
        {f.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
      <div className="how">
        <div className="lab">How it works</div>
        <ol className="steps">
          {f.steps.map((s, i) => (
            <li key={s} className="li">
              <b aria-hidden="true">{i + 1}</b>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function InterviewsPage() {
  return (
    <div className="grid">
      <PageHeader title="Mock interviews" lead="Walk into the real interview having already done it a dozen times." />
      <FormatTile f={interviewFormats.ai} variant="ai" />
      <FormatTile f={interviewFormats.peer} variant="peer" />

      <section className="t formt s12" id="request" aria-labelledby="request-title">
        <div className="ft">
          <h2 id="request-title">Request a mock interview</h2>
          <p className="lab">We’ll match you with an interviewer and confirm on Discord.</p>
        </div>
        <ThanksForm
          className="form two"
          endpoint={process.env.NEXT_PUBLIC_INTERVIEW_FORM_ENDPOINT}
          submitLabel="Request interview"
          thanksTag="Request received"
          thanksTitle="Thanks, we’ll be in touch."
          thanksBody="Look for a message on Discord or at your ASU email."
        >
          <label>
            Name
            <input name="name" required autoComplete="name" placeholder="Sparky the Sun Devil" />
          </label>
          <label>
            ASU email
            <input name="email" type="email" required autoComplete="email" placeholder="sparky@asu.edu" />
          </label>
          <label>
            Format
            <select name="format" defaultValue="Peer & officer (live)">
              <option>Peer &amp; officer (live)</option>
              <option>AI-assisted</option>
            </select>
          </label>
          <label>
            Focus
            <select name="focus" defaultValue="Algorithms">
              <option>Algorithms</option>
              <option>System design</option>
              <option>GPU programming</option>
              <option>Behavioral</option>
            </select>
          </label>
          <label className="full">
            Availability
            <input name="availability" placeholder="e.g. Tue/Thu after 4 PM" />
          </label>
        </ThanksForm>
      </section>
    </div>
  );
}
