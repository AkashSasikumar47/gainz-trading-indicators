"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_IN_OUT, EASE_OUT, INTRO } from "@/components/motion/timing";
import { PriceLine } from "@/components/price-line";

const LETTERS = ["G", "A", "I", "N", "Z"];

export function Wordmark({
  play = false,
  shared = false,
  className = "",
}: {
  play?: boolean;
  shared?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const still = reduced || !play;

  return (
    <motion.div
      layoutId={shared ? "wordmark" : undefined}
      transition={{ layout: { duration: INTRO.glide, ease: EASE_IN_OUT } }}
      className={`@container ${className}`}
    >
      <div aria-label="GAINZ" role="img" className="flex">
        {LETTERS.map((letter, index) => (
          <span
            key={letter}
            aria-hidden
            className="-mb-[0.06em] overflow-hidden pb-[0.06em] text-[35.2cqw] leading-[0.8] font-extrabold tracking-[-0.06em]"
          >
            <motion.span
              className="block"
              initial={still ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: INTRO.letterDuration,
                ease: EASE_OUT,
                delay: INTRO.letters + index * INTRO.letterStagger,
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </div>
      <PriceLine play={play} />
    </motion.div>
  );
}
