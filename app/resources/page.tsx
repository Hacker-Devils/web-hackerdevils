import type { Metadata } from "next";
import ResourceLibrary from "@/components/ResourceLibrary";
import { PageHeader, SectionRule } from "@/components/Bands";

export const metadata: Metadata = {
  title: "Resources",
  description: "Slides, notes and practice problems from every Hacker Devils session, filed by track.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader title="The" accent="archive." lead="Slides, notes and practice problems from every session, filed by track." />
      <section className="section wrap" aria-label="Library">
        <SectionRule />
        <div style={{ marginTop: 32 }}>
          <ResourceLibrary />
        </div>
      </section>
    </>
  );
}
