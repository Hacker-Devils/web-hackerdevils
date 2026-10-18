import { Code, Cpu, MessageSquare, Network, Timer, Zap, type LucideIcon } from "lucide-react";
import type { ProgramId } from "@/lib/content";

const ICONS: Record<ProgramId, LucideIcon> = {
  practice: Code,
  codeathon: Timer,
  interviews: MessageSquare,
  "system-design": Network,
  gpu: Cpu,
  "inference-backend": Zap,
};

export default function ProgramIcon({ id }: { id: ProgramId }) {
  const Icon = ICONS[id];
  return (
    <span className="ico" aria-hidden="true">
      <Icon size={20} strokeWidth={1.75} />
    </span>
  );
}
