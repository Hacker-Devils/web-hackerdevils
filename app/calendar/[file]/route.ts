import { upcomingEvents } from "@/content/events";
import { hasCalendar, icsFile } from "@/lib/calendar";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return upcomingEvents.filter(hasCalendar).map((event) => ({ file: `${event.id}.ics` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const event = upcomingEvents.find((item) => `${item.id}.ics` === file);
  if (!event) return new Response("Not found", { status: 404 });
  return new Response(icsFile(event), {
    headers: { "Content-Type": "text/calendar; charset=utf-8", "Content-Disposition": `attachment; filename="${file}"` },
  });
}
