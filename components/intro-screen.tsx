"use client";

import { useEffect } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { EASE_OUT, INTRO } from "@/components/motion/timing";
import { Wordmark } from "@/components/wordmark";
import { INDICATORS } from "@/lib/indicators";

const pad = (value: number) => String(Math.round(value)).padStart(2, "0");

export function IntroScreen({ playing }: { playing: boolean }) {
  const count = useMotionValue(0);
  const shown = useTransform(count, pad);

  useEffect(() => {
    const controls = animate(count, INDICATORS.length, {
      duration: INTRO.countDuration,
      ease: EASE_OUT,
      delay: INTRO.count,
    });
    return () => controls.stop();
  }, [count]);

  return (
    <>
      <AnimatePresence>
        {playing && (
          <motion.div
            key="intro-backdrop"
            aria-hidden
            className="fixed inset-0 z-40 flex items-end bg-background px-gutter pb-[max(1.25rem,env(safe-area-inset-bottom))] motion-reduce:hidden"
            exit={{ opacity: 0, transition: { duration: INTRO.fade } }}
          >
            <motion.div
              className="flex w-full justify-between font-mono text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: INTRO.count }}
            >
              <span>Pine Script indicators</span>
              <span>
                <motion.span className="text-foreground">{shown}</motion.span> /{" "}
                {pad(INDICATORS.length)}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {playing && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-50 flex items-center px-gutter motion-reduce:hidden"
        >
          <Wordmark play shared className="w-full max-w-[150dvh]" />
        </div>
      )}
    </>
  );
}
