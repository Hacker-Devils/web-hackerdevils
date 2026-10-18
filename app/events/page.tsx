import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import EventsTabs from "@/components/EventsTabs";
import { JoinBand, PageHeader } from "@/components/Bands";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Weekly meetings, Code-A-Thons and collaborations across ASU.",
};

export default function EventsPage() {
  return (
    <div className="grid">
      <PageHeader title="Events" lead="Weekly meetings, Code-A-Thons and collaborations across ASU." />
      <EventsTabs title="All events" className="s8 ev-tall" note="Fall dates are announced on Discord first." />
      <div className="col s4">
        <Countdown />
        <section className="t host" aria-labelledby="host-title">
          <h3 id="host-title">Host with us</h3>
          <p className="lab">Running a club or a company tech talk? We co-host contests, mock OAs and interview nights.</p>
          <a className="btn p" href={`mailto:${links.email}`}>
            Email the officers
          </a>
        </section>
      </div>
      <JoinBand />
    </div>
  );
}
