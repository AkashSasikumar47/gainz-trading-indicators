"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, GRID } from "@/components/motion/timing";
import type { Indicator } from "@/lib/indicators";

export function IndicatorCard({
  indicator,
  index,
  delay,
  onOpen,
}: {
  indicator: Indicator;
  index: number;
  delay: number;
  onOpen: () => void;
}) {
  const reduced = useReducedMotion();
  const timing = (extra: number, duration: number) =>
    reduced
      ? { duration: 0 }
      : { duration, ease: EASE_OUT, delay: delay + extra };

  return (
    <motion.li
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      <button
        type="button"
        onClick={onOpen}
        className="group flex w-full flex-col gap-2.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <motion.span
          className="relative block aspect-video w-full overflow-hidden bg-chart"
          variants={{
            hidden: { clipPath: "inset(100% 0% 0% 0%)" },
            shown: {
              clipPath: "inset(0% 0% 0% 0%)",
              transition: timing(0, GRID.revealDuration),
            },
          }}
        >
          <Image
            src={`/indicators/${indicator.slug}.webp`}
            alt={`${indicator.name} on a TradingView chart`}
            fill
            sizes="(min-width: 112rem) 33vw, (min-width: 64rem) 38vw, (min-width: 40rem) 50vw, 100vw"
            loading={index < 4 ? "eager" : "lazy"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.span>
        <motion.span
          className="flex items-start justify-between gap-4 text-sm leading-snug font-medium"
          variants={{
            hidden: { opacity: 0, y: 8 },
            shown: { opacity: 1, y: 0, transition: timing(0.35, 0.6) },
          }}
        >
          <span className="flex flex-col">
            <span className="transition-colors group-hover:text-primary">
              {indicator.name}
            </span>
            <span className="text-muted-foreground">
              {indicator.category} · {indicator.code}
            </span>
          </span>
          <span className="font-mono text-xs leading-5 text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.span>
      </button>
    </motion.li>
  );
}
