"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="max-w-screen-xl bg-white mx-auto px-4 py-12 md:px-8 lg:py-20 flex flex-col gap-8 lg:gap-12"
      aria-label="Contact GAINZ Support"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-bold text-2xl leading-tight mt-12 lg:text-4xl lg:leading-snug"
      >
        Let’s Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl font-normal text-neutral-500 text-base lg:text-lg lg:leading-relaxed flex flex-col gap-4"
      >
        <p>
          Have a question, collaboration idea, or feedback about{" "}
          <strong className="text-black">GAINZ</strong> TradingView indicators?
          We’d love to hear from you.
        </p>

        <p>
          Whether you're a trader looking to integrate custom scripts or a
          developer interested in contributing, feel free to reach out to us.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactUs;
