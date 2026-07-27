import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-4">
        <span className="font-display text-[12px] font-semibold tabular-nums text-lift-blue">
          {index}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-ink-800 to-transparent" />
        <span className="text-[11px] font-medium tracking-[0.18em] text-ink-500">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-6 font-display text-[clamp(1.85rem,4vw,2.9rem)] font-semibold leading-[1.2] tracking-[-0.025em]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-[15.5px] leading-[1.8] text-ink-500">{lead}</p>
      ) : null}
    </Reveal>
  );
}
