import Link from "next/link";
import type { Program } from "@/lib/content";
import ProgramIcon from "./ProgramIcon";

export function toneClass(p: Program) {
  return p.tone === "plain" ? "" : ` ${p.tone}`;
}

function TileBody({ p }: { p: Program }) {
  return (
    <>
      <ProgramIcon id={p.id} />
      <span className="when">{p.when}</span>
      <h3>{p.name}</h3>
      <p>{p.short}</p>
    </>
  );
}

/** Home page tile: links to the program's tab on /programs. */
export default function ProgramTile({ p }: { p: Program }) {
  return (
    <Link href={`/programs#${p.id}`} className={`t pg s4${toneClass(p)}`}>
      <TileBody p={p} />
    </Link>
  );
}

export { TileBody };
