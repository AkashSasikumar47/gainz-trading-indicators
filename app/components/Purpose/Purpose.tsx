import React from "react";

const Purpose = () => {
  return (
    <section
      id="explore"
      className="max-w-screen-sm bg-white mx-auto px-4 py-4 flex flex-col gap-8"
      aria-label="Explore TradingView Indicators"
    >
      <h2 className="font-bold text-lg">Why Traders Choose GAINZ</h2>

      <div className="text-black flex flex-col gap-6">
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base">Precision Engineered</h3>
          <p className="font-normal text-sm">
            Each indicator is built with clean, efficient Pine Script and
            optimized for TradingView performance.
          </p>
        </article>
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base">Open & Transparent</h3>
          <p className="font-normal text-sm">
            All indicators are fully open-source and available on GitHub.
          </p>
        </article>
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base">Built for Real Use</h3>
          <p className="font-normal text-sm">
            Developed by a trader, for traders — tested on live market data.
          </p>
        </article>
        <article className="h-[150px] border border-neutral-200 bg-white flex flex-col items-start justify-between rounded-lg shadow-xs px-4 py-8">
          <h3 className="font-medium text-base">Constantly Evolving</h3>
          <p className="font-normal text-sm">
            New indicators and updates are added regularly as trading trends
            evolve.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Purpose;
