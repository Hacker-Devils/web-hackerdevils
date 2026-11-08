"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { DiscordIcon } from "@/components/brand/SocialIcons";
import { Button } from "@/components/ui";
import { codeAThon, codeAThonRegistration } from "@/content/events";
import { links } from "@/content/site";
import type { Registration } from "@/lib/registrations";
import { AddToCalendar } from "./AddToCalendar";

type Field = "name" | "email" | "track" | "hackerrank";
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "done"; name: string } | { kind: "failed"; message: string };

const ASU_EMAIL = /^[a-z0-9._%+-]+@asu\.edu$/;

function validate({ name, email, track, hackerrank }: Registration) {
  const errors: Partial<Record<Field, string>> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Enter your full name.";
  if (!ASU_EMAIL.test(email)) errors.email = "Use your ASU email, ending in @asu.edu.";
  if (track !== "beginner" && track !== "advanced") errors.track = "Choose a track.";
  if (hackerrank.length > 40 || /\s/.test(hackerrank)) errors.hackerrank = "HackerRank usernames have no spaces and are at most 40 characters.";
  return errors;
}

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [closed, setClosed] = useState(false);
  const doneHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setClosed(Date.now() >= Date.parse(codeAThonRegistration.closes));
  }, []);

  useEffect(() => {
    if (status.kind === "done") doneHeading.current?.focus();
  }, [status.kind]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Hidden from people; a bot that fills every field gets a fake success.
    if (data.get("website")) return setStatus({ kind: "done", name: "" });

    const entry = {
      name: String(data.get("name") ?? "").trim().replace(/\s+/g, " "),
      email: String(data.get("email") ?? "").trim().toLowerCase(),
      track: String(data.get("track") ?? "") as Registration["track"],
      hackerrank: String(data.get("hackerrank") ?? "").trim().replace(/^@/, ""),
    };
    const found = validate(entry);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      form.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const { register } = await import("@/lib/registrations");
      await register(entry);
      setStatus({ kind: "done", name: entry.name.split(" ")[0] });
    } catch (error) {
      const code = (error as { code?: string }).code;
      setStatus({
        kind: "failed",
        message:
          code === "permission-denied"
            ? `${entry.email} is already registered, or registration has closed. To change your track, message us on Discord.`
            : "You’re not registered yet: we couldn’t reach the sign-up list. Check your connection and try again.",
      });
    }
  }

  if (closed) {
    return (
      <div className="form-panel">
        <h2>Registration is closed</h2>
        <p className="form-note">Follow Discord for results and the next competition.</p>
        <Button href={links.discord} size="small" icon={<DiscordIcon />}>
          Join the Discord
        </Button>
      </div>
    );
  }

  if (status.kind === "done") {
    return (
      <div className="form-panel" role="status">
        <h2 ref={doneHeading} tabIndex={-1}>
          {status.name ? `You’re in, ${status.name}` : "You’re in"}
        </h2>
        <p className="form-note">See you Sunday, November 22 at 1 PM in PSF 173. Bring a laptop.</p>
        <div className="feature-actions">
          <AddToCalendar event={codeAThon} />
          <Button href={links.discord} size="small" icon={<DiscordIcon />}>
            Get updates on Discord
          </Button>
        </div>
      </div>
    );
  }

  const sending = status.kind === "sending";
  const describe = (field: Field, hint?: string) =>
    [hint, errors[field] && `${field}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <form className="form-panel" onSubmit={onSubmit} noValidate aria-labelledby="register-form-title">
      <h2 id="register-form-title">Your details</h2>

      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" required maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={describe("name")} />
        {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">ASU email</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required placeholder="asurite@asu.edu" aria-invalid={Boolean(errors.email)} aria-describedby={describe("email")} />
        {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
      </div>

      <fieldset className="field" aria-invalid={Boolean(errors.track)} aria-describedby={describe("track")}>
        <legend>Track</legend>
        <div className="track-options">
          {codeAThonRegistration.tracks.map((track) => (
            <label key={track.value} className="track-option">
              <input type="radio" name="track" value={track.value} required />
              <span>
                <strong>{track.label}</strong>
                {track.detail}
              </span>
            </label>
          ))}
        </div>
        {errors.track && <p className="field-error" id="track-error">{errors.track}</p>}
      </fieldset>

      <div className="field">
        <label htmlFor="hackerrank">
          HackerRank username <span className="field-optional">optional</span>
        </label>
        <input id="hackerrank" name="hackerrank" autoComplete="off" maxLength={40} aria-invalid={Boolean(errors.hackerrank)} aria-describedby={describe("hackerrank", "hackerrank-hint")} />
        <p className="field-hint" id="hackerrank-hint">The contest runs on HackerRank. Make an account before the day if you don’t have one.</p>
        {errors.hackerrank && <p className="field-error" id="hackerrank-error">{errors.hackerrank}</p>}
      </div>

      <div className="field-trap" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "failed" && (
        <p className="form-error" role="alert">
          {status.message}
        </p>
      )}

      <button className="button button--primary" type="submit" disabled={sending} aria-disabled={sending}>
        {sending ? "Registering…" : "Register"}
      </button>
      <p className="form-note">We only use this to run the Code-A-Thon and contact you about it.</p>
    </form>
  );
}
