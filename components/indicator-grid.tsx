"use client";

import { IndicatorCard } from "@/components/indicator-card";
import { GRID, INTRO } from "@/components/motion/timing";
import { INDICATORS } from "@/lib/indicators";

export function IndicatorGrid({
  settled,
  onOpen,
}: {
  settled: boolean;
  onOpen: (slug: string) => void;
}) {
  return (
    <section
      aria-label="Indicators"
      className="flex flex-col gap-4 pt-2 pb-14 lg:pt-[max(1.25rem,env(safe-area-inset-top))] lg:pb-[max(2rem,env(safe-area-inset-bottom))]"
    >
      <header className="flex items-baseline justify-between gap-4 border-b pb-3 text-sm font-medium">
        <h2>Indicators</h2>
        <p className="font-mono text-xs text-muted-foreground">
          {INDICATORS.length} charts
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 min-[112rem]:grid-cols-3">
        {INDICATORS.map((indicator, index) => (
          <IndicatorCard
            key={indicator.slug}
            indicator={indicator}
            index={index}
            delay={
              settled
                ? (index % 2) * GRID.revealStagger
                : INTRO.tiles + Math.min(index, 6) * INTRO.tileStagger
            }
            onOpen={() => onOpen(indicator.slug)}
          />
        ))}
      </ul>
    </section>
  );
}
