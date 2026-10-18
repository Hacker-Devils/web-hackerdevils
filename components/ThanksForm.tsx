"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

type Props = {
  /** Optional POST endpoint (e.g. a Formspree URL). Without one the form just shows its thank-you state. */
  endpoint?: string;
  className?: string;
  submitLabel: string;
  thanksTitle: string;
  thanksBody: string;
  thanksTag: string;
  children: ReactNode;
};

export default function ThanksForm({ endpoint, className = "form", submitLabel, thanksTitle, thanksBody, thanksTag, children }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const thanksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state === "sent") thanksRef.current?.focus();
  }, [state]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setState("sent");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: new FormData(e.currentTarget), headers: { Accept: "application/json" } });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="sent" role="status" tabIndex={-1} ref={thanksRef}>
        <span className="dot">
          <i aria-hidden="true" />
          {thanksTag}
        </span>
        <b>{thanksTitle}</b>
        <span className="lab">{thanksBody}</span>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      {state === "error" ? (
        <p className="lab full" role="alert">
          Something went wrong. Please try again or email hckrdevils@gmail.com.
        </p>
      ) : null}
      <button className="btn p" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
