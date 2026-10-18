"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section className="t faq s7" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      {faq.map((item, i) => {
        const isOpen = !!open[i];
        return (
          <div key={item.q} className="q">
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
              >
                {item.q}
                <i aria-hidden="true">+</i>
              </button>
            </h3>
            <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`a${isOpen ? " open" : ""}`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
