import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section
      id="Call to Action"
      className="max-w-screen-sm bg-white mx-auto px-4 py-4 flex flex-col gap-8"
      aria-label="Call to Action"
    >
      <h2 className="font-bold text-lg">Take Your Trading to the Next Level</h2>

      <div className="font-normal text-sm text-neutral-500 flex flex-col gap-3">
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
          className="text-black hover:text-orange-500 hover:underline font-medium text-sm py-4"
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
          className="text-black hover:text-orange-500 hover:underline font-medium text-sm py-4"
        >
          Visit GitHub →
        </Link>
      </div>
    </section>
  );
};

export default CTA;
