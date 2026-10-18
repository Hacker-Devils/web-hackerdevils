import type { Metadata } from "next";
import ResourceLibrary from "@/components/ResourceLibrary";
import { PageHeader } from "@/components/Bands";

export const metadata: Metadata = {
  title: "Resources",
  description: "Slides, notes and practice problems from every Hacker Devils session, filed by track.",
};

export default function ResourcesPage() {
  return (
    <div className="grid">
      <PageHeader title="Resources" lead="Slides, notes and practice problems from every session, filed by track." />
      <ResourceLibrary />
    </div>
  );
}
