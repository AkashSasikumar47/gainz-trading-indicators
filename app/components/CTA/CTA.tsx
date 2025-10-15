"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="Call to Action"
      className="max-w-screen-xl bg-white mx-auto px-4 py-4 md:px-8 lg:py-8 flex flex-col gap-8 lg:gap-12"
      aria-label="Call to Action"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-bold text-xl lg:text-2xl"
      >
        Take Your Trading to the Next Level
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl font-normal text-sm lg:text-base text-neutral-500 flex flex-col gap-3"
      >
        <p>
          Ready to level up your stock market analysis and trading strategies?
        </p>
        <p>
          Explore our full suite of custom TradingView indicators, designed to
          give you actionable insights and help you trade smarter with
          confidence.
        </p>
        <Link
          href="/indicators"
          className="text-black hover:text-orange-500 hover:underline font-medium text-sm lg:text-base"
        >
          Explore Indicators →
        </Link>
        <p>
          All GAINZ indicators are fully open-source and available on GitHub —
          inspect the code, test it in TradingView, and even contribute to make
          these tools better.
        </p>
        <Link
          href="https://github.com/AkashSasikumar47"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-orange-500 hover:underline font-medium text-sm lg:text-base"
        >
          Visit GitHub →
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
