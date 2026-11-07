"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { googleCalendarUrl, nextMeeting } from "@/lib/calendar";

/** Fixed start for the prerendered link (first Wednesday of Fall 2026), so server and client markup match. */
const ANCHOR = Date.UTC(2026, 7, 19);

/** Adds the repeating Wednesday meeting to Google Calendar, starting from the visitor's next Wednesday. */
export function WeeklyCalendarButton({ size, label = "Add to Google Calendar" }: { size?: "default" | "small"; label?: string }) {
  const [href, setHref] = useState(() => googleCalendarUrl(nextMeeting(ANCHOR)));

  useEffect(() => {
    setHref(googleCalendarUrl(nextMeeting(Date.now())));
  }, []);

  return (
    <Button href={href} variant="secondary" size={size}>
      {label}
    </Button>
  );
}
