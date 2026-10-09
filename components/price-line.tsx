"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, INTRO } from "@/components/motion/timing";

const PATH =
  "M1 31 L14 28 L24 32 L38 24 L50 27 L64 20 L76 25 L90 17 L104 21 L118 13 L130 18 L146 12 L160 16 L176 9 L190 14 L206 7 L220 11 L236 5 L252 9 L268 4 L282 6 L295 3";

export function PriceLine({ play }: { play: boolean }) {
  const reduced = useReducedMotion();
  const still = reduced || !play;

  return (
    <svg
      viewBox="0 0 300 36"
      className="mt-[3cqw] block h-auto w-full overflow-visible"
      aria-hidden
    >
      <motion.path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={still ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: INTRO.lineDuration,
          ease: EASE_OUT,
          delay: INTRO.line,
        }}
      />
      <motion.circle
        cx={295}
        cy={3}
        r={3}
        className="fill-primary"
        initial={still ? false : { opacity: 0 }}
        animate={
          reduced
            ? { opacity: 1 }
            : { opacity: 1, r: [3, 9], fillOpacity: [0.45, 0] }
        }
        transition={{
          opacity: { duration: 0.3, delay: still ? 0 : INTRO.dot },
          r: {
            duration: 1.8,
            ease: "easeOut",
            repeat: Infinity,
            delay: still ? 0 : INTRO.dot + 0.3,
          },
          fillOpacity: {
            duration: 1.8,
            ease: "easeOut",
            repeat: Infinity,
            delay: still ? 0 : INTRO.dot + 0.3,
          },
        }}
      />
      <motion.circle
        cx={295}
        cy={3}
        r={3}
        className="fill-primary"
        initial={still ? false : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE_OUT, delay: INTRO.dot }}
      />
    </svg>
  );
}
