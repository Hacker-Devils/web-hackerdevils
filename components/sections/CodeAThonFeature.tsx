"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, FactList, Section } from "@/components/ui";
import { codeAThon, codeAThonFacts } from "@/content/events";
import { isUpcoming } from "@/lib/calendar";
import { AddToCalendar } from "./AddToCalendar";
import { CodeAThonAtmosphere, CodeAThonMobilePoster } from "./CodeAThonAtmosphere";
import keyboard from "@/public/prizes/keychron-keyboard.jpg";
import gta from "@/public/prizes/gta-vi.jpg";
import speaker from "@/public/prizes/jbl-speaker.jpg";
import squishmallows from "@/public/prizes/squishmallows.jpg";

const prizeTracks = [
  {
    name: "Advanced track",
    prizes: [
      { name: "Keychron Keyboard", image: keyboard },
      { name: "GTA VI", image: gta },
      { name: "JBL Speaker", image: speaker },
    ],
  },
  { name: "Beginner track", prizes: [{ name: "Squishmallows", image: squishmallows }] },
];

/** Keeps the full event card as a recap after the homepage promotion ends. */
export function CodeAThonFeature({ showPrizes = false }: { showPrizes?: boolean }) {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  const completed = !isUpcoming(codeAThon, now);
  if (completed && !showPrizes) return null;

  return (
    <Section id="code-a-thon" labelledBy="code-a-thon-title">
      <article className={`feature${showPrizes ? " feature--prizes" : ""}`}>
        <div className={showPrizes ? "feature-event-head" : "feature-unfeatured"}>
          {showPrizes ? <CodeAThonMobilePoster /> : null}
          <div className={showPrizes ? "feature-copy" : undefined}>
            {showPrizes ? <p className="feature-date">{completed ? "Completed · " : ""}Sunday, Nov 22 · 1–4 PM · PSF 173</p> : null}
            <h2 id="code-a-thon-title">Code-A-Thon</h2>
            <p className="feature-lead">
              {showPrizes ? (
                completed ? <>Code, competition <em>and prizes.</em></> : <>Code. Compete. <em>Take home the prizes.</em></>
              ) : (
                <>A coding competition on HackerRank, in person, with <em>a chance to win GTA 6</em>.</>
              )}
            </p>
            {showPrizes ? <p className="feature-pizza">Free pizzas included!</p> : null}
            {!completed ? (
              <div className="feature-actions">
                <Button href="/code-a-thon" size="small">
                  Register
                </Button>
                <AddToCalendar event={codeAThon} />
              </div>
            ) : null}
            {showPrizes ? <FactList items={codeAThonFacts} /> : null}
          </div>
          {!showPrizes ? <FactList items={codeAThonFacts} /> : null}
        </div>
        {showPrizes ? <CodeAThonAtmosphere /> : null}
        {showPrizes ? (
          <div className="feature-prizes">
            {prizeTracks.map((track) => (
              <div className="prize-track" key={track.name}>
                <h3>{track.name}<span>Prizes</span></h3>
                <ul className="prize-list">
                  {track.prizes.map((prize) => (
                    <li key={prize.name}>
                      <figure>
                        <div className="prize-photo">
                          <Image src={prize.image} alt="" sizes="(max-width: 639px) 96px, (max-width: 959px) 20vw, 220px" />
                        </div>
                        <figcaption>{prize.name}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </article>
    </Section>
  );
}
