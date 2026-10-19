import { Code, Cpu, Network, type LucideIcon } from "lucide-react";
import type { ProgramId } from "@/lib/content";

const ICONS: Record<ProgramId, LucideIcon> = {
  practice: Code,
  "system-design": Network,
  gpu: Cpu,
};

export default function ProgramIcon({ id }: { id: ProgramId }) {
  const Icon = ICONS[id];
  return (
    <span className="ico" aria-hidden="true">
      <Icon size={22} strokeWidth={1.25} />
    </span>
  );
}
