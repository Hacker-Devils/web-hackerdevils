import type { ReactNode } from "react";

const TOKEN = /(#.*$)|\b(def|for|in|if|return|and|or|not|while|else|elif|__global__|void|float|int)\b/g;

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of line.matchAll(TOKEN)) {
    const at = match.index ?? 0;
    if (at > last) out.push(line.slice(last, at));
    out.push(
      <span key={at} className={match[1] ? "code-comment" : "code-keyword"}>
        {match[0]}
      </span>,
    );
    last = at + match[0].length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

/** Scrollable code listing. It takes keyboard focus so long lines can be scrolled without a mouse. */
export function CodeBlock({ lines, label }: { lines: readonly string[]; label: string }) {
  return (
    <pre className="code-block" tabIndex={0} role="region" aria-label={label}>
      <code>
        {lines.map((line, i) => (
          <span key={i} className="code-line">
            {highlight(line)}
            {"\n"}
          </span>
        ))}
      </code>
    </pre>
  );
}
