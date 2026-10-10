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

const STACK =
  "fixed inset-0 flex flex-col items-center justify-center gap-6 px-gutter motion-reduce:hidden";

const WIDTH = "w-48 sm:w-56";

export function IntroScreen({ playing }: { playing: boolean }) {
  const count = useMotionValue(0);
  const shown = useTransform(count, pad);
  const progress = useTransform(count, [0, INDICATORS.length], [0, 1]);

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
            className={`${STACK} z-40 bg-background`}
            exit={{ opacity: 0, transition: { duration: INTRO.fade } }}
          >
            <Wordmark className={`invisible ${WIDTH}`} />
            <motion.div
              className={`flex h-8 flex-col justify-between ${WIDTH}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: INTRO.count }}
            >
              <div className="h-px w-full bg-border">
                <motion.div
                  className="h-px origin-left bg-foreground"
                  style={{ scaleX: progress }}
                />
              </div>
              <div className="flex justify-between font-mono text-xs text-muted-foreground">
                <span>Indicators</span>
                <span>
                  <motion.span className="text-foreground">{shown}</motion.span>{" "}
                  / {pad(INDICATORS.length)}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {playing && (
        <div aria-hidden className={`${STACK} pointer-events-none z-50`}>
          <Wordmark play shared className={WIDTH} />
          <div className={`h-8 ${WIDTH}`} />
        </div>
      )}
    </>
  );
}
