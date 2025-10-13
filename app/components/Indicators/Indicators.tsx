import React from "react";

const Indicators = () => {
  return (
    <section
      id="Indicators"
      className="max-w-screen-sm bg-white mx-auto px-4 py-8 flex flex-col gap-8"
      aria-label="Indicators Page"
    >
      <h2 className="font-bold text-2xl mt-16">
        Explore All TradingView Indicators
      </h2>

      <div className="flex flex-col gap-3 text-neutral-500">
        <p className="font-normal text-base">
          Welcome to the GAINZ Indicators Library — a collection of expertly
          crafted TradingView tools built to simplify technical analysis and
          enhance trading precision.
        </p>

        <p className="font-normal text-base">
          Each indicator is designed to help you uncover market trends, identify
          entry and exit points, and make smarter, data-driven trading
          decisions.
        </p>
      </div>
    </section>
  );
};

export default Indicators;
