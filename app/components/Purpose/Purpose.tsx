import React from "react";

const Purpose = () => {
  return (
    <section
      id="purpose"
      className="max-w-screen-xl bg-white mx-auto px-4 py-4 md:px-8 lg:py-8 flex flex-col gap-8 lg:gap-12"
      aria-label="Why Traders Choose GAINZ"
    >
      <h2 className="font-bold text-xl lg:text-2xl">
        Why Traders Choose GAINZ
      </h2>

      <div className="text-neutral-500 flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base lg:text-lg">
            Precision Engineered
          </h3>
          <p className="font-normal text-xs lg:text-sm">
            Each indicator is built with clean, efficient Pine Script and
            optimized for TradingView performance.
          </p>
        </article>
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base lg:text-lg">
            Open & Transparent
          </h3>
          <p className="font-normal text-xs lg:text-sm">
            All indicators are fully open-source and available on GitHub.
          </p>
        </article>
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base lg:text-lg">
            Built for Real Use
          </h3>
          <p className="font-normal text-xs lg:text-sm">
            Developed by a trader, for traders — tested on live market data.
          </p>
        </article>
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base lg:text-lg">
            Constantly Evolving
          </h3>
          <p className="font-normal text-xs lg:text-sm">
            New indicators and updates are added regularly as trading trends
            evolve.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Purpose;
