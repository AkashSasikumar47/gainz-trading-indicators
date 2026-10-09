"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { IndicatorDialog } from "@/components/indicator-dialog";
import { IndicatorGrid } from "@/components/indicator-grid";
import { IntroScreen } from "@/components/intro-screen";
import { INTRO } from "@/components/motion/timing";
import { SitePanel } from "@/components/site-panel";
import { INDICATORS } from "@/lib/indicators";

export function GainzSite() {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [settled, setSettled] = useState(false);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    if (reduced) {
      setPlaying(false);
      setSettled(true);
      return;
    }
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const settle = window.setTimeout(
      () => setPlaying(false),
      INTRO.settle * 1000,
    );
    const unlock = window.setTimeout(() => {
      root.style.overflow = "";
      setSettled(true);
    }, INTRO.unlock * 1000);
    return () => {
      window.clearTimeout(settle);
      window.clearTimeout(unlock);
      root.style.overflow = "";
    };
  }, [reduced]);

  const position = INDICATORS.findIndex(
    (indicator) => indicator.slug === openSlug,
  );
  const open = INDICATORS[position] ?? null;

  const step = (by: 1 | -1) => {
    const next =
      INDICATORS[(position + by + INDICATORS.length) % INDICATORS.length];
    if (next) setOpenSlug(next.slug);
  };

  return (
    <div className="flex flex-col px-gutter lg:grid lg:grid-cols-[20rem_1fr] lg:gap-x-12 xl:grid-cols-[22rem_1fr] xl:gap-x-16">
      <IntroScreen playing={playing} />
      <SitePanel settled={!playing} />
      <main className="max-lg:order-2">
        <IndicatorGrid settled={settled} onOpen={setOpenSlug} />
      </main>
      <IndicatorDialog
        indicator={open}
        position={position}
        total={INDICATORS.length}
        onClose={() => setOpenSlug(null)}
        onStep={step}
      />
    </div>
  );
}
