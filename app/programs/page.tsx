import type { Metadata } from "next";
import ProgramsExplorer from "@/components/ProgramsExplorer";
import { JoinBand, PageHeader } from "@/components/Bands";

export const metadata: Metadata = {
  title: "Programs",
  description: "Weekly practice, Code-A-Thons, mock interviews, system design and GPU programming workshops at Hacker Devils.",
};

export default function ProgramsPage() {
  return (
    <div className="grid">
      <PageHeader title="Programs" lead="Weekly practice, contests, interviews and workshops. Pick what you need." />
      <ProgramsExplorer />
      <JoinBand />
    </div>
  );
}
