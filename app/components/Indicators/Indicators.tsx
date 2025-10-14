import React from "react";

const Indicators = () => {
  return (
    <section
      id="Indicators"
      className="max-w-screen-xl bg-white mx-auto px-4 py-12 md:px-8 lg:py-20 flex flex-col gap-8 lg:gap-12"
      aria-label="Indicators Page"
    >
      <h2 className="font-bold text-2xl leading-tight mt-12 lg:text-4xl lg:leading-snug">
        Explore All TradingView Indicators
      </h2>

      <div className="max-w-2xl font-normal text-neutral-500 text-base lg:text-lg lg:leading-relaxed flex flex-col gap-4">
        <p>
          Welcome to the GAINZ Indicators Library — a collection of expertly
          crafted TradingView tools built to simplify technical analysis and
          enhance trading precision.
        </p>

        <p>
          Each indicator is designed to help you uncover market trends, identify
          entry and exit points, and make smarter, data-driven trading
          decisions.
        </p>
      </div>
    </section>
  );
};

export default Indicators;
