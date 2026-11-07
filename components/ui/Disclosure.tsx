import type { ReactNode } from "react";

/** Native expand and collapse, so keyboard and screen reader support come built in. */
export function Disclosure({ summary, defaultOpen, children }: { summary: string; defaultOpen?: boolean; children: ReactNode }) {
  return (
    <details className="disclosure" open={defaultOpen}>
      <summary>{summary}</summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}
