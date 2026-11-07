import { Button, Section, SectionHeading, TextLink } from "@/components/ui";
import { pastEvents, upcomingEvents } from "@/content/events";
import { links } from "@/content/site";
import { EventList } from "./EventList";

export function UpcomingEventsSection({ linkToAll = false }: { linkToAll?: boolean }) {
  return (
    <Section labelledBy="upcoming-title">
      <SectionHeading id="upcoming-title" title="On the calendar." lead="Weekly meetings, plus a few events each semester." />
      <EventList events={upcomingEvents} />
      {linkToAll ? (
        <p className="section-footnote">
          <TextLink href="/events">See past events</TextLink>
        </p>
      ) : null}
    </Section>
  );
}

export function PastEventsSection() {
  return (
    <Section tone="soft" labelledBy="past-title">
      <SectionHeading id="past-title" title="Past events." />
      <EventList events={pastEvents} />
    </Section>
  );
}

export function HostSection() {
  return (
    <Section labelledBy="host-title">
      <SectionHeading
        id="host-title"
        title="Run an event with us."
        lead="We co-host events with organizations like WiCS and SoDA. If you run a club or a company tech talk, email the officers."
      />
      <Button href={`mailto:${links.email}`} variant="secondary">
        Email the officers
      </Button>
    </Section>
  );
}
