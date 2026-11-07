"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui";
import { problems } from "@/content/problems";

/** A real problem at each level. Choosing one swaps the statement, solution and examples. */
export function ProblemPanel() {
  const [active, setActive] = useState(0);
  const problem = problems[active];

  return (
    <div className="problem-panel">
      <div className="problem-picker" role="group" aria-label="Choose a problem">
        {problems.map((p, i) => (
          <button key={p.title} type="button" aria-pressed={i === active} onClick={() => setActive(i)}>
            <strong>{p.difficulty}</strong>
            {p.title}
          </button>
        ))}
      </div>
      <p className="problem-statement">{problem.statement}</p>
      <CodeBlock lines={problem.code} label={`Solution to ${problem.title}`} />
      <ul className="problem-examples">
        {problem.examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>
      <p className="problem-complexity">{problem.complexity}</p>
    </div>
  );
}
