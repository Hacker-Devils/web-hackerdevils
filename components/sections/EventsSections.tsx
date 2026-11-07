import { Button, Section, SectionHeading, TextLink } from "@/components/ui";
import { recaps } from "@/content/events";
import { links } from "@/content/site";
import { UpcomingList } from "./UpcomingList";

export function UpcomingEventsSection({ linkToRecaps = false }: { linkToRecaps?: boolean }) {
  return (
    <Section id="upcoming" labelledBy="upcoming-title">
      <SectionHeading id="upcoming-title" title="On the calendar" lead="Add a session to your calendar and it repeats for the rest of the semester." />
      <UpcomingList />
      {linkToRecaps ? (
        <p className="section-footnote">
          <TextLink href="/events#recaps">Read event recaps and download slides</TextLink>
        </p>
      ) : null}
    </Section>
  );
}

export function RecapsSection() {
  return (
    <Section id="recaps" tone="soft" labelledBy="recaps-title">
      <SectionHeading id="recaps-title" title="Event recaps" lead="What we covered, with the slides from each meeting when they were posted." />
      <div className="recap-groups">
        {recaps.map((group) => (
          <section key={group.semester} className="recap-group" aria-label={group.semester}>
            <h3>{group.semester}</h3>
            <ul className="event-list">
              {group.events.map((event) => (
                <li key={event.date + event.title}>
                  <p className="event-date">{event.date}</p>
                  <div className="event-body">
                    <h4>{event.title}</h4>
                    <p>{event.summary}</p>
                  </div>
                  {event.slides || event.link ? (
                    <div className="event-actions">
                      {event.slides ? (
                        <a className="slides-link" href={event.slides.href} target="_blank" rel="noreferrer">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3.25 1.75h6l3.5 3.5v9h-9.5zM9 1.75v3.75h3.75" />
                          </svg>
                          <span>
                            <strong>
                              Slides<span className="visually-hidden"> for {event.title}</span>
                            </strong>
                            PDF, {event.slides.pages} pages, {event.slides.size}
                          </span>
                        </a>
                      ) : null}
                      {event.link ? (
                        <Button href={event.link.href} variant="secondary" size="small">
                          {event.link.label}
                        </Button>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}

export function HostSection() {
  return (
    <Section labelledBy="host-title">
      <SectionHeading
        id="host-title"
        title="Run an event with us"
        lead="We co-host events with organizations like the AI Society, WiCS and SoDA. If you run a club or a company tech talk, email the officers."
      />
      <Button href={`mailto:${links.email}`} variant="secondary">
        Email the officers
      </Button>
    </Section>
  );
}
