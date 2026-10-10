"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, INTRO } from "@/components/motion/timing";
import { Wordmark } from "@/components/wordmark";
import { COLLECTIONS_URL } from "@/lib/indicators";

const LINKS = [
  { label: "Pine Script on GitHub", href: COLLECTIONS_URL },
  {
    label: "TradingView Pine Editor",
    href: "https://www.tradingview.com/pine/",
  },
];

export function SitePanel({ settled }: { settled: boolean }) {
  const reduced = useReducedMotion();
  const appear = (step: number) => ({
    initial: { opacity: 0, y: 10, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: reduced
      ? { duration: 0 }
      : {
          duration: INTRO.textDuration,
          ease: EASE_OUT,
          delay: INTRO.text + step * INTRO.textStagger,
        },
  });

  return (
    <aside className="flex flex-col justify-between gap-12 text-sm leading-snug font-medium max-lg:contents lg:sticky lg:top-0 lg:z-[45] lg:h-dvh lg:pt-[max(1.25rem,env(safe-area-inset-top))] lg:pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <div className="relative z-[45] flex flex-col gap-6 max-lg:order-1 max-lg:pt-[max(1.25rem,env(safe-area-inset-top))] max-lg:pb-10">
        <h1 className="sr-only">GAINZ, open-source TradingView indicators</h1>
        {settled ? (
          <Wordmark key="shared" shared className="w-24" />
        ) : (
          <Wordmark key="placeholder" className="invisible w-24" />
        )}

        <motion.div {...appear(0)} className="flex flex-col gap-3">
          <p>
            Thirty-five TradingView indicators, written in Pine Script and free
            to use.
          </p>
          <p className="text-muted-foreground">
            Trend, momentum, volatility, volume and levels. Open any chart to
            see how it reads, its defaults and the source.
          </p>
        </motion.div>
      </div>

      <motion.div
        {...appear(1)}
        className="flex flex-col gap-6 max-lg:order-3 max-lg:border-t max-lg:pt-8 max-lg:pb-[max(2rem,env(safe-area-inset-bottom))]"
      >
        <ul className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-[0.2em] transition-colors hover:decoration-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          Not financial advice. © {new Date().getFullYear()} GAINZ
        </p>
      </motion.div>
    </aside>
  );
}
