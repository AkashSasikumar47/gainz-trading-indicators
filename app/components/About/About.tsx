"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-screen-xl bg-white mx-auto px-4 py-4 md:px-8 lg:py-8 flex flex-col gap-8 lg:gap-12"
      aria-label="About Us"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-bold text-xl lg:text-2xl"
      >
        What is GAINZ?
      </motion.h2>

      <motion.img
        src="/Images/Explore_Image.png"
        alt="Trading overview"
        loading="lazy"
        width={1200}
        height={800}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl font-normal text-sm lg:text-base text-neutral-500 flex flex-col gap-3"
      >
        <p>
          GAINZ is a curated hub of custom-built TradingView indicators created
          to empower traders of all levels.
        </p>
        <p>
          From trend-following tools to volatility trackers, each indicator is
          designed to give you clear, data-backed insights into the market —
          helping you trade smarter, not harder.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
